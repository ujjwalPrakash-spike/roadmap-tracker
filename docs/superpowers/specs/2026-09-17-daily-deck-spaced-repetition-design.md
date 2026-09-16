# Design Spec: Daily Mission Deck & Spaced Repetition Engine

**Date:** 2026-09-17  
**Project:** Woolf Systems & Quant Roadmap Tracker  
**Status:** Approved by User  

---

## 1. Executive Summary

Transforms the Woolf Roadmap Tracker from a passive manual logging tool into an **active daily training engine**. Instead of requiring the user to manually find and record problems, the app prescriptively serves today's 3-problem mission based on the NeetCode 250 curriculum sequence, enforces timed practice limits, and manages spaced-repetition reviews from the failure bank.

---

## 2. Core Architecture & Components

```
┌─────────────────────────────────────────────────────────────┐
│                    Woolf Tracker Web UI                     │
├──────────────────────────────┬──────────────────────────────┤
│      Daily Mission Deck      │   Failure Bank / Repetition  │
│  - Slot 1: Curriculum Target │   - Interval Ladder (D3/7/21)│
│  - Slot 2: Curriculum Target │   - Reinforcement Triggers   │
│  - Slot 3: Spaced Review     │   - Sunday Revision Sprint   │
├──────────────────────────────┴──────────────────────────────┤
│                   Embedded NeetCode 250                     │
│    (250 Pre-loaded Problems · LeetCode URLs · Patterns)     │
├─────────────────────────────────────────────────────────────┤
│         Local-First Storage (localStorage) + Supabase       │
├─────────────────────────────────────────────────────────────┤
│        Netlify Scheduled Mailer (Daily & Weekly Briefs)      │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Detailed Component Specifications

### 3.1 Embedded NeetCode 250 Dataset
- Pre-bundled dataset containing all 250 problems organized in canonical roadmap sequence across 18 pattern families:
  1. Arrays & Hashing
  2. Two Pointers
  3. Sliding Window
  4. Stack
  5. Binary Search
  6. Linked List
  7. Trees
  8. Tries
  9. Heap / Priority Queue
  10. Backtracking
  11. Graphs (BFS / DFS / Topo)
  12. Advanced Graphs (Dijkstra / Bellman-Ford / MST / DSU)
  13. 1-D Dynamic Programming
  14. 2-D Dynamic Programming
  15. Greedy
  16. Intervals
  17. Math & Geometry
  18. Bit Manipulation
- Each problem entry includes: `id`, `title`, `slug`, `leetcodeUrl`, `pattern`, `difficulty` (`Easy` | `Medium` | `Hard`), `recommendedOrder`.

### 3.2 The Daily Mission Deck
- Replaces empty manual input form as the default home view.
- Automatically calculates and serves 3 cards daily:
  - **Slots 1 & 2:** Next unsolved sequential curriculum problems.
  - **Slot 3:** Due review problem from the Failure Bank (if none due, pulls a third curriculum problem).
- Card features:
  - Direct 1-click link to problem on LeetCode.
  - Interactive timer preset (25 min for Easy/Medium, 40 min for Hard).
  - One-click action buttons:
    - **`[Solved]`**: Logs completion timestamp, updates streak, marks problem as solved in curriculum.
    - **`[Stalled >25m]`**: Flags problem as stalled, schedules 3 reinforcement reps in same pattern family.
    - **`[Failed]`**: Prompts 1-line root-cause reason and enrolls in the Spaced Repetition Ladder.

### 3.3 Spaced Repetition Engine (Failure Bank)
- **Interval Ladder:** Day 3 $\rightarrow$ Day 7 $\rightarrow$ Day 21 $\rightarrow$ `Mastered`.
- When a problem is marked failed:
  1. Stored in Failure Bank with root-cause tag.
  2. Scheduled for Review 1 on $CurrentDate + 3$.
  3. If passed on Review 1, scheduled for Review 2 on $CurrentDate + 7$.
  4. If passed on Review 2, scheduled for Review 3 on $CurrentDate + 21$.
  5. If passed on Review 3, marked `Mastered`.
  6. If failed at any stage, resets interval to Day 1.

### 3.4 Sunday Revision Sprint Mode
- Automatically triggers every Sunday based on local IST date.
- Locks new curriculum progression for the day.
- Serves a dedicated **Sunday Revision Queue** containing:
  - All problems failed or stalled in the preceding 7 days.
  - Any overdue spaced review items.
- Features a 2-hour countdown session to re-solve all target problems from scratch on a blank editor.

### 3.5 Automated Mailer Integration
- The Netlify daily scheduled function reads the active deck and reports:
  - Problems completed today.
  - Missed problems / root causes.
  - **Tomorrow's Prescribed 3-Problem Lineup** so the user knows what to prepare in advance.

---

## 4. Implementation Plan

1. **Dataset Module:** Construct embedded `neetcode250.js` dataset with all 250 problems, direct URLs, patterns, and difficulty levels.
2. **Scheduler Engine:** Implement deterministic queue algorithm (`getNextDailyMission()`, `getDueReviews()`, `advanceSpacedRepetition()`).
3. **Deck UI:** Build high-density dark mode Daily Deck UI with countdown timer, 1-click status actions, and Sunday Revision switch.
4. **Data Sync:** Extend localStorage and Supabase handlers for curriculum progress and spaced review state.
5. **Mailer Update:** Update `daily-mailer.js` to include tomorrow's prescribed problems in the daily dispatch.
