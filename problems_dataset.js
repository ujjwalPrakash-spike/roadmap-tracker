// ==============================================================================
// Woolf Systems & Quant Engine — Complete Authoritative Problem Database
// Tracks: NeetCode 250 (Full 18 Patterns), Google Top PYQs, Quant Dev Track, CSES Core
// ==============================================================================

const SHEET_REFERENCES = [
  {
    name: "NeetCode 250",
    category: "Primary Foundation (Months 1–4)",
    url: "https://neetcode.io/practice",
    description: "The complete 250-problem pattern recognition sequence in C++.",
    total: 250
  },
  {
    name: "Google Top Interview PYQs",
    category: "Interview Rigor (Months 5–7)",
    url: "https://leetcode.com/company/google/",
    description: "High-frequency Google onsite & phone screen questions.",
    total: 50
  },
  {
    name: "Quant Developer / Low-Latency Track",
    category: "Capstones & Hot Path (Months 8–11)",
    url: "https://leetcode.com/problemset/all/?search=stream",
    description: "Concurrency, cache-friendly data structures, zero-alloc matching logic.",
    total: 25
  },
  {
    name: "CSES Problem Set",
    category: "CP Depth (Months 8–9)",
    url: "https://cses.fi/problemset/",
    description: "Standard Scandinavian competitive programming benchmark set.",
    total: 300
  },
  {
    name: "Striver's A2Z DSA Sheet",
    category: "Reference Guide",
    url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
    description: "Comprehensive step-by-step topic reference breakdown.",
    total: 455
  },
  {
    name: "Grind 169 (Tech Interview Handbook)",
    category: "Sprint List",
    url: "https://www.techinterviewhandbook.org/grind75?weeks=26&hours=40",
    description: "Prioritized interview list curated by Yangshun Tay.",
    total: 169
  }
];

