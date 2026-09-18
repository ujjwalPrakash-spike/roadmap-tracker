-- ==============================================================================
-- Bulletproof Supabase Schema for Systems/Quant Roadmap Tracker
-- Run this in Supabase SQL Editor (SQL Editor -> New Query -> Run)
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY,
  email TEXT,
  cf_handle TEXT DEFAULT '',
  streak_current INT DEFAULT 0,
  streak_longest INT DEFAULT 0,
  last_log_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.problems (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  source TEXT DEFAULT 'neetcode',
  pattern TEXT NOT NULL,
  difficulty TEXT DEFAULT 'Medium',
  status TEXT DEFAULT 'solved',
  time_spent_min INT DEFAULT 0,
  notes TEXT,
  logged_at DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.failures (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  problem_name TEXT NOT NULL,
  pattern TEXT NOT NULL,
  reason TEXT NOT NULL,
  reviewed BOOLEAN DEFAULT FALSE,
  logged_at DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  project_num INT NOT NULL,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'not_started',
  stages JSONB DEFAULT '[]'::JSONB,
  benchmarks TEXT,
  repo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, project_num)
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.problems ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.failures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- user_id is optional so CLI and website can write without login session
ALTER TABLE public.problems ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE public.failures ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE public.projects ALTER COLUMN user_id DROP NOT NULL;

-- Passwordless open access policies (personal single-user app - anon key is sufficient)
DROP POLICY IF EXISTS "Allow users all actions on profile" ON public.profiles;
DROP POLICY IF EXISTS "Allow users all actions on problems" ON public.problems;
DROP POLICY IF EXISTS "Allow users all actions on failures" ON public.failures;
DROP POLICY IF EXISTS "Allow users all actions on projects" ON public.projects;
DROP POLICY IF EXISTS "Service role profile" ON public.profiles;
DROP POLICY IF EXISTS "Service role problems" ON public.problems;
DROP POLICY IF EXISTS "Service role failures" ON public.failures;
DROP POLICY IF EXISTS "Service role projects" ON public.projects;
DROP POLICY IF EXISTS "Allow anon all actions on profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow anon all actions on problems" ON public.problems;
DROP POLICY IF EXISTS "Allow anon all actions on failures" ON public.failures;
DROP POLICY IF EXISTS "Allow anon all actions on projects" ON public.projects;

CREATE POLICY "Allow anon all actions on profiles" ON public.profiles FOR ALL TO anon, authenticated, service_role USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon all actions on problems" ON public.problems FOR ALL TO anon, authenticated, service_role USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon all actions on failures" ON public.failures FOR ALL TO anon, authenticated, service_role USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon all actions on projects" ON public.projects FOR ALL TO anon, authenticated, service_role USING (true) WITH CHECK (true);

-- Trigger: Safe & exception-guarded so it NEVER blocks signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, COALESCE(NEW.email, ''))
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.projects (user_id, project_num, name, stages)
  VALUES 
  (
    NEW.id, 1, '01: Thread Pool + Benchmark Harness',
    '[{"label": "Fixed-size thread pool & blocking queue", "done": false}, {"label": "Task futures & return values", "done": false}, {"label": "Throughput vs thread count benchmark", "done": false}, {"label": "Stress testing under 100+ threads & graceful shutdown", "done": false}]'::JSONB
  ),
  (
    NEW.id, 2, '02: Event-Driven Multithreaded HTTP Server',
    '[{"label": "Single-connection blocking socket server", "done": false}, {"label": "epoll event loop & non-blocking I/O", "done": false}, {"label": "HTTP/1.1 parsing & keep-alive", "done": false}, {"label": "Dispatched to Project 1 Thread Pool", "done": false}, {"label": "5,000+ concurrent connections benchmark (wrk)", "done": false}]'::JSONB
  ),
  (
    NEW.id, 3, '03: Persistent Key-Value Storage Engine (LSM)',
    '[{"label": "In-memory Memtable + Write-Ahead Log (WAL)", "done": false}, {"label": "SSTable disk flush with binary format", "done": false}, {"label": "Basic compaction engine", "done": false}, {"label": "Crash recovery from WAL replay test", "done": false}, {"label": "Write throughput benchmark vs Redis/SQLite", "done": false}]'::JSONB
  ),
  (
    NEW.id, 4, '04: Low-Latency Matching Engine + Market Data Feed',
    '[{"label": "std::map order book correctness baseline", "done": false}, {"label": "Price-time priority matching logic", "done": false}, {"label": "Custom intrusive data structures (zero-alloc hot path)", "done": false}, {"label": "Lock-free SPSC ring buffer for market data", "done": false}, {"label": "p50/p99/p999 latency benchmarking & jitter profiling", "done": false}]'::JSONB
  )
  ON CONFLICT (user_id, project_num) DO NOTHING;

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Schema Permissions
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO postgres, anon, authenticated, service_role;
