const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  console.log("Starting Daily Mailer Scheduled Function...");

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');
  const recipientEmail = process.env.RECIPIENT_EMAIL || gmailUser;

  if (!supabaseUrl || !supabaseKey || !gmailUser || !gmailPass) {
    console.error("Missing required environment variables.");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing environment variables" }),
    };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // 1. Fetch user profile
    const { data: profiles } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', recipientEmail)
      .limit(1);

    const profile = (profiles && profiles[0]) || { streak_current: 0, streak_longest: 0 };
    const userId = profile.id;

    // Today's date in IST (UTC+5:30)
    const nowIST = new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000);
    const todayStr = nowIST.toISOString().slice(0, 10);

    // 2. Fetch problems logged today
    let problemsQuery = supabase
      .from('problems')
      .select('*')
      .eq('logged_at', todayStr)
      .order('created_at', { ascending: false });

    if (userId) {
      problemsQuery = problemsQuery.eq('user_id', userId);
    }
    const { data: todayProblems } = await problemsQuery;

    // 3. Fetch failures logged today
    let failuresQuery = supabase
      .from('failures')
      .select('*')
      .eq('logged_at', todayStr)
      .order('created_at', { ascending: false });

    if (userId) {
      failuresQuery = failuresQuery.eq('user_id', userId);
    }
    const { data: todayFailures } = await failuresQuery;

    const count = (todayProblems || []).length;
    const streak = profile.streak_current || 0;
    const targetMet = count >= 3;

    // 4. Construct Email HTML
    const problemRows = (todayProblems && todayProblems.length > 0)
      ? todayProblems.map(p => `
        <tr style="border-bottom: 1px solid #22202c;">
          <td style="padding: 10px 12px; color: #f0edf9; font-weight: 500;">${p.name}</td>
          <td style="padding: 10px 12px; color: #a996ff; font-family: 'JetBrains Mono', monospace; font-size: 11.5px;">${p.pattern}</td>
          <td style="padding: 10px 12px;">
            <span style="display: inline-block; padding: 2px 7px; border-radius: 4px; font-size: 10.5px; font-family: 'JetBrains Mono', monospace; font-weight: 600; text-transform: uppercase; ${
              p.difficulty === 'Easy' ? 'background: rgba(127,217,171,0.12); color:#7fd9ab; border: 1px solid rgba(127,217,171,0.25);' :
              p.difficulty === 'Hard' ? 'background: rgba(255,154,99,0.12); color:#ff9a63; border: 1px solid rgba(255,154,99,0.25);' :
              'background: rgba(111,168,255,0.12); color:#6fa8ff; border: 1px solid rgba(111,168,255,0.25);'
            }">${p.difficulty}</span>
          </td>
          <td style="padding: 10px 12px; color: #706a88; font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase;">${p.source}</td>
        </tr>
      `).join('')
      : `<tr><td colspan="4" style="padding: 24px 12px; text-align: center; color: #706a88; font-size: 12px; font-family: 'JetBrains Mono', monospace;">NO SUBMISSIONS RECORDED TODAY</td></tr>`;

    const failureRows = (todayFailures && todayFailures.length > 0)
      ? todayFailures.map(f => `
        <div style="background: #14121d; border-left: 2px solid #ff9a63; padding: 12px 14px; margin-bottom: 8px; border-radius: 0 6px 6px 0;">
          <div style="font-size: 12.5px; font-weight: 600; color: #f0edf9; margin-bottom: 3px;">
            ${f.problem_name} <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #a996ff; font-weight: normal;">[${f.pattern}]</span>
          </div>
          <div style="font-size: 12px; color: #a6a0bd;">Root cause: ${f.reason}</div>
        </div>
      `).join('')
      : `<div style="padding: 12px; background: #14121d; border-radius: 6px; font-size: 12px; color: #706a88; font-family: 'JetBrains Mono', monospace;">NO FAILURE ENTRIES RECORDED</div>`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 32px 16px; background-color: #07060c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f0edf9;">
        <div style="max-width: 580px; margin: 0 auto; background: #100e18; border: 1px solid rgba(169, 150, 255, 0.16); border-radius: 10px; overflow: hidden;">
          
          <!-- Header -->
          <div style="padding: 24px 24px 20px; border-bottom: 1px solid rgba(169, 150, 255, 0.12); background: #14121f;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: #6fa8ff;">DAILY STATUS REPORT</span>
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #706a88;">${todayStr}</span>
            </div>
            <h1 style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; color: #ffffff;">Woolf Systems // Daily Log</h1>
          </div>

          <!-- Body -->
          <div style="padding: 24px;">
            
            <!-- Metric Cards -->
            <table style="width: 100%; border-collapse: separate; border-spacing: 10px 0; margin-bottom: 24px;">
              <tr>
                <td style="width: 50%; background: #171424; border: 1px solid rgba(169, 150, 255, 0.1); border-radius: 8px; padding: 14px 16px;">
                  <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; margin-bottom: 6px;">Daily Target</div>
                  <div style="font-size: 22px; font-weight: 700; font-family: 'JetBrains Mono', monospace; color: ${targetMet ? '#7fd9ab' : '#ff9a63'};">
                    ${count} / 3 <span style="font-size: 11px; font-weight: 500; color: #706a88;">${targetMet ? '[MET]' : '[INCOMPLETE]'}</span>
                  </div>
                </td>
                <td style="width: 50%; background: #171424; border: 1px solid rgba(169, 150, 255, 0.1); border-radius: 8px; padding: 14px 16px;">
                  <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; margin-bottom: 6px;">Active Streak</div>
                  <div style="font-size: 22px; font-weight: 700; font-family: 'JetBrains Mono', monospace; color: #a996ff;">
                    ${streak} <span style="font-size: 11px; font-weight: 500; color: #706a88;">DAYS</span>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Problem Log Table -->
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; margin-bottom: 8px;">Submissions (${count})</div>
            <table style="width: 100%; border-collapse: collapse; background: #14121d; border: 1px solid rgba(169, 150, 255, 0.1); border-radius: 6px; overflow: hidden; margin-bottom: 24px;">
              <thead>
                <tr style="background: #191626; border-bottom: 1px solid #22202c;">
                  <th style="padding: 8px 12px; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; text-align: left;">Problem</th>
                  <th style="padding: 8px 12px; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; text-align: left;">Pattern</th>
                  <th style="padding: 8px 12px; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; text-align: left;">Diff</th>
                  <th style="padding: 8px 12px; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; text-align: left;">Source</th>
                </tr>
              </thead>
              <tbody>
                ${problemRows}
              </tbody>
            </table>

            <!-- Failures -->
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; margin-bottom: 8px;">Failure Log & Flashbacks</div>
            ${failureRows}

            <!-- Focus Note -->
            <div style="margin-top: 20px; padding: 12px 14px; background: #14121d; border: 1px solid rgba(169, 150, 255, 0.1); border-radius: 6px;">
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #a996ff; margin-bottom: 4px;">PROTOCOL DIRECTIVE</div>
              <div style="font-size: 12.5px; color: #a6a0bd; line-height: 1.45;">
                ${targetMet ? 'Daily threshold achieved. Prepare tomorrow\'s 3-problem set in C++.' : 'Minimum standard is 3 problems daily in C++. Log failure patterns for Sunday revision.'}
              </div>
            </div>

          </div>

          <!-- Footer -->
          <div style="padding: 14px 24px; background: #0c0b12; border-top: 1px solid rgba(169, 150, 255, 0.08); font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: #534e68; text-align: center;">
            WOOLF SYSTEMS ENGINE // AUTOMATED DISPATCH
          </div>

        </div>
      </body>
      </html>
    `;

    // 5. Send via Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"Woolf Systems Engine" <${gmailUser}>`,
      to: recipientEmail,
      subject: `Woolf Daily Brief // ${todayStr} [${count}/3 Problems | Streak: ${streak}d]`,
      html: emailHtml,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Daily email sent successfully:", info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Daily email dispatched", messageId: info.messageId }),
    };

  } catch (err) {
    console.error("Error executing daily mailer:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