const CURATED_PROBLEMS = [
  // ==========================================
  // 1. ARRAYS & HASHING (15 Problems)
  // ==========================================
  { id: "nc-1", title: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 1 },
  { id: "nc-2", title: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 2 },
  { id: "nc-3", title: "Two Sum", url: "https://leetcode.com/problems/two-sum/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 3 },
  { id: "nc-4", title: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 4 },
  { id: "nc-5", title: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 5 },
  { id: "nc-6", title: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 6 },
  { id: "nc-7", title: "Valid Sudoku", url: "https://leetcode.com/problems/valid-sudoku/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 7 },
  { id: "nc-8", title: "Encode and Decode Strings", url: "https://leetcode.com/problems/encode-and-decode-strings/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 8 },
  { id: "nc-9", title: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 9 },
  { id: "nc-10", title: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 10 },
  { id: "nc-11", title: "Sort Colors", url: "https://leetcode.com/problems/sort-colors/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 11 },
  { id: "nc-12", title: "Majority Element", url: "https://leetcode.com/problems/majority-element/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 12 },
  { id: "nc-13", title: "Next Greater Element I", url: "https://leetcode.com/problems/next-greater-element-i/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 13 },
  { id: "nc-14", title: "Continuous Subarray Sum", url: "https://leetcode.com/problems/continuous-subarray-sum/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 14 },
  { id: "nc-15", title: "Grid Game", url: "https://leetcode.com/problems/grid-game/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 15 },

  // ==========================================
  // 2. TWO POINTERS (11 Problems)
  // ==========================================
  { id: "nc-16", title: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", pattern: "Two Pointers", difficulty: "Easy", track: "neetcode", order: 16 },
  { id: "nc-17", title: "Two Sum II - Input Array Is Sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 17 },
  { id: "nc-18", title: "3Sum", url: "https://leetcode.com/problems/3sum/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 18 },
  { id: "nc-19", title: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 19 },
  { id: "nc-20", title: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", pattern: "Two Pointers", difficulty: "Hard", track: "neetcode", order: 20 },
  { id: "nc-21", title: "4Sum", url: "https://leetcode.com/problems/4sum/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 21 },
  { id: "nc-22", title: "Move Zeroes", url: "https://leetcode.com/problems/move-zeroes/", pattern: "Two Pointers", difficulty: "Easy", track: "neetcode", order: 22 },
  { id: "nc-23", title: "Remove Duplicates from Sorted Array", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", pattern: "Two Pointers", difficulty: "Easy", track: "neetcode", order: 23 },
  { id: "nc-24", title: "Boats to Save People", url: "https://leetcode.com/problems/boats-to-save-people/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 24 },
  { id: "nc-25", title: "Rotate Array", url: "https://leetcode.com/problems/rotate-array/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 25 },
  { id: "nc-26", title: "Minimum Size Subarray Sum", url: "https://leetcode.com/problems/minimum-size-subarray-sum/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 26 },

  // ==========================================
  // 3. SLIDING WINDOW (10 Problems)
  // ==========================================
  { id: "nc-27", title: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", pattern: "Sliding Window", difficulty: "Easy", track: "neetcode", order: 27 },
  { id: "nc-28", title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 28 },
  { id: "nc-29", title: "Longest Repeating Character Replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 29 },
  { id: "nc-30", title: "Permutation in String", url: "https://leetcode.com/problems/permutation-in-string/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 30 },
  { id: "nc-31", title: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", pattern: "Sliding Window", difficulty: "Hard", track: "neetcode", order: 31 },
  { id: "nc-32", title: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", pattern: "Sliding Window", difficulty: "Hard", track: "neetcode", order: 32 },
  { id: "nc-33", title: "Find All Anagrams in a String", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 33 },
  { id: "nc-34", title: "Fruit Into Baskets", url: "https://leetcode.com/problems/fruit-into-baskets/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 34 },
  { id: "nc-35", title: "Maximum Average Subarray I", url: "https://leetcode.com/problems/maximum-average-subarray-i/", pattern: "Sliding Window", difficulty: "Easy", track: "neetcode", order: 35 },
  { id: "nc-36", title: "Frequency of the Most Frequent Element", url: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 36 },

  // ==========================================
  // 4. STACK (10 Problems)
  // ==========================================
  { id: "nc-37", title: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", pattern: "Stack", difficulty: "Easy", track: "neetcode", order: 37 },
  { id: "nc-38", title: "Min Stack", url: "https://leetcode.com/problems/min-stack/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 38 },
  { id: "nc-39", title: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 39 },
  { id: "nc-40", title: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 40 },
  { id: "nc-41", title: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 41 },
  { id: "nc-42", title: "Car Fleet", url: "https://leetcode.com/problems/car-fleet/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 42 },
  { id: "nc-43", title: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", pattern: "Stack", difficulty: "Hard", track: "neetcode", order: 43 },
  { id: "nc-44", title: "Online Stock Span", url: "https://leetcode.com/problems/online-stock-span/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 44 },
  { id: "nc-45", title: "Asteroid Collision", url: "https://leetcode.com/problems/asteroid-collision/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 45 },
  { id: "nc-46", title: "132 Pattern", url: "https://leetcode.com/problems/132-pattern/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 46 },

  // ==========================================
  // 5. BINARY SEARCH (11 Problems)
  // ==========================================
  { id: "nc-47", title: "Binary Search", url: "https://leetcode.com/problems/binary-search/", pattern: "Binary Search", difficulty: "Easy", track: "neetcode", order: 47 },
  { id: "nc-48", title: "Search a 2D Matrix", url: "https://leetcode.com/problems/search-a-2d-matrix/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 48 },
  { id: "nc-49", title: "Koko Eating Bananas", url: "https://leetcode.com/problems/koko-eating-bananas/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 49 },
  { id: "nc-50", title: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 50 },
  { id: "nc-51", title: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 51 },
  { id: "nc-52", title: "Time Based Key-Value Store", url: "https://leetcode.com/problems/time-based-key-value-store/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 52 },
  { id: "nc-53", title: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", pattern: "Binary Search", difficulty: "Hard", track: "neetcode", order: 53 },
  { id: "nc-54", title: "Capacity To Ship Packages Within D Days", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 54 },
  { id: "nc-55", title: "Find Peak Element", url: "https://leetcode.com/problems/find-peak-element/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 55 },
  { id: "nc-56", title: "Single Element in a Sorted Array", url: "https://leetcode.com/problems/single-element-in-a-sorted-array/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 56 },
  { id: "nc-57", title: "Search a 2D Matrix II", url: "https://leetcode.com/problems/search-a-2d-matrix-ii/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 57 },

  // ==========================================
  // 6. LINKED LIST (12 Problems)
  // ==========================================
  { id: "nc-58", title: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", pattern: "Linked List", difficulty: "Easy", track: "neetcode", order: 58 },
  { id: "nc-59", title: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", pattern: "Linked List", difficulty: "Easy", track: "neetcode", order: 59 },
  { id: "nc-60", title: "Reorder List", url: "https://leetcode.com/problems/reorder-list/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 60 },
  { id: "nc-61", title: "Remove Nth Node From End of List", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 61 },
  { id: "nc-62", title: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 62 },
  { id: "nc-63", title: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 63 },
  { id: "nc-64", title: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", pattern: "Linked List", difficulty: "Easy", track: "neetcode", order: 64 },
  { id: "nc-65", title: "Find the Duplicate Number", url: "https://leetcode.com/problems/find-the-duplicate-number/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 65 },
  { id: "nc-66", title: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 66 },
  { id: "nc-67", title: "LFU Cache", url: "https://leetcode.com/problems/lfu-cache/", pattern: "Linked List", difficulty: "Hard", track: "neetcode", order: 67 },
  { id: "nc-68", title: "Merge K Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", pattern: "Linked List", difficulty: "Hard", track: "neetcode", order: 68 },
  { id: "nc-69", title: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", pattern: "Linked List", difficulty: "Hard", track: "neetcode", order: 69 },

  // ==========================================
  // 7. TREES (15 Problems)
  // ==========================================
  { id: "nc-70", title: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", pattern: "Trees (DFS/BFS)", difficulty: "Easy", track: "neetcode", order: 70 },
  { id: "nc-71", title: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", pattern: "Trees (DFS/BFS)", difficulty: "Easy", track: "neetcode", order: 71 },
  { id: "nc-72", title: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/", pattern: "Trees (DFS/BFS)", difficulty: "Easy", track: "neetcode", order: 72 },
  { id: "nc-73", title: "Balanced Binary Tree", url: "https://leetcode.com/problems/balanced-binary-tree/", pattern: "Trees (DFS/BFS)", difficulty: "Easy", track: "neetcode", order: 73 },
  { id: "nc-74", title: "Same Tree", url: "https://leetcode.com/problems/same-tree/", pattern: "Trees (DFS/BFS)", difficulty: "Easy", track: "neetcode", order: 74 },
  { id: "nc-75", title: "Subtree of Another Tree", url: "https://leetcode.com/problems/subtree-of-another-tree/", pattern: "Trees (DFS/BFS)", difficulty: "Easy", track: "neetcode", order: 75 },
  { id: "nc-76", title: "Lowest Common Ancestor of a BST", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", pattern: "Trees (DFS/BFS)", difficulty: "Medium", track: "neetcode", order: 76 },
  { id: "nc-77", title: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", pattern: "Trees (DFS/BFS)", difficulty: "Medium", track: "neetcode", order: 77 },
  { id: "nc-78", title: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", pattern: "Trees (DFS/BFS)", difficulty: "Medium", track: "neetcode", order: 78 },
  { id: "nc-79", title: "Binary Tree Right Side View", url: "https://leetcode.com/problems/binary-tree-right-side-view/", pattern: "Trees (DFS/BFS)", difficulty: "Medium", track: "neetcode", order: 79 },
  { id: "nc-80", title: "Count Good Nodes in Binary Tree", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/", pattern: "Trees (DFS/BFS)", difficulty: "Medium", track: "neetcode", order: 80 },
  { id: "nc-81", title: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", pattern: "Trees (DFS/BFS)", difficulty: "Medium", track: "neetcode", order: 81 },
  { id: "nc-82", title: "Kth Smallest Element in a BST", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", pattern: "Trees (DFS/BFS)", difficulty: "Medium", track: "neetcode", order: 82 },
  { id: "nc-83", title: "Construct Binary Tree from Preorder and Inorder Traversal", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", pattern: "Trees (DFS/BFS)", difficulty: "Medium", track: "neetcode", order: 83 },
  { id: "nc-84", title: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", pattern: "Trees (DFS/BFS)", difficulty: "Hard", track: "neetcode", order: 84 },

  // ==========================================
  // 8. TRIES (5 Problems)
  // ==========================================
  { id: "nc-85", title: "Implement Trie (Prefix Tree)", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", pattern: "Tries", difficulty: "Medium", track: "neetcode", order: 85 },
  { id: "nc-86", title: "Design Add and Search Words Data Structure", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", pattern: "Tries", difficulty: "Medium", track: "neetcode", order: 86 },
  { id: "nc-87", title: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", pattern: "Tries", difficulty: "Hard", track: "neetcode", order: 87 },
  { id: "nc-88", title: "Extra Characters in a String", url: "https://leetcode.com/problems/extra-characters-in-a-string/", pattern: "Tries", difficulty: "Medium", track: "neetcode", order: 88 },
  { id: "nc-89", title: "Replace Words", url: "https://leetcode.com/problems/replace-words/", pattern: "Tries", difficulty: "Medium", track: "neetcode", order: 89 },

  // ==========================================
  // 9. HEAPS / PRIORITY QUEUE (8 Problems)
  // ==========================================
  { id: "nc-90", title: "Kth Largest Element in a Stream", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", pattern: "Heaps", difficulty: "Easy", track: "neetcode", order: 90 },
  { id: "nc-91", title: "Last Stone Weight", url: "https://leetcode.com/problems/last-stone-weight/", pattern: "Heaps", difficulty: "Easy", track: "neetcode", order: 91 },
  { id: "nc-92", title: "K Closest Points to Origin", url: "https://leetcode.com/problems/k-closest-points-to-origin/", pattern: "Heaps", difficulty: "Medium", track: "neetcode", order: 92 },
  { id: "nc-93", title: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", pattern: "Heaps", difficulty: "Medium", track: "neetcode", order: 93 },
  { id: "nc-94", title: "Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/", pattern: "Heaps", difficulty: "Medium", track: "neetcode", order: 94 },
  { id: "nc-95", title: "Design Twitter", url: "https://leetcode.com/problems/design-twitter/", pattern: "Heaps", difficulty: "Medium", track: "neetcode", order: 95 },
  { id: "nc-96", title: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", pattern: "Heaps", difficulty: "Hard", track: "neetcode", order: 96 },
  { id: "nc-97", title: "Reorganize String", url: "https://leetcode.com/problems/reorganize-string/", pattern: "Heaps", difficulty: "Medium", track: "neetcode", order: 97 },

  // ==========================================
  // 10. BACKTRACKING (9 Problems)
  // ==========================================
  { id: "nc-98", title: "Subsets", url: "https://leetcode.com/problems/subsets/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 98 },
  { id: "nc-99", title: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 99 },
  { id: "nc-100", title: "Permutations", url: "https://leetcode.com/problems/permutations/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 100 },
  { id: "nc-101", title: "Subsets II", url: "https://leetcode.com/problems/subsets-ii/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 101 },
  { id: "nc-102", title: "Combination Sum II", url: "https://leetcode.com/problems/combination-sum-ii/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 102 },
  { id: "nc-103", title: "Word Search", url: "https://leetcode.com/problems/word-search/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 103 },
  { id: "nc-104", title: "Palindrome Partitioning", url: "https://leetcode.com/problems/palindrome-partitioning/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 104 },
  { id: "nc-105", title: "Letter Combinations of a Phone Number", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 105 },
  { id: "nc-106", title: "N-Queens", url: "https://leetcode.com/problems/n-queens/", pattern: "Backtracking", difficulty: "Hard", track: "neetcode", order: 106 },

  // ==========================================
  // 11. GRAPHS & TOPOLOGICAL SORT (13 Problems)
  // ==========================================
  { id: "nc-107", title: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 107 },
  { id: "nc-108", title: "Max Area of Island", url: "https://leetcode.com/problems/max-area-of-island/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 108 },
  { id: "nc-109", title: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 109 },
  { id: "nc-110", title: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 110 },
  { id: "nc-111", title: "Surrounded Regions", url: "https://leetcode.com/problems/surrounded-regions/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 111 },
  { id: "nc-112", title: "Rotting Oranges", url: "https://leetcode.com/problems/rotting-oranges/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 112 },
  { id: "nc-113", title: "Walls and Gates", url: "https://leetcode.com/problems/walls-and-gates/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 113 },
  { id: "nc-114", title: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 114 },
  { id: "nc-115", title: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 115 },
  { id: "nc-116", title: "Redundant Connection (Union-Find)", url: "https://leetcode.com/problems/redundant-connection/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 116 },
  { id: "nc-117", title: "Number of Connected Components in an Undirected Graph", url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 117 },
  { id: "nc-118", title: "Graph Valid Tree", url: "https://leetcode.com/problems/graph-valid-tree/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 118 },
  { id: "nc-119", title: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", pattern: "Graphs & Topo", difficulty: "Hard", track: "neetcode", order: 119 },

  // ==========================================
  // 12. ADVANCED GRAPHS / MST / DIJKSTRA (7 Problems)
  // ==========================================
  { id: "nc-120", title: "Network Delay Time (Dijkstra)", url: "https://leetcode.com/problems/network-delay-time/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 120 },
  { id: "nc-121", title: "Min Cost to Connect All Points (Prim/Kruskal)", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 121 },
  { id: "nc-122", title: "Swim in Rising Water", url: "https://leetcode.com/problems/swim-in-rising-water/", pattern: "Graphs & Topo", difficulty: "Hard", track: "neetcode", order: 122 },
  { id: "nc-123", title: "Alien Dictionary (Topo Sort)", url: "https://leetcode.com/problems/alien-dictionary/", pattern: "Graphs & Topo", difficulty: "Hard", track: "neetcode", order: 123 },
  { id: "nc-124", title: "Cheapest Flights Within K Stops (Bellman-Ford)", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 124 },
  { id: "nc-125", title: "Critical Connections in a Network (Tarjan Bridge)", url: "https://leetcode.com/problems/critical-connections-in-a-network/", pattern: "Graphs & Topo", difficulty: "Hard", track: "neetcode", order: 125 },
  { id: "nc-126", title: "Path with Maximum Probability", url: "https://leetcode.com/problems/path-with-maximum-probability/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 126 },

  // ==========================================
  // 13. 1-D DYNAMIC PROGRAMMING (12 Problems)
  // ==========================================
  { id: "nc-127", title: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", pattern: "DP (1D/2D)", difficulty: "Easy", track: "neetcode", order: 127 },
  { id: "nc-128", title: "Min Cost Climbing Stairs", url: "https://leetcode.com/problems/min-cost-climbing-stairs/", pattern: "DP (1D/2D)", difficulty: "Easy", track: "neetcode", order: 128 },
  { id: "nc-129", title: "House Robber", url: "https://leetcode.com/problems/house-robber/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 129 },
  { id: "nc-130", title: "House Robber II", url: "https://leetcode.com/problems/house-robber-ii/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 130 },
  { id: "nc-131", title: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 131 },
  { id: "nc-132", title: "Palindromic Substrings", url: "https://leetcode.com/problems/palindromic-substrings/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 132 },
  { id: "nc-133", title: "Decode Ways", url: "https://leetcode.com/problems/decode-ways/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 133 },
  { id: "nc-134", title: "Coin Change", url: "https://leetcode.com/problems/coin-change/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 134 },
  { id: "nc-135", title: "Maximum Product Subarray", url: "https://leetcode.com/problems/maximum-product-subarray/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 135 },
  { id: "nc-136", title: "Word Break", url: "https://leetcode.com/problems/word-break/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 136 },
  { id: "nc-137", title: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 137 },
  { id: "nc-138", title: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 138 },

  // ==========================================
  // 14. 2-D DYNAMIC PROGRAMMING (11 Problems)
  // ==========================================
  { id: "nc-139", title: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 139 },
  { id: "nc-140", title: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 140 },
  { id: "nc-141", title: "Best Time to Buy and Sell Stock with Cooldown", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 141 },
  { id: "nc-142", title: "Coin Change II", url: "https://leetcode.com/problems/coin-change-ii/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 142 },
  { id: "nc-143", title: "Target Sum", url: "https://leetcode.com/problems/target-sum/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 143 },
  { id: "nc-144", title: "Interleaving String", url: "https://leetcode.com/problems/interleaving-string/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 144 },
  { id: "nc-145", title: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 145 },
  { id: "nc-146", title: "Longest Increasing Path in a Matrix", url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", pattern: "DP (1D/2D)", difficulty: "Hard", track: "neetcode", order: 146 },
  { id: "nc-147", title: "Distinct Subsequences", url: "https://leetcode.com/problems/distinct-subsequences/", pattern: "DP (1D/2D)", difficulty: "Hard", track: "neetcode", order: 147 },
  { id: "nc-148", title: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/", pattern: "DP (1D/2D)", difficulty: "Hard", track: "neetcode", order: 148 },
  { id: "nc-149", title: "Regular Expression Matching", url: "https://leetcode.com/problems/regular-expression-matching/", pattern: "DP (1D/2D)", difficulty: "Hard", track: "neetcode", order: 149 },

  // ==========================================
  // 15. GREEDY (8 Problems)
  // ==========================================
  { id: "nc-150", title: "Maximum Subarray (Kadane)", url: "https://leetcode.com/problems/maximum-subarray/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 150 },
  { id: "nc-151", title: "Jump Game", url: "https://leetcode.com/problems/jump-game/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 151 },
  { id: "nc-152", title: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 152 },
  { id: "nc-153", title: "Gas Station", url: "https://leetcode.com/problems/gas-station/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 153 },
  { id: "nc-154", title: "Hand of Straights", url: "https://leetcode.com/problems/hand-of-straights/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 154 },
  { id: "nc-155", title: "Merge Triplets to Form Target Triplet", url: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 155 },
  { id: "nc-156", title: "Partition Labels", url: "https://leetcode.com/problems/partition-labels/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 156 },
  { id: "nc-157", title: "Valid Parenthesis String", url: "https://leetcode.com/problems/valid-parenthesis-string/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 157 },

  // ==========================================
  // 16. INTERVALS (6 Problems)
  // ==========================================
  { id: "nc-158", title: "Insert Interval", url: "https://leetcode.com/problems/insert-interval/", pattern: "Intervals", difficulty: "Medium", track: "neetcode", order: 158 },
  { id: "nc-159", title: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/", pattern: "Intervals", difficulty: "Medium", track: "neetcode", order: 159 },
  { id: "nc-160", title: "Non-overlapping Intervals", url: "https://leetcode.com/problems/non-overlapping-intervals/", pattern: "Intervals", difficulty: "Medium", track: "neetcode", order: 160 },
  { id: "nc-161", title: "Meeting Rooms", url: "https://leetcode.com/problems/meeting-rooms/", pattern: "Intervals", difficulty: "Easy", track: "neetcode", order: 161 },
  { id: "nc-162", title: "Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/", pattern: "Intervals", difficulty: "Medium", track: "neetcode", order: 162 },
  { id: "nc-163", title: "Minimum Number of Arrows to Burst Balloons", url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", pattern: "Intervals", difficulty: "Medium", track: "neetcode", order: 163 },

  // ==========================================
  // 17. MATH & GEOMETRY (8 Problems)
  // ==========================================
  { id: "nc-164", title: "Rotate Image", url: "https://leetcode.com/problems/rotate-image/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 164 },
  { id: "nc-165", title: "Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 165 },
  { id: "nc-166", title: "Set Matrix Zeroes", url: "https://leetcode.com/problems/set-matrix-zeroes/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 166 },
  { id: "nc-167", title: "Happy Number", url: "https://leetcode.com/problems/happy-number/", pattern: "Math & Geometry", difficulty: "Easy", track: "neetcode", order: 167 },
  { id: "nc-168", title: "Plus One", url: "https://leetcode.com/problems/plus-one/", pattern: "Math & Geometry", difficulty: "Easy", track: "neetcode", order: 168 },
  { id: "nc-169", title: "Pow(x, n)", url: "https://leetcode.com/problems/powx-n/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 169 },
  { id: "nc-170", title: "Multiply Strings", url: "https://leetcode.com/problems/multiply-strings/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 170 },
  { id: "nc-171", title: "Detect Squares", url: "https://leetcode.com/problems/detect-squares/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 171 },

  // ==========================================
  // 18. BIT MANIPULATION (7 Problems)
  // ==========================================
  { id: "nc-172", title: "Single Number", url: "https://leetcode.com/problems/single-number/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 172 },
  { id: "nc-173", title: "Number of 1 Bits (Hamming Weight)", url: "https://leetcode.com/problems/number-of-1-bits/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 173 },
  { id: "nc-174", title: "Counting Bits", url: "https://leetcode.com/problems/counting-bits/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 174 },
  { id: "nc-175", title: "Reverse Bits", url: "https://leetcode.com/problems/reverse-bits/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 175 },
  { id: "nc-176", title: "Missing Number", url: "https://leetcode.com/problems/missing-number/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 176 },
  { id: "nc-177", title: "Sum of Two Integers", url: "https://leetcode.com/problems/sum-of-two-integers/", pattern: "Bit Manipulation", difficulty: "Medium", track: "neetcode", order: 177 },
  { id: "nc-178", title: "Reverse Integer", url: "https://leetcode.com/problems/reverse-integer/", pattern: "Bit Manipulation", difficulty: "Medium", track: "neetcode", order: 178 },

  // ==========================================
  // GOOGLE TOP INTERVIEW PYQS (20 Targeted)
  // ==========================================
  { id: "g-1", title: "Logger Rate Limiter", url: "https://leetcode.com/problems/logger-rate-limiter/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "google_pyq", order: 180 },
  { id: "g-2", title: "Robot Room Cleaner", url: "https://leetcode.com/problems/robot-room-cleaner/", pattern: "Backtracking", difficulty: "Hard", track: "google_pyq", order: 181 },
  { id: "g-3", title: "Split Array Largest Sum", url: "https://leetcode.com/problems/split-array-largest-sum/", pattern: "Binary Search", difficulty: "Hard", track: "google_pyq", order: 182 },
  { id: "g-4", title: "Word Break II", url: "https://leetcode.com/problems/word-break-ii/", pattern: "Backtracking", difficulty: "Hard", track: "google_pyq", order: 183 },
  { id: "g-5", title: "Employee Free Time", url: "https://leetcode.com/problems/employee-free-time/", pattern: "Heaps", difficulty: "Hard", track: "google_pyq", order: 184 },
  { id: "g-6", title: "Range Module (Segment Tree / Interval Map)", url: "https://leetcode.com/problems/range-module/", pattern: "Segment Tree / DSU", difficulty: "Hard", track: "google_pyq", order: 185 },
  { id: "g-7", title: "Random Pick with Weight", url: "https://leetcode.com/problems/random-pick-with-weight/", pattern: "Binary Search", difficulty: "Medium", track: "google_pyq", order: 186 },
  { id: "g-8", title: "Text Justification", url: "https://leetcode.com/problems/text-justification/", pattern: "Arrays & Hashing", difficulty: "Hard", track: "google_pyq", order: 187 },
  { id: "g-9", title: "Snapshot Array", url: "https://leetcode.com/problems/snapshot-array/", pattern: "Binary Search", difficulty: "Medium", track: "google_pyq", order: 188 },
  { id: "g-10", title: "Max Points on a Line", url: "https://leetcode.com/problems/max-points-on-a-line/", pattern: "Math & Geometry", difficulty: "Hard", track: "google_pyq", order: 189 },

  // ==========================================
  // QUANT DEVELOPER / LOW-LATENCY TRACK
  // ==========================================
  { id: "q-1", title: "Design Hit Counter", url: "https://leetcode.com/problems/design-hit-counter/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "quant_dev", order: 190 },
  { id: "q-2", title: "Insert Delete GetRandom O(1)", url: "https://leetcode.com/problems/insert-delete-getrandom-o1/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "quant_dev", order: 191 },
  { id: "q-3", title: "Insert Delete GetRandom O(1) - Duplicates allowed", url: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/", pattern: "Arrays & Hashing", difficulty: "Hard", track: "quant_dev", order: 192 },
  { id: "q-4", title: "Design In-Memory File System", url: "https://leetcode.com/problems/design-in-memory-file-system/", pattern: "Tries", difficulty: "Hard", track: "quant_dev", order: 193 },
  { id: "q-5", title: "Design Bounded Blocking Queue (Concurrency)", url: "https://leetcode.com/problems/design-bounded-blocking-queue/", pattern: "Concurrency", difficulty: "Medium", track: "quant_dev", order: 194 },
  { id: "q-6", title: "Print in Order (std::mutex / condition_variable)", url: "https://leetcode.com/problems/print-in-order/", pattern: "Concurrency", difficulty: "Easy", track: "quant_dev", order: 195 },
  { id: "q-7", title: "Building H2O (std::barrier / semaphores)", url: "https://leetcode.com/problems/building-h2o/", pattern: "Concurrency", difficulty: "Medium", track: "quant_dev", order: 196 },

  // ==========================================
  // CSES CORE BENCHMARKS (10 Problems)
  // ==========================================
  { id: "cses-1", title: "Weird Algorithm (Collatz Conjecture)", url: "https://cses.fi/problemset/task/1068", pattern: "Math & Geometry", difficulty: "Easy", track: "cses", order: 200 },
  { id: "cses-2", title: "Missing Number (XOR / Math)", url: "https://cses.fi/problemset/task/1083", pattern: "Bit Manipulation", difficulty: "Easy", track: "cses", order: 201 },
  { id: "cses-3", title: "Repetitions (Longest Substring)", url: "https://cses.fi/problemset/task/1069", pattern: "Two Pointers", difficulty: "Easy", track: "cses", order: 202 },
  { id: "cses-4", title: "Static Range Sum Queries (Prefix Sums)", url: "https://cses.fi/problemset/task/1646", pattern: "Arrays & Hashing", difficulty: "Easy", track: "cses", order: 203 },
  { id: "cses-5", title: "Dynamic Range Minimum Queries (Segment Tree)", url: "https://cses.fi/problemset/task/1649", pattern: "Segment Tree / DSU", difficulty: "Medium", track: "cses", order: 204 },
  { id: "cses-6", title: "Dynamic Range Sum Queries (Fenwick / BIT)", url: "https://cses.fi/problemset/task/1648", pattern: "Segment Tree / DSU", difficulty: "Medium", track: "cses", order: 205 },
  { id: "cses-7", title: "Shortest Routes I (Dijkstra)", url: "https://cses.fi/problemset/task/1671", pattern: "Graphs & Topo", difficulty: "Medium", track: "cses", order: 206 },
  { id: "cses-8", title: "Flight Discount (State Graph Dijkstra)", url: "https://cses.fi/problemset/task/1195", pattern: "Graphs & Topo", difficulty: "Medium", track: "cses", order: 207 },
  { id: "cses-9", title: "Tree Diameter", url: "https://cses.fi/problemset/task/1131", pattern: "Trees (DFS/BFS)", difficulty: "Medium", track: "cses", order: 208 },
  { id: "cses-10", title: "Subarray Sums I & II (Prefix Hash)", url: "https://cses.fi/problemset/task/1660", pattern: "Arrays & Hashing", difficulty: "Medium", track: "cses", order: 209 }
];
