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
    const { data: profiles, error: profileErr } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', recipientEmail)
      .limit(1);

    if (profileErr || !profiles || profiles.length === 0) {
      console.log(`No profile found for ${recipientEmail}, fetching latest profile`);
    }

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
    const { data: todayProblems, error: probErr } = await problemsQuery;

    // 3. Fetch failures logged today
    let failuresQuery = supabase
      .from('failures')
      .select('*')
      .eq('logged_at', todayStr)
      .order('created_at', { ascending: false });

    if (userId) {
      failuresQuery = failuresQuery.eq('user_id', userId);
    }
    const { data: todayFailures, error: failErr } = await failuresQuery;

    const count = (todayProblems || []).length;
    const streak = profile.streak_current || 0;
    const targetMet = count >= 3;

    // 4. Construct Email HTML
    const problemRows = (todayProblems && todayProblems.length > 0)
      ? todayProblems.map(p => `
        <tr style="border-bottom: 1px solid #2d2b38;">
          <td style="padding: 10px 12px; color: #ffffff; font-weight: 600;">${p.name}</td>
          <td style="padding: 10px 12px; color: #a996ff; font-family: monospace;">${p.pattern}</td>
          <td style="padding: 10px 12px;">
            <span style="display:inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; background: ${
              p.difficulty === 'Easy' ? 'rgba(127,217,171,0.2); color:#7fd9ab;' :
              p.difficulty === 'Hard' ? 'rgba(255,154,99,0.2); color:#ff9a63;' :
              'rgba(111,168,255,0.2); color:#6fa8ff;'
            }">${p.difficulty}</span>
          </td>
          <td style="padding: 10px 12px; color: #8e88a8; font-size: 12px; text-transform: uppercase;">${p.source}</td>
        </tr>
      `).join('')
      : `<tr><td colspan="4" style="padding: 18px; text-align: center; color: #8e88a8; font-style: italic;">No problems logged yet for today.</td></tr>`;

    const failureRows = (todayFailures && todayFailures.length > 0)
      ? todayFailures.map(f => `
        <div style="background: rgba(255, 154, 99, 0.08); border-left: 3px solid #ff9a63; padding: 12px 14px; margin-bottom: 10px; border-radius: 4px;">
          <div style="font-weight: 600; color: #ff9a63; margin-bottom: 4px;">${f.problem_name} <span style="font-size: 11px; color: #8e88a8; font-weight: normal;">(${f.pattern})</span></div>
          <div style="font-size: 13px; color: #d0cce3;"><b>Why missed:</b> ${f.reason}</div>
        </div>
      `).join('')
      : `<p style="color: #7fd9ab; font-size: 13px; margin: 0;">✨ Clean day! No critical failures logged today.</p>`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0a12; color: #eae7f4; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #13111c; border-radius: 12px; border: 1px solid rgba(169, 150, 255, 0.15); overflow: hidden; }
          .header { background: linear-gradient(135deg, #1b172b, #12101b); padding: 28px 24px; border-bottom: 1px solid rgba(169, 150, 255, 0.15); }
          .badge { display: inline-block; padding: 4px 10px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 20px; background: rgba(169, 150, 255, 0.15); color: #a996ff; margin-bottom: 10px; }
          .title { font-size: 22px; font-weight: 700; color: #ffffff; margin: 0 0 6px 0; }
          .subtitle { font-size: 13px; color: #8e88a8; margin: 0; }
          .content { padding: 24px; }
          .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
          .stat-card { background: #1a1726; padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); }
          .stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #8e88a8; margin-bottom: 4px; }
          .stat-val { font-size: 24px; font-weight: 700; color: #ffffff; }
          .section-title { font-size: 15px; font-weight: 600; color: #ffffff; margin: 20px 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em; }
          table { width: 100%; border-collapse: collapse; font-size: 13px; background: #161421; border-radius: 8px; overflow: hidden; margin-bottom: 20px; }
          th { background: #1e1b2e; color: #8e88a8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; padding: 10px 12px; text-align: left; }
          .footer { padding: 20px 24px; background: #0e0d16; border-top: 1px solid rgba(255,255,255,0.06); font-size: 12px; color: #6e6884; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">Daily Ritual Report · ${todayStr}</span>
            <h1 class="title">🐺 Woolf Systems & DSA Tracker</h1>
            <p class="subtitle">"Systems depth over breadth theater. No slack."</p>
          </div>
          <div class="content">
            <div style="display: flex; gap: 12px; margin-bottom: 20px;">
              <div style="flex: 1; background: #1a1726; padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
                <div class="stat-label">Daily Target (3 Min)</div>
                <div class="stat-val" style="color: ${targetMet ? '#7fd9ab' : '#ff9a63'};">${count} / 3 ${targetMet ? '✅' : '⚡'}</div>
              </div>
              <div style="flex: 1; background: #1a1726; padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
                <div class="stat-label">Current Streak</div>
                <div class="stat-val" style="color: #a996ff;">🔥 ${streak} Days</div>
              </div>
            </div>

            <div class="section-title">Today's DSA Submissions (${count})</div>
            <table>
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Pattern</th>
                  <th>Diff</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                ${problemRows}
              </tbody>
            </table>

            <div class="section-title">Failure Log & Flashbacks</div>
            ${failureRows}

            <div style="margin-top: 24px; padding: 14px; background: rgba(169, 150, 255, 0.06); border-radius: 8px; border: 1px solid rgba(169, 150, 255, 0.15);">
              <div style="font-size: 12px; font-weight: 600; color: #a996ff; margin-bottom: 4px;">📌 REMINDER FOR TOMORROW:</div>
              <div style="font-size: 13px; color: #d0cce3;">
                ${targetMet ? 'Great work today. Keep the momentum going tomorrow with 3 problems in C++.' : 'Remember the rule: 3 problems/day minimum, every day, C++ only. Make sure to log every failure!'}
              </div>
            </div>
          </div>
          <div class="footer">
            Automated dispatch from Woolf 11-Month Systems/Quant Engine · Netlify Scheduled Function
          </div>
        </div>
      </body>
      </html>
    `;

    // 5. Send via Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // TLS
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"Woolf Roadmap Tracker" <${gmailUser}>`,
      to: recipientEmail,
      subject: `🐺 Daily Report (${todayStr}): ${count}/3 Problems | 🔥 ${streak} Day Streak`,
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
