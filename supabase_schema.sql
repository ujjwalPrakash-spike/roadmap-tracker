-- ==============================================================================
-- Supabase Schema for Systems/Quant 11-Month Roadmap Tracker
-- Run this in your Supabase project's SQL Editor (SQL Editor -> New Query -> Run)
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  cf_handle TEXT DEFAULT '',
  streak_current INT DEFAULT 0,
  streak_longest INT DEFAULT 0,
  last_log_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Problems Table
CREATE TABLE IF NOT EXISTS public.problems (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  source TEXT DEFAULT 'neetcode', -- 'neetcode', 'google_pyq', 'codeforces', 'other'
  pattern TEXT NOT NULL,
  difficulty TEXT DEFAULT 'Medium', -- 'Easy', 'Medium', 'Hard'
  status TEXT DEFAULT 'solved',
  time_spent_min INT DEFAULT 0,
  notes TEXT,
  logged_at DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Failures Table (Failure Log / Flashbacks)
CREATE TABLE IF NOT EXISTS public.failures (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  problem_name TEXT NOT NULL,
  pattern TEXT NOT NULL,
  reason TEXT NOT NULL,
  reviewed BOOLEAN DEFAULT FALSE,
  logged_at DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Projects Table (4 Systems Projects)
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  project_num INT NOT NULL,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'not_started', -- 'not_started', 'in_progress', 'completed'
  stages JSONB DEFAULT '[]'::JSONB,
  benchmarks TEXT,
  repo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, project_num)
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.problems ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.failures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Policies for public.profiles
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Policies for public.problems
CREATE POLICY "Users can view own problems" ON public.problems FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own problems" ON public.problems FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own problems" ON public.problems FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own problems" ON public.problems FOR DELETE USING (auth.uid() = user_id);

-- Policies for public.failures
CREATE POLICY "Users can view own failures" ON public.failures FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own failures" ON public.failures FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own failures" ON public.failures FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own failures" ON public.failures FOR DELETE USING (auth.uid() = user_id);

-- Policies for public.projects
CREATE POLICY "Users can view own projects" ON public.projects FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own projects" ON public.projects FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own projects" ON public.projects FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own projects" ON public.projects FOR DELETE USING (auth.uid() = user_id);

-- Trigger: auto-create profile & seed default 4 projects on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);

  -- Seed default 4 Systems Projects
  INSERT INTO public.projects (user_id, project_num, name, stages)
  VALUES 
  (
    NEW.id, 
    1, 
    '01: Thread Pool + Benchmark Harness',
    '[
      {"label": "Fixed-size thread pool & blocking queue", "done": false},
      {"label": "Task futures & return values", "done": false},
      {"label": "Throughput vs thread count benchmark", "done": false},
      {"label": "Stress testing under 100+ threads & graceful shutdown", "done": false}
    ]'::JSONB
  ),
  (
    NEW.id, 
    2, 
    '02: Event-Driven Multithreaded HTTP Server',
    '[
      {"label": "Single-connection blocking socket server", "done": false},
      {"label": "epoll event loop & non-blocking I/O", "done": false},
      {"label": "HTTP/1.1 parsing & keep-alive", "done": false},
      {"label": "Dispatched to Project 1 Thread Pool", "done": false},
      {"label": "5,000+ concurrent connections benchmark (wrk)", "done": false}
    ]'::JSONB
  ),
  (
    NEW.id, 
    3, 
    '03: Persistent Key-Value Storage Engine (LSM)',
    '[
      {"label": "In-memory Memtable + Write-Ahead Log (WAL)", "done": false},
      {"label": "SSTable disk flush with binary format", "done": false},
      {"label": "Basic compaction engine", "done": false},
      {"label": "Crash recovery from WAL replay test", "done": false},
      {"label": "Write throughput benchmark vs Redis/SQLite", "done": false}
    ]'::JSONB
  ),
  (
    NEW.id, 
    4, 
    '04: Low-Latency Matching Engine + Market Data Feed',
    '[
      {"label": "std::map order book correctness baseline", "done": false},
      {"label": "Price-time priority matching logic", "done": false},
      {"label": "Custom intrusive data structures (zero-alloc hot path)", "done": false},
      {"label": "Lock-free SPSC ring buffer for market data", "done": false},
      {"label": "p50/p99/p999 latency benchmarking & jitter profiling", "done": false}
    ]'::JSONB
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger execution
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
