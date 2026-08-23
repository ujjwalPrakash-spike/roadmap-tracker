# 🐺 Woolf Systems & Quant Roadmap Tracker

A zero-friction, smooth daily habit tracker & scheduled automated reporting engine designed for the **11-Month Systems / Quant Engineering Roadmap**.

---

## ⚡ Key Features

1. **<10s Problem Quick Log**: Auto-focus on problem name, one-click pill selectors for Pattern / Difficulty / Source, `Enter` submission, keyboard shortcuts (`Ctrl+L`, `1`/`2`/`3`).
2. **Failure Log & Flashbacks**: Track root causes for missed problems, built specifically for the **Sunday Revision Protocol**.
3. **4 Systems Projects Tracker**: Track multi-stage milestones across Thread Pool, HTTP Server, KV Storage Engine, and Matching Engine.
4. **Codeforces Rating Auto-Sync**: Live rating fetch via Codeforces API.
5. **Scheduled Automated Mailers (Netlify Functions)**:
   - **Daily Briefing (11:55 PM IST)**: Problems solved today, streak status, failure flashbacks, daily target verification.
   - **Weekly Briefing (Sunday 10:00 PM IST)**: Weekly volume, pattern distribution, project milestones, Sunday revision checklist.

---

## 🚀 Setup & Deployment Guide

### 1. Supabase Setup (2 Minutes)
1. Open your [Supabase Dashboard](https://supabase.com/dashboard) and create/open a project.
2. Go to **SQL Editor** -> **New query**.
3. Paste the contents of `supabase_schema.sql` and click **Run**.
4. Go to **Project Settings** -> **API**:
   - Copy `Project URL`
   - Copy `anon public` key
   - Copy `service_role secret` key (for Netlify scheduled functions)

### 2. Push to GitHub (`ujjwalPrakash-spike`)
```bash
cd /home/ujjwal/roadmap-tracker
git init
git add .
git commit -m "feat: init roadmap tracker with scheduled netlify mailer"
# Create repo 'roadmap-tracker' on GitHub, then:
git remote add origin git@github.com:ujjwalPrakash-spike/roadmap-tracker.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Netlify
1. Open [Netlify](https://app.netlify.com/) -> **Add new site** -> **Import an existing project** -> **GitHub**.
2. Select `roadmap-tracker`.
3. Set **Build command**: `npm install` (or leave blank).
4. Set **Publish directory**: `.`
5. Go to **Site Configuration** -> **Environment variables** and add:
   - `SUPABASE_URL`: `<your-supabase-url>`
   - `SUPABASE_SERVICE_ROLE_KEY`: `<your-supabase-service-role-key>`
   - `GMAIL_USER`: `eugenewoolf220205@gmail.com`
   - `GMAIL_APP_PASSWORD`: `ajfzbmwulcglgxzq`
   - `RECIPIENT_EMAIL`: `eugenewoolf220205@gmail.com`
6. Click **Deploy**.

---

## ⌨️ Keyboard Shortcuts
- `Ctrl+L` or `Alt+L`: Focus Quick Log tab
- `Ctrl+F` or `Alt+F`: Focus Failure Log tab
- `Ctrl+P` or `Alt+P`: Focus 4 Projects tab
- `Ctrl+S` or `Alt+S`: Focus Stats & Review tab
- `1` / `2` / `3`: Set Difficulty to Easy / Medium / Hard when typing problem name
- `Enter`: Submit Problem instantly
