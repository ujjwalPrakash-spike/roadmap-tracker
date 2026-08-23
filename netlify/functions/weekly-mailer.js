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
    const weekTarget = 21; // 3 per day * 7
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
        <div style="margin-bottom: 12px; background: #1a1726; padding: 12px 14px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06);">
          <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; color: #ffffff; margin-bottom: 6px;">
            <span>${p.name}</span>
            <span style="color: #a996ff;">${completedStages}/${stages.length} stages (${pct}%)</span>
          </div>
          <div style="height: 6px; width: 100%; background: #262238; border-radius: 3px; overflow: hidden;">
            <div style="height: 100%; width: ${pct}%; background: linear-gradient(90deg, #a996ff, #6fa8ff);"></div>
          </div>
        </div>
      `;
    }).join('');

    const patternRowsHtml = Object.entries(patternCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([pat, count]) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border-bottom: 1px solid #262238; font-size: 13px;">
          <span style="color: #d0cce3;">${pat}</span>
          <span style="font-weight: 700; color: #a996ff; background: rgba(169,150,255,0.15); padding: 2px 8px; border-radius: 12px;">${count}</span>
        </div>
      `).join('');

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0a12; color: #eae7f4; margin: 0; padding: 24px; }
          .container { max-width: 620px; margin: 0 auto; background: #13111c; border-radius: 12px; border: 1px solid rgba(169, 150, 255, 0.15); overflow: hidden; }
          .header { background: linear-gradient(135deg, #1f1a33, #12101b); padding: 30px 24px; border-bottom: 1px solid rgba(169, 150, 255, 0.15); }
          .badge { display: inline-block; padding: 4px 10px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 20px; background: rgba(111, 168, 255, 0.15); color: #6fa8ff; margin-bottom: 10px; }
          .title { font-size: 24px; font-weight: 700; color: #ffffff; margin: 0 0 6px 0; }
          .subtitle { font-size: 13px; color: #8e88a8; margin: 0; }
          .content { padding: 24px; }
          .section-title { font-size: 14px; font-weight: 600; color: #ffffff; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.06em; }
          .footer { padding: 20px 24px; background: #0e0d16; border-top: 1px solid rgba(255,255,255,0.06); font-size: 12px; color: #6e6884; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">Weekly Systems & DSA Executive Brief</span>
            <h1 class="title">📅 Week in Review (${startDateStr} → ${endDateStr})</h1>
            <p class="subtitle">"Sunday is revision day. Redo failed problems from a blank editor."</p>
          </div>
          <div class="content">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 24px;">
              <div style="background: #1a1726; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); text-align: center;">
                <div style="font-size: 10px; color: #8e88a8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">Weekly Volume</div>
                <div style="font-size: 22px; font-weight: 700; color: ${targetMet ? '#7fd9ab' : '#ff9a63'};">${totalWeekProblems} / ${weekTarget}</div>
              </div>
              <div style="background: #1a1726; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); text-align: center;">
                <div style="font-size: 10px; color: #8e88a8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">Difficulty Split</div>
                <div style="font-size: 12px; font-weight: 600; color: #d0cce3; margin-top: 6px;">
                  <span style="color:#7fd9ab;">${easyCount}E</span> · <span style="color:#6fa8ff;">${medCount}M</span> · <span style="color:#ff9a63;">${hardCount}H</span>
                </div>
              </div>
              <div style="background: #1a1726; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); text-align: center;">
                <div style="font-size: 10px; color: #8e88a8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">Failures Logged</div>
                <div style="font-size: 22px; font-weight: 700; color: #ff9a63;">${(weekFailures || []).length}</div>
              </div>
            </div>

            <div class="section-title">Pattern Distribution This Week</div>
            <div style="background: #161421; border-radius: 8px; overflow: hidden; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.06);">
              ${patternRowsHtml || '<p style="padding: 14px; text-align: center; color: #8e88a8; font-size: 13px;">No problems recorded this week.</p>'}
            </div>

            <div class="section-title">Systems Projects Milestones</div>
            ${projectListHtml}

            <div style="margin-top: 24px; padding: 16px; background: rgba(111, 168, 255, 0.08); border-radius: 8px; border-left: 4px solid #6fa8ff;">
              <div style="font-size: 13px; font-weight: 700; color: #6fa8ff; margin-bottom: 4px;">🎯 SUNDAY REVISION PROTOCOL</div>
              <div style="font-size: 13px; color: #d0cce3; line-height: 1.5;">
                Spend 2–3 hours today re-solving every starred problem or failure entry from the week on a completely blank editor. Never start next week's topics on shaky foundations.
              </div>
            </div>
          </div>
          <div class="footer">
            Woolf Systems Engine · Automated Sunday Scheduled Report
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
      from: `"Woolf Roadmap Tracker" <${gmailUser}>`,
      to: recipientEmail,
      subject: `🐺 Weekly Review (${startDateStr} → ${endDateStr}): ${totalWeekProblems} Solved | Projects & Revision Brief`,
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
