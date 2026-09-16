const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  console.log("Starting Weekly Mailer Scheduled Function...");

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

    // Date range for past 7 days in IST
    const nowIST = new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(nowIST.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startDateStr = sevenDaysAgo.toISOString().slice(0, 10);
    const endDateStr = nowIST.toISOString().slice(0, 10);

    // 2. Fetch problems logged in past 7 days
    let problemsQuery = supabase
      .from('problems')
      .select('*')
      .gte('logged_at', startDateStr)
      .lte('logged_at', endDateStr)
      .order('logged_at', { ascending: false });

    if (userId) {
      problemsQuery = problemsQuery.eq('user_id', userId);
    }
    const { data: weekProblems } = await problemsQuery;

    // 3. Pattern breakdown & difficulty count
    const patternCounts = {};
    let easyCount = 0, medCount = 0, hardCount = 0;
    (weekProblems || []).forEach(p => {
      patternCounts[p.pattern] = (patternCounts[p.pattern] || 0) + 1;
      if (p.difficulty === 'Easy') easyCount++;
      else if (p.difficulty === 'Hard') hardCount++;
      else medCount++;
    });

    const totalWeekProblems = (weekProblems || []).length;
    const weekTarget = 21;
    const targetMet = totalWeekProblems >= weekTarget;

    // 4. Fetch failures for the week
    let failuresQuery = supabase
      .from('failures')
      .select('*')
      .gte('logged_at', startDateStr)
      .lte('logged_at', endDateStr);

    if (userId) {
      failuresQuery = failuresQuery.eq('user_id', userId);
    }
    const { data: weekFailures } = await failuresQuery;

    // 5. Fetch projects progress
    let projectsQuery = supabase.from('projects').select('*').order('project_num', { ascending: true });
    if (userId) {
      projectsQuery = projectsQuery.eq('user_id', userId);
    }
    const { data: projects } = await projectsQuery;

    const projectListHtml = (projects || []).map(p => {
      const stages = Array.isArray(p.stages) ? p.stages : [];
      const completedStages = stages.filter(s => s.done).length;
      const pct = stages.length > 0 ? Math.round((completedStages / stages.length) * 100) : 0;
      return `
        <div style="margin-bottom: 8px; background: #14121d; padding: 10px 14px; border-radius: 6px; border: 1px solid rgba(169, 150, 255, 0.08);">
          <div style="display: flex; justify-content: space-between; font-size: 12.5px; font-weight: 500; color: #f0edf9; margin-bottom: 6px;">
            <span>${p.name}</span>
            <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #a996ff;">${completedStages}/${stages.length} [${pct}%]</span>
          </div>
          <div style="height: 4px; width: 100%; background: #221e33; border-radius: 2px; overflow: hidden;">
            <div style="height: 100%; width: ${pct}%; background: #a996ff;"></div>
          </div>
        </div>
      `;
    }).join('');

    const patternRowsHtml = Object.entries(patternCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([pat, count]) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 12px; border-bottom: 1px solid #1f1c2c; font-size: 12.5px;">
          <span style="color: #a6a0bd;">${pat}</span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: #a996ff; background: rgba(169,150,255,0.1); padding: 1px 6px; border-radius: 4px;">${count}</span>
        </div>
      `).join('');

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 32px 16px; background-color: #07060c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f0edf9;">
        <div style="max-width: 600px; margin: 0 auto; background: #100e18; border: 1px solid rgba(169, 150, 255, 0.16); border-radius: 10px; overflow: hidden;">
          
          <!-- Header -->
          <div style="padding: 24px 24px 20px; border-bottom: 1px solid rgba(169, 150, 255, 0.12); background: #14121f;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: #a996ff;">WEEKLY EXECUTIVE BRIEF</span>
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #706a88;">${startDateStr} &rarr; ${endDateStr}</span>
            </div>
            <h1 style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; color: #ffffff;">Woolf Systems // Weekly Review</h1>
          </div>

          <!-- Body -->
          <div style="padding: 24px;">
            
            <!-- Metric Cards -->
            <table style="width: 100%; border-collapse: separate; border-spacing: 8px 0; margin-bottom: 22px;">
              <tr>
                <td style="width: 33.3%; background: #171424; border: 1px solid rgba(169, 150, 255, 0.1); border-radius: 8px; padding: 12px; text-align: center;">
                  <div style="font-family: 'JetBrains Mono', monospace; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; margin-bottom: 4px;">Weekly Volume</div>
                  <div style="font-size: 20px; font-weight: 700; font-family: 'JetBrains Mono', monospace; color: ${targetMet ? '#7fd9ab' : '#ff9a63'};">
                    ${totalWeekProblems} / ${weekTarget}
                  </div>
                </td>
                <td style="width: 33.3%; background: #171424; border: 1px solid rgba(169, 150, 255, 0.1); border-radius: 8px; padding: 12px; text-align: center;">
                  <div style="font-family: 'JetBrains Mono', monospace; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; margin-bottom: 4px;">Difficulty</div>
                  <div style="font-size: 11px; font-family: 'JetBrains Mono', monospace; font-weight: 600; color: #a6a0bd; margin-top: 4px;">
                    <span style="color:#7fd9ab;">${easyCount}E</span> &middot; <span style="color:#6fa8ff;">${medCount}M</span> &middot; <span style="color:#ff9a63;">${hardCount}H</span>
                  </div>
                </td>
                <td style="width: 33.3%; background: #171424; border: 1px solid rgba(169, 150, 255, 0.1); border-radius: 8px; padding: 12px; text-align: center;">
                  <div style="font-family: 'JetBrains Mono', monospace; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; margin-bottom: 4px;">Failures</div>
                  <div style="font-size: 20px; font-weight: 700; font-family: 'JetBrains Mono', monospace; color: #ff9a63;">
                    ${(weekFailures || []).length}
                  </div>
                </td>
              </tr>
            </table>

            <!-- Pattern Distribution -->
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; margin-bottom: 8px;">Pattern Distribution</div>
            <div style="background: #14121d; border: 1px solid rgba(169, 150, 255, 0.1); border-radius: 6px; overflow: hidden; margin-bottom: 22px;">
              ${patternRowsHtml || '<div style="padding: 14px; text-align: center; color: #706a88; font-size: 12px; font-family: \'JetBrains Mono\', monospace;">NO ACTIVITY RECORDED THIS WEEK</div>'}
            </div>

            <!-- Projects -->
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em; color: #706a88; margin-bottom: 8px;">Systems Projects Status</div>
            ${projectListHtml}

            <!-- Sunday Revision Directive -->
            <div style="margin-top: 22px; padding: 14px 16px; background: #14121d; border: 1px solid rgba(169, 150, 255, 0.15); border-radius: 6px;">
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #6fa8ff; margin-bottom: 4px;">SUNDAY REVISION DIRECTIVE</div>
              <div style="font-size: 12.5px; color: #a6a0bd; line-height: 1.5;">
                Re-solve every starred problem or failure entry from the week on a blank editor before introducing new pattern families.
              </div>
            </div>

          </div>

          <!-- Footer -->
          <div style="padding: 14px 24px; background: #0c0b12; border-top: 1px solid rgba(169, 150, 255, 0.08); font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: #534e68; text-align: center;">
            WOOLF SYSTEMS ENGINE // AUTOMATED WEEKLY DISPATCH
          </div>

        </div>
      </body>
      </html>
    `;

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
      subject: `Woolf Weekly Review // ${startDateStr} to ${endDateStr} [${totalWeekProblems} Solved | Projects & Revision Brief]`,
      html: emailHtml,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Weekly email sent successfully:", info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Weekly email dispatched", messageId: info.messageId }),
    };

  } catch (err) {
    console.error("Error executing weekly mailer:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
