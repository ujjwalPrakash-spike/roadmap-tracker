// ==============================================================================
// Woolf Systems & Quant Engine — Authoritative Problem & Curriculum Database
// Tracks: NeetCode 250, Google 2025-2026 PYQs, Quant Dev Track, CSES Core Benchmarks
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
    name: "Google Top Interview PYQs (2025–2026)",
    category: "Interview Rigor (Months 5–7)",
    url: "https://leetcode.com/company/google/",
    description: "High-frequency Google onsite & phone screen questions (60 curated).",
    total: 60
  },
  {
    name: "Quant Developer / Low-Latency Track",
    category: "Capstones & Hot Path (Months 8–11)",
    url: "https://leetcode.com/problemset/all/?search=stream",
    description: "Concurrency, cache-friendly data structures, zero-alloc matching logic.",
    total: 7
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
  // ============================================================
  // 1. ARRAYS & HASHING (22 Problems)
  // ============================================================
  { id: "nc-1", title: "Concatenation of Array", url: "https://leetcode.com/problems/concatenation-of-array/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 1 },
  { id: "nc-2", title: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 2 },
  { id: "nc-3", title: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 3 },
  { id: "nc-4", title: "Two Sum", url: "https://leetcode.com/problems/two-sum/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 4 },
  { id: "nc-5", title: "Longest Common Prefix", url: "https://leetcode.com/problems/longest-common-prefix/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 5 },
  { id: "nc-6", title: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 6 },
  { id: "nc-7", title: "Remove Element", url: "https://leetcode.com/problems/remove-element/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 7 },
  { id: "nc-8", title: "Majority Element", url: "https://leetcode.com/problems/majority-element/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 8 },
  { id: "nc-9", title: "Design HashSet", url: "https://leetcode.com/problems/design-hashset/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 9 },
  { id: "nc-10", title: "Design HashMap", url: "https://leetcode.com/problems/design-hashmap/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 10 },
  { id: "nc-11", title: "Sort an Array", url: "https://leetcode.com/problems/sort-an-array/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 11 },
  { id: "nc-12", title: "Sort Colors", url: "https://leetcode.com/problems/sort-colors/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 12 },
  { id: "nc-13", title: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 13 },
  { id: "nc-14", title: "Encode and Decode Strings", url: "https://leetcode.com/problems/encode-and-decode-strings/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 14 },
  { id: "nc-15", title: "Range Sum Query 2D Immutable", url: "https://leetcode.com/problems/range-sum-query-2d-immutable/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 15 },
  { id: "nc-16", title: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 16 },
  { id: "nc-17", title: "Valid Sudoku", url: "https://leetcode.com/problems/valid-sudoku/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 17 },
  { id: "nc-18", title: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 18 },
  { id: "nc-19", title: "Best Time to Buy And Sell Stock II", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 19 },
  { id: "nc-20", title: "Majority Element II", url: "https://leetcode.com/problems/majority-element-ii", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 20 },
  { id: "nc-21", title: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 21 },
  { id: "nc-22", title: "First Missing Positive", url: "https://leetcode.com/problems/first-missing-positive/", pattern: "Arrays & Hashing", difficulty: "Hard", track: "neetcode", order: 22 },

  // ============================================================
  // 2. TWO POINTERS (13 Problems)
  // ============================================================
  { id: "nc-23", title: "Reverse String", url: "https://leetcode.com/problems/reverse-string/", pattern: "Two Pointers", difficulty: "Easy", track: "neetcode", order: 23 },
  { id: "nc-24", title: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", pattern: "Two Pointers", difficulty: "Easy", track: "neetcode", order: 24 },
  { id: "nc-25", title: "Valid Palindrome II", url: "https://leetcode.com/problems/valid-palindrome-ii/", pattern: "Two Pointers", difficulty: "Easy", track: "neetcode", order: 25 },
  { id: "nc-26", title: "Merge Strings Alternately", url: "https://leetcode.com/problems/merge-strings-alternately/", pattern: "Two Pointers", difficulty: "Easy", track: "neetcode", order: 26 },
  { id: "nc-27", title: "Merge Sorted Array", url: "https://leetcode.com/problems/merge-sorted-array/", pattern: "Two Pointers", difficulty: "Easy", track: "neetcode", order: 27 },
  { id: "nc-28", title: "Remove Duplicates From Sorted Array", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", pattern: "Two Pointers", difficulty: "Easy", track: "neetcode", order: 28 },
  { id: "nc-29", title: "Two Sum II Input Array Is Sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 29 },
  { id: "nc-30", title: "3Sum", url: "https://leetcode.com/problems/3sum/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 30 },
  { id: "nc-31", title: "4Sum", url: "https://leetcode.com/problems/4sum/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 31 },
  { id: "nc-32", title: "Rotate Array", url: "https://leetcode.com/problems/rotate-array/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 32 },
  { id: "nc-33", title: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 33 },
  { id: "nc-34", title: "Boats to Save People", url: "https://leetcode.com/problems/boats-to-save-people/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 34 },
  { id: "nc-35", title: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", pattern: "Two Pointers", difficulty: "Hard", track: "neetcode", order: 35 },

  // ============================================================
  // 3. SLIDING WINDOW (9 Problems)
  // ============================================================
  { id: "nc-36", title: "Contains Duplicate II", url: "https://leetcode.com/problems/contains-duplicate-ii/", pattern: "Sliding Window", difficulty: "Easy", track: "neetcode", order: 36 },
  { id: "nc-37", title: "Best Time to Buy And Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", pattern: "Sliding Window", difficulty: "Easy", track: "neetcode", order: 37 },
  { id: "nc-38", title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 38 },
  { id: "nc-39", title: "Longest Repeating Character Replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 39 },
  { id: "nc-40", title: "Permutation In String", url: "https://leetcode.com/problems/permutation-in-string/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 40 },
  { id: "nc-41", title: "Minimum Size Subarray Sum", url: "https://leetcode.com/problems/minimum-size-subarray-sum/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 41 },
  { id: "nc-42", title: "Find K Closest Elements", url: "https://leetcode.com/problems/find-k-closest-elements/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 42 },
  { id: "nc-43", title: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", pattern: "Sliding Window", difficulty: "Hard", track: "neetcode", order: 43 },
  { id: "nc-44", title: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", pattern: "Sliding Window", difficulty: "Hard", track: "neetcode", order: 44 },

  // ============================================================
  // 4. STACK (15 Problems)
  // ============================================================
  { id: "nc-45", title: "Baseball Game", url: "https://leetcode.com/problems/baseball-game/", pattern: "Stack", difficulty: "Easy", track: "neetcode", order: 45 },
  { id: "nc-46", title: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", pattern: "Stack", difficulty: "Easy", track: "neetcode", order: 46 },
  { id: "nc-47", title: "Implement Stack Using Queues", url: "https://leetcode.com/problems/implement-stack-using-queues/", pattern: "Stack", difficulty: "Easy", track: "neetcode", order: 47 },
  { id: "nc-48", title: "Implement Queue using Stacks", url: "https://leetcode.com/problems/implement-queue-using-stacks", pattern: "Stack", difficulty: "Easy", track: "neetcode", order: 48 },
  { id: "nc-49", title: "Min Stack", url: "https://leetcode.com/problems/min-stack/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 49 },
  { id: "nc-50", title: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 50 },
  { id: "nc-51", title: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 51 },
  { id: "nc-52", title: "Asteroid Collision", url: "https://leetcode.com/problems/asteroid-collision/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 52 },
  { id: "nc-53", title: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 53 },
  { id: "nc-54", title: "Online Stock Span", url: "https://leetcode.com/problems/online-stock-span/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 54 },
  { id: "nc-55", title: "Car Fleet", url: "https://leetcode.com/problems/car-fleet/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 55 },
  { id: "nc-56", title: "Simplify Path", url: "https://leetcode.com/problems/simplify-path/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 56 },
  { id: "nc-57", title: "Decode String", url: "https://leetcode.com/problems/decode-string/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 57 },
  { id: "nc-58", title: "Maximum Frequency Stack", url: "https://leetcode.com/problems/maximum-frequency-stack/", pattern: "Stack", difficulty: "Hard", track: "neetcode", order: 58 },
  { id: "nc-59", title: "Largest Rectangle In Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", pattern: "Stack", difficulty: "Hard", track: "neetcode", order: 59 },

  // ============================================================
  // 5. BINARY SEARCH (14 Problems)
  // ============================================================
  { id: "nc-60", title: "Binary Search", url: "https://leetcode.com/problems/binary-search/", pattern: "Binary Search", difficulty: "Easy", track: "neetcode", order: 60 },
  { id: "nc-61", title: "Search Insert Position", url: "https://leetcode.com/problems/search-insert-position/", pattern: "Binary Search", difficulty: "Easy", track: "neetcode", order: 61 },
  { id: "nc-62", title: "Guess Number Higher Or Lower", url: "https://leetcode.com/problems/guess-number-higher-or-lower/", pattern: "Binary Search", difficulty: "Easy", track: "neetcode", order: 62 },
  { id: "nc-63", title: "Sqrt(x)", url: "https://leetcode.com/problems/sqrtx/", pattern: "Binary Search", difficulty: "Easy", track: "neetcode", order: 63 },
  { id: "nc-64", title: "Search a 2D Matrix", url: "https://leetcode.com/problems/search-a-2d-matrix/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 64 },
  { id: "nc-65", title: "Koko Eating Bananas", url: "https://leetcode.com/problems/koko-eating-bananas/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 65 },
  { id: "nc-66", title: "Capacity to Ship Packages Within D Days", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 66 },
  { id: "nc-67", title: "Find Minimum In Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 67 },
  { id: "nc-68", title: "Search In Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 68 },
  { id: "nc-69", title: "Search In Rotated Sorted Array II", url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 69 },
  { id: "nc-70", title: "Time Based Key Value Store", url: "https://leetcode.com/problems/time-based-key-value-store/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 70 },
  { id: "nc-71", title: "Split Array Largest Sum", url: "https://leetcode.com/problems/split-array-largest-sum/", pattern: "Binary Search", difficulty: "Hard", track: "neetcode", order: 71 },
  { id: "nc-72", title: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", pattern: "Binary Search", difficulty: "Hard", track: "neetcode", order: 72 },
  { id: "nc-73", title: "Find in Mountain Array", url: "https://leetcode.com/problems/find-in-mountain-array", pattern: "Binary Search", difficulty: "Hard", track: "neetcode", order: 73 },

  // ============================================================
  // 6. LINKED LIST (14 Problems)
  // ============================================================
  { id: "nc-74", title: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", pattern: "Linked List", difficulty: "Easy", track: "neetcode", order: 74 },
  { id: "nc-75", title: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", pattern: "Linked List", difficulty: "Easy", track: "neetcode", order: 75 },
  { id: "nc-76", title: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", pattern: "Linked List", difficulty: "Easy", track: "neetcode", order: 76 },
  { id: "nc-77", title: "Reorder List", url: "https://leetcode.com/problems/reorder-list/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 77 },
  { id: "nc-78", title: "Remove Nth Node From End of List", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 78 },
  { id: "nc-79", title: "Copy List With Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 79 },
  { id: "nc-80", title: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 80 },
  { id: "nc-81", title: "Find The Duplicate Number", url: "https://leetcode.com/problems/find-the-duplicate-number/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 81 },
  { id: "nc-82", title: "Reverse Linked List II", url: "https://leetcode.com/problems/reverse-linked-list-ii/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 82 },
  { id: "nc-83", title: "Design Circular Queue", url: "https://leetcode.com/problems/design-circular-queue/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 83 },
  { id: "nc-84", title: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 84 },
  { id: "nc-85", title: "LFU Cache", url: "https://leetcode.com/problems/lfu-cache/", pattern: "Linked List", difficulty: "Hard", track: "neetcode", order: 85 },
  { id: "nc-86", title: "Merge K Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", pattern: "Linked List", difficulty: "Hard", track: "neetcode", order: 86 },
  { id: "nc-87", title: "Reverse Nodes In K Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", pattern: "Linked List", difficulty: "Hard", track: "neetcode", order: 87 },

  // ============================================================
  // 7. TREES (23 Problems)
  // ============================================================
  { id: "nc-88", title: "Binary Tree Inorder Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 88 },
  { id: "nc-89", title: "Binary Tree Preorder Traversal", url: "https://leetcode.com/problems/binary-tree-preorder-traversal/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 89 },
  { id: "nc-90", title: "Binary Tree Postorder Traversal", url: "https://leetcode.com/problems/binary-tree-postorder-traversal/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 90 },
  { id: "nc-91", title: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 91 },
  { id: "nc-92", title: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 92 },
  { id: "nc-93", title: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 93 },
  { id: "nc-94", title: "Balanced Binary Tree", url: "https://leetcode.com/problems/balanced-binary-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 94 },
  { id: "nc-95", title: "Same Tree", url: "https://leetcode.com/problems/same-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 95 },
  { id: "nc-96", title: "Subtree of Another Tree", url: "https://leetcode.com/problems/subtree-of-another-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 96 },
  { id: "nc-97", title: "Lowest Common Ancestor of a Binary Search Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 97 },
  { id: "nc-98", title: "Insert into a Binary Search Tree", url: "https://leetcode.com/problems/insert-into-a-binary-search-tree/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 98 },
  { id: "nc-99", title: "Delete Node in a BST", url: "https://leetcode.com/problems/delete-node-in-a-bst/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 99 },
  { id: "nc-100", title: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 100 },
  { id: "nc-101", title: "Binary Tree Right Side View", url: "https://leetcode.com/problems/binary-tree-right-side-view/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 101 },
  { id: "nc-102", title: "Construct Quad Tree", url: "https://leetcode.com/problems/construct-quad-tree/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 102 },
  { id: "nc-103", title: "Count Good Nodes In Binary Tree", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 103 },
  { id: "nc-104", title: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 104 },
  { id: "nc-105", title: "Kth Smallest Element In a Bst", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 105 },
  { id: "nc-106", title: "Construct Binary Tree From Preorder And Inorder Traversal", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 106 },
  { id: "nc-107", title: "House Robber III", url: "https://leetcode.com/problems/house-robber-iii/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 107 },
  { id: "nc-108", title: "Delete Leaves With a Given Value", url: "https://leetcode.com/problems/delete-leaves-with-a-given-value", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 108 },
  { id: "nc-109", title: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", pattern: "Trees", difficulty: "Hard", track: "neetcode", order: 109 },
  { id: "nc-110", title: "Serialize And Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", pattern: "Trees", difficulty: "Hard", track: "neetcode", order: 110 },

  // ============================================================
  // 8. TRIES (4 Problems)
  // ============================================================
  { id: "nc-111", title: "Implement Trie Prefix Tree", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", pattern: "Tries", difficulty: "Medium", track: "neetcode", order: 111 },
  { id: "nc-112", title: "Design Add And Search Words Data Structure", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", pattern: "Tries", difficulty: "Medium", track: "neetcode", order: 112 },
  { id: "nc-113", title: "Extra Characters in a String", url: "https://leetcode.com/problems/extra-characters-in-a-string/", pattern: "Tries", difficulty: "Medium", track: "neetcode", order: 113 },
  { id: "nc-114", title: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", pattern: "Tries", difficulty: "Hard", track: "neetcode", order: 114 },

  // ============================================================
  // 9. HEAP / PRIORITY QUEUE (12 Problems)
  // ============================================================
  { id: "nc-115", title: "Kth Largest Element In a Stream", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", pattern: "Heap / Priority Queue", difficulty: "Easy", track: "neetcode", order: 115 },
  { id: "nc-116", title: "Last Stone Weight", url: "https://leetcode.com/problems/last-stone-weight/", pattern: "Heap / Priority Queue", difficulty: "Easy", track: "neetcode", order: 116 },
  { id: "nc-117", title: "K Closest Points to Origin", url: "https://leetcode.com/problems/k-closest-points-to-origin/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "neetcode", order: 117 },
  { id: "nc-118", title: "Kth Largest Element In An Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "neetcode", order: 118 },
  { id: "nc-119", title: "Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "neetcode", order: 119 },
  { id: "nc-120", title: "Design Twitter", url: "https://leetcode.com/problems/design-twitter/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "neetcode", order: 120 },
  { id: "nc-121", title: "Single Threaded CPU", url: "https://leetcode.com/problems/single-threaded-cpu/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "neetcode", order: 121 },
  { id: "nc-122", title: "Reorganize String", url: "https://leetcode.com/problems/reorganize-string/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "neetcode", order: 122 },
  { id: "nc-123", title: "Longest Happy String", url: "https://leetcode.com/problems/longest-happy-string/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "neetcode", order: 123 },
  { id: "nc-124", title: "Car Pooling", url: "https://leetcode.com/problems/car-pooling/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "neetcode", order: 124 },
  { id: "nc-125", title: "Find Median From Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", pattern: "Heap / Priority Queue", difficulty: "Hard", track: "neetcode", order: 125 },
  { id: "nc-126", title: "IPO", url: "https://leetcode.com/problems/ipo/", pattern: "Heap / Priority Queue", difficulty: "Hard", track: "neetcode", order: 126 },

  // ============================================================
  // 10. BACKTRACKING (16 Problems)
  // ============================================================
  { id: "nc-127", title: "Sum of All Subsets XOR Total", url: "https://leetcode.com/problems/sum-of-all-subset-xor-totals", pattern: "Backtracking", difficulty: "Easy", track: "neetcode", order: 127 },
  { id: "nc-128", title: "Subsets", url: "https://leetcode.com/problems/subsets/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 128 },
  { id: "nc-129", title: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 129 },
  { id: "nc-130", title: "Combination Sum II", url: "https://leetcode.com/problems/combination-sum-ii/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 130 },
  { id: "nc-131", title: "Combinations", url: "https://leetcode.com/problems/combinations/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 131 },
  { id: "nc-132", title: "Permutations", url: "https://leetcode.com/problems/permutations/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 132 },
  { id: "nc-133", title: "Subsets II", url: "https://leetcode.com/problems/subsets-ii/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 133 },
  { id: "nc-134", title: "Permutations II", url: "https://leetcode.com/problems/permutations-ii/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 134 },
  { id: "nc-135", title: "Word Search", url: "https://leetcode.com/problems/word-search/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 135 },
  { id: "nc-136", title: "Palindrome Partitioning", url: "https://leetcode.com/problems/palindrome-partitioning/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 136 },
  { id: "nc-137", title: "Letter Combinations of a Phone Number", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 137 },
  { id: "nc-138", title: "Matchsticks to Square", url: "https://leetcode.com/problems/matchsticks-to-square/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 138 },
  { id: "nc-139", title: "Partition to K Equal Sum Subsets", url: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 139 },
  { id: "nc-140", title: "N Queens", url: "https://leetcode.com/problems/n-queens/", pattern: "Backtracking", difficulty: "Hard", track: "neetcode", order: 140 },
  { id: "nc-141", title: "N Queens II", url: "https://leetcode.com/problems/n-queens-ii/", pattern: "Backtracking", difficulty: "Hard", track: "neetcode", order: 141 },
  { id: "nc-142", title: "Word Break II", url: "https://leetcode.com/problems/word-break-ii", pattern: "Backtracking", difficulty: "Hard", track: "neetcode", order: 142 },

  // ============================================================
  // 11. GRAPHS (21 Problems)
  // ============================================================
  { id: "nc-143", title: "Island Perimeter", url: "https://leetcode.com/problems/island-perimeter/", pattern: "Graphs", difficulty: "Easy", track: "neetcode", order: 143 },
  { id: "nc-144", title: "Verifying An Alien Dictionary", url: "https://leetcode.com/problems/verifying-an-alien-dictionary/", pattern: "Graphs", difficulty: "Easy", track: "neetcode", order: 144 },
  { id: "nc-145", title: "Find the Town Judge", url: "https://leetcode.com/problems/find-the-town-judge", pattern: "Graphs", difficulty: "Easy", track: "neetcode", order: 145 },
  { id: "nc-146", title: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 146 },
  { id: "nc-147", title: "Max Area of Island", url: "https://leetcode.com/problems/max-area-of-island/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 147 },
  { id: "nc-148", title: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 148 },
  { id: "nc-149", title: "Walls And Gates", url: "https://leetcode.com/problems/walls-and-gates/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 149 },
  { id: "nc-150", title: "Rotting Oranges", url: "https://leetcode.com/problems/rotting-oranges/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 150 },
  { id: "nc-151", title: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 151 },
  { id: "nc-152", title: "Surrounded Regions", url: "https://leetcode.com/problems/surrounded-regions/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 152 },
  { id: "nc-153", title: "Open The Lock", url: "https://leetcode.com/problems/open-the-lock/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 153 },
  { id: "nc-154", title: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 154 },
  { id: "nc-155", title: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 155 },
  { id: "nc-156", title: "Graph Valid Tree", url: "https://leetcode.com/problems/graph-valid-tree/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 156 },
  { id: "nc-157", title: "Course Schedule IV", url: "https://leetcode.com/problems/course-schedule-iv/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 157 },
  { id: "nc-158", title: "Number of Connected Components In An Undirected Graph", url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 158 },
  { id: "nc-159", title: "Redundant Connection", url: "https://leetcode.com/problems/redundant-connection/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 159 },
  { id: "nc-160", title: "Accounts Merge", url: "https://leetcode.com/problems/accounts-merge/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 160 },
  { id: "nc-161", title: "Evaluate Division", url: "https://leetcode.com/problems/evaluate-division/", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 161 },
  { id: "nc-162", title: "Minimum Height Trees", url: "https://leetcode.com/problems/minimum-height-trees", pattern: "Graphs", difficulty: "Medium", track: "neetcode", order: 162 },
  { id: "nc-163", title: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", pattern: "Graphs", difficulty: "Hard", track: "neetcode", order: 163 },

  // ============================================================
  // 12. ADVANCED GRAPHS (10 Problems)
  // ============================================================
  { id: "nc-164", title: "Path with Minimum Effort", url: "https://leetcode.com/problems/path-with-minimum-effort/", pattern: "Advanced Graphs", difficulty: "Medium", track: "neetcode", order: 164 },
  { id: "nc-165", title: "Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/", pattern: "Advanced Graphs", difficulty: "Medium", track: "neetcode", order: 165 },
  { id: "nc-166", title: "Reconstruct Itinerary", url: "https://leetcode.com/problems/reconstruct-itinerary/", pattern: "Advanced Graphs", difficulty: "Hard", track: "neetcode", order: 166 },
  { id: "nc-167", title: "Min Cost to Connect All Points", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/", pattern: "Advanced Graphs", difficulty: "Medium", track: "neetcode", order: 167 },
  { id: "nc-168", title: "Swim In Rising Water", url: "https://leetcode.com/problems/swim-in-rising-water/", pattern: "Advanced Graphs", difficulty: "Hard", track: "neetcode", order: 168 },
  { id: "nc-169", title: "Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/", pattern: "Advanced Graphs", difficulty: "Hard", track: "neetcode", order: 169 },
  { id: "nc-170", title: "Cheapest Flights Within K Stops", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", pattern: "Advanced Graphs", difficulty: "Medium", track: "neetcode", order: 170 },
  { id: "nc-171", title: "Find Critical and Pseudo Critical Edges in Minimum Spanning Tree", url: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/", pattern: "Advanced Graphs", difficulty: "Hard", track: "neetcode", order: 171 },
  { id: "nc-172", title: "Build a Matrix With Conditions", url: "https://leetcode.com/problems/build-a-matrix-with-conditions", pattern: "Advanced Graphs", difficulty: "Hard", track: "neetcode", order: 172 },
  { id: "nc-173", title: "Greatest Common Divisor Traversal", url: "https://leetcode.com/problems/greatest-common-divisor-traversal", pattern: "Advanced Graphs", difficulty: "Hard", track: "neetcode", order: 173 },

  // ============================================================
  // 13. 1-D DYNAMIC PROGRAMMING (17 Problems)
  // ============================================================
  { id: "nc-174", title: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", pattern: "1-D Dynamic Programming", difficulty: "Easy", track: "neetcode", order: 174 },
  { id: "nc-175", title: "Min Cost Climbing Stairs", url: "https://leetcode.com/problems/min-cost-climbing-stairs/", pattern: "1-D Dynamic Programming", difficulty: "Easy", track: "neetcode", order: 175 },
  { id: "nc-176", title: "N-th Tribonacci Number", url: "https://leetcode.com/problems/n-th-tribonacci-number/", pattern: "1-D Dynamic Programming", difficulty: "Easy", track: "neetcode", order: 176 },
  { id: "nc-177", title: "House Robber", url: "https://leetcode.com/problems/house-robber/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 177 },
  { id: "nc-178", title: "House Robber II", url: "https://leetcode.com/problems/house-robber-ii/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 178 },
  { id: "nc-179", title: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 179 },
  { id: "nc-180", title: "Palindromic Substrings", url: "https://leetcode.com/problems/palindromic-substrings/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 180 },
  { id: "nc-181", title: "Decode Ways", url: "https://leetcode.com/problems/decode-ways/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 181 },
  { id: "nc-182", title: "Coin Change", url: "https://leetcode.com/problems/coin-change/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 182 },
  { id: "nc-183", title: "Maximum Product Subarray", url: "https://leetcode.com/problems/maximum-product-subarray/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 183 },
  { id: "nc-184", title: "Word Break", url: "https://leetcode.com/problems/word-break/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 184 },
  { id: "nc-185", title: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 185 },
  { id: "nc-186", title: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 186 },
  { id: "nc-187", title: "Combination Sum IV", url: "https://leetcode.com/problems/combination-sum-iv/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 187 },
  { id: "nc-188", title: "Perfect Squares", url: "https://leetcode.com/problems/perfect-squares/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 188 },
  { id: "nc-189", title: "Integer Break", url: "https://leetcode.com/problems/integer-break/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 189 },
  { id: "nc-190", title: "Stone Game III", url: "https://leetcode.com/problems/stone-game-iii/", pattern: "1-D Dynamic Programming", difficulty: "Hard", track: "neetcode", order: 190 },

  // ============================================================
  // 14. 2-D DYNAMIC PROGRAMMING (16 Problems)
  // ============================================================
  { id: "nc-191", title: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 191 },
  { id: "nc-192", title: "Unique Paths II", url: "https://leetcode.com/problems/unique-paths-ii/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 192 },
  { id: "nc-193", title: "Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 193 },
  { id: "nc-194", title: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 194 },
  { id: "nc-195", title: "Last Stone Weight II", url: "https://leetcode.com/problems/last-stone-weight-ii/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 195 },
  { id: "nc-196", title: "Best Time to Buy And Sell Stock With Cooldown", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 196 },
  { id: "nc-197", title: "Coin Change II", url: "https://leetcode.com/problems/coin-change-ii/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 197 },
  { id: "nc-198", title: "Target Sum", url: "https://leetcode.com/problems/target-sum/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 198 },
  { id: "nc-199", title: "Interleaving String", url: "https://leetcode.com/problems/interleaving-string/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 199 },
  { id: "nc-200", title: "Stone Game", url: "https://leetcode.com/problems/stone-game/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 200 },
  { id: "nc-201", title: "Stone Game II", url: "https://leetcode.com/problems/stone-game-ii/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 201 },
  { id: "nc-202", title: "Longest Increasing Path In a Matrix", url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", pattern: "2-D Dynamic Programming", difficulty: "Hard", track: "neetcode", order: 202 },
  { id: "nc-203", title: "Distinct Subsequences", url: "https://leetcode.com/problems/distinct-subsequences/", pattern: "2-D Dynamic Programming", difficulty: "Hard", track: "neetcode", order: 203 },
  { id: "nc-204", title: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", pattern: "2-D Dynamic Programming", difficulty: "Medium", track: "neetcode", order: 204 },
  { id: "nc-205", title: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/", pattern: "2-D Dynamic Programming", difficulty: "Hard", track: "neetcode", order: 205 },
  { id: "nc-206", title: "Regular Expression Matching", url: "https://leetcode.com/problems/regular-expression-matching/", pattern: "2-D Dynamic Programming", difficulty: "Hard", track: "neetcode", order: 206 },

  // ============================================================
  // 15. GREEDY (14 Problems)
  // ============================================================
  { id: "nc-207", title: "Lemonade Change", url: "https://leetcode.com/problems/lemonade-change/", pattern: "Greedy", difficulty: "Easy", track: "neetcode", order: 207 },
  { id: "nc-208", title: "Maximum Subarray", url: "https://leetcode.com/problems/maximum-subarray/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 208 },
  { id: "nc-209", title: "Maximum Sum Circular Subarray", url: "https://leetcode.com/problems/maximum-sum-circular-subarray/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 209 },
  { id: "nc-210", title: "Longest Turbulent Subarray", url: "https://leetcode.com/problems/longest-turbulent-subarray/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 210 },
  { id: "nc-211", title: "Jump Game", url: "https://leetcode.com/problems/jump-game/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 211 },
  { id: "nc-212", title: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 212 },
  { id: "nc-213", title: "Jump Game VII", url: "https://leetcode.com/problems/jump-game-vii/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 213 },
  { id: "nc-214", title: "Gas Station", url: "https://leetcode.com/problems/gas-station/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 214 },
  { id: "nc-215", title: "Hand of Straights", url: "https://leetcode.com/problems/hand-of-straights/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 215 },
  { id: "nc-216", title: "Dota2 Senate", url: "https://leetcode.com/problems/dota2-senate/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 216 },
  { id: "nc-217", title: "Merge Triplets to Form Target Triplet", url: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 217 },
  { id: "nc-218", title: "Partition Labels", url: "https://leetcode.com/problems/partition-labels/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 218 },
  { id: "nc-219", title: "Valid Parenthesis String", url: "https://leetcode.com/problems/valid-parenthesis-string/", pattern: "Greedy", difficulty: "Medium", track: "neetcode", order: 219 },
  { id: "nc-220", title: "Candy", url: "https://leetcode.com/problems/candy/", pattern: "Greedy", difficulty: "Hard", track: "neetcode", order: 220 },

  // ============================================================
  // 16. INTERVALS (7 Problems)
  // ============================================================
  { id: "nc-221", title: "Insert Interval", url: "https://leetcode.com/problems/insert-interval/", pattern: "Intervals", difficulty: "Medium", track: "neetcode", order: 221 },
  { id: "nc-222", title: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/", pattern: "Intervals", difficulty: "Medium", track: "neetcode", order: 222 },
  { id: "nc-223", title: "Non Overlapping Intervals", url: "https://leetcode.com/problems/non-overlapping-intervals/", pattern: "Intervals", difficulty: "Medium", track: "neetcode", order: 223 },
  { id: "nc-224", title: "Meeting Rooms", url: "https://leetcode.com/problems/meeting-rooms/", pattern: "Intervals", difficulty: "Easy", track: "neetcode", order: 224 },
  { id: "nc-225", title: "Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/", pattern: "Intervals", difficulty: "Medium", track: "neetcode", order: 225 },
  { id: "nc-226", title: "Meeting Rooms III", url: "https://leetcode.com/problems/meeting-rooms-iii", pattern: "Intervals", difficulty: "Hard", track: "neetcode", order: 226 },
  { id: "nc-227", title: "Minimum Interval to Include Each Query", url: "https://leetcode.com/problems/minimum-interval-to-include-each-query/", pattern: "Intervals", difficulty: "Hard", track: "neetcode", order: 227 },

  // ============================================================
  // 17. MATH & GEOMETRY (13 Problems)
  // ============================================================
  { id: "nc-228", title: "Excel Sheet Column Title", url: "https://leetcode.com/problems/excel-sheet-column-title/", pattern: "Math & Geometry", difficulty: "Easy", track: "neetcode", order: 228 },
  { id: "nc-229", title: "Greatest Common Divisor of Strings", url: "https://leetcode.com/problems/greatest-common-divisor-of-strings/", pattern: "Math & Geometry", difficulty: "Easy", track: "neetcode", order: 229 },
  { id: "nc-230", title: "Insert Greatest Common Divisors in Linked List", url: "https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 230 },
  { id: "nc-231", title: "Transpose Matrix", url: "https://leetcode.com/problems/transpose-matrix", pattern: "Math & Geometry", difficulty: "Easy", track: "neetcode", order: 231 },
  { id: "nc-232", title: "Rotate Image", url: "https://leetcode.com/problems/rotate-image/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 232 },
  { id: "nc-233", title: "Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 233 },
  { id: "nc-234", title: "Set Matrix Zeroes", url: "https://leetcode.com/problems/set-matrix-zeroes/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 234 },
  { id: "nc-235", title: "Happy Number", url: "https://leetcode.com/problems/happy-number/", pattern: "Math & Geometry", difficulty: "Easy", track: "neetcode", order: 235 },
  { id: "nc-236", title: "Plus One", url: "https://leetcode.com/problems/plus-one/", pattern: "Math & Geometry", difficulty: "Easy", track: "neetcode", order: 236 },
  { id: "nc-237", title: "Roman to Integer", url: "https://leetcode.com/problems/roman-to-integer/", pattern: "Math & Geometry", difficulty: "Easy", track: "neetcode", order: 237 },
  { id: "nc-238", title: "Pow(x, n)", url: "https://leetcode.com/problems/powx-n/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 238 },
  { id: "nc-239", title: "Multiply Strings", url: "https://leetcode.com/problems/multiply-strings/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 239 },
  { id: "nc-240", title: "Detect Squares", url: "https://leetcode.com/problems/detect-squares/", pattern: "Math & Geometry", difficulty: "Medium", track: "neetcode", order: 240 },

  // ============================================================
  // 18. BIT MANIPULATION (10 Problems)
  // ============================================================
  { id: "nc-241", title: "Single Number", url: "https://leetcode.com/problems/single-number/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 241 },
  { id: "nc-242", title: "Number of 1 Bits", url: "https://leetcode.com/problems/number-of-1-bits/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 242 },
  { id: "nc-243", title: "Counting Bits", url: "https://leetcode.com/problems/counting-bits/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 243 },
  { id: "nc-244", title: "Add Binary", url: "https://leetcode.com/problems/add-binary/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 244 },
  { id: "nc-245", title: "Reverse Bits", url: "https://leetcode.com/problems/reverse-bits/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 245 },
  { id: "nc-246", title: "Missing Number", url: "https://leetcode.com/problems/missing-number/", pattern: "Bit Manipulation", difficulty: "Easy", track: "neetcode", order: 246 },
  { id: "nc-247", title: "Sum of Two Integers", url: "https://leetcode.com/problems/sum-of-two-integers/", pattern: "Bit Manipulation", difficulty: "Medium", track: "neetcode", order: 247 },
  { id: "nc-248", title: "Reverse Integer", url: "https://leetcode.com/problems/reverse-integer/", pattern: "Bit Manipulation", difficulty: "Medium", track: "neetcode", order: 248 },
  { id: "nc-249", title: "Bitwise AND of Numbers Range", url: "https://leetcode.com/problems/bitwise-and-of-numbers-range", pattern: "Bit Manipulation", difficulty: "Medium", track: "neetcode", order: 249 },
  { id: "nc-250", title: "Minimum Array End", url: "https://leetcode.com/problems/minimum-array-end/", pattern: "Bit Manipulation", difficulty: "Medium", track: "neetcode", order: 250 },

  // ==========================================================
  // GOOGLE TOP INTERVIEW PYQS (60 Questions - 2025/2026 Curated)
  // ==========================================================
  { id: "g-1", title: "Two Sum", url: "https://leetcode.com/problems/two-sum/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "google_pyq", order: 251 },
  { id: "g-2", title: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", pattern: "Graphs", difficulty: "Medium", track: "google_pyq", order: 252 },
  { id: "g-3", title: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/", pattern: "Intervals", difficulty: "Medium", track: "google_pyq", order: 253 },
  { id: "g-4", title: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", pattern: "Linked List", difficulty: "Medium", track: "google_pyq", order: 254 },
  { id: "g-5", title: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", pattern: "Trees", difficulty: "Medium", track: "google_pyq", order: 255 },
  { id: "g-6", title: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", pattern: "Graphs", difficulty: "Medium", track: "google_pyq", order: 256 },
  { id: "g-7", title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", pattern: "Sliding Window", difficulty: "Medium", track: "google_pyq", order: 257 },
  { id: "g-8", title: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", pattern: "Two Pointers", difficulty: "Hard", track: "google_pyq", order: 258 },
  { id: "g-9", title: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", pattern: "Trees", difficulty: "Hard", track: "google_pyq", order: 259 },
  { id: "g-10", title: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "google_pyq", order: 260 },
  { id: "g-11", title: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", pattern: "Binary Search", difficulty: "Hard", track: "google_pyq", order: 261 },
  { id: "g-12", title: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "google_pyq", order: 262 },
  { id: "g-13", title: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", pattern: "Graphs", difficulty: "Hard", track: "google_pyq", order: 263 },
  { id: "g-14", title: "Merge K Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", pattern: "Heap / Priority Queue", difficulty: "Hard", track: "google_pyq", order: 264 },
  { id: "g-15", title: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", pattern: "Two Pointers", difficulty: "Medium", track: "google_pyq", order: 265 },
  { id: "g-16", title: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "google_pyq", order: 266 },
  { id: "g-17", title: "Coin Change", url: "https://leetcode.com/problems/coin-change/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "google_pyq", order: 267 },
  { id: "g-18", title: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", pattern: "Binary Search", difficulty: "Medium", track: "google_pyq", order: 268 },
  { id: "g-19", title: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "google_pyq", order: 269 },
  { id: "g-20", title: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", pattern: "Graphs", difficulty: "Medium", track: "google_pyq", order: 270 },
  { id: "g-21", title: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", pattern: "Backtracking", difficulty: "Medium", track: "google_pyq", order: 271 },
  { id: "g-22", title: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "google_pyq", order: 272 },
  { id: "g-23", title: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", pattern: "Sliding Window", difficulty: "Hard", track: "google_pyq", order: 273 },
  { id: "g-24", title: "Implement Trie (Prefix Tree)", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", pattern: "Tries", difficulty: "Medium", track: "google_pyq", order: 274 },
  { id: "g-25", title: "Accounts Merge", url: "https://leetcode.com/problems/accounts-merge/", pattern: "Advanced Graphs", difficulty: "Medium", track: "google_pyq", order: 275 },
  { id: "g-26", title: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", pattern: "Sliding Window", difficulty: "Hard", track: "google_pyq", order: 276 },
  { id: "g-27", title: "The Skyline Problem", url: "https://leetcode.com/problems/the-skyline-problem/", pattern: "Heap / Priority Queue", difficulty: "Hard", track: "google_pyq", order: 277 },
  { id: "g-28", title: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", pattern: "Stack", difficulty: "Hard", track: "google_pyq", order: 278 },
  { id: "g-29", title: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", pattern: "Tries", difficulty: "Hard", track: "google_pyq", order: 279 },
  { id: "g-30", title: "Rotting Oranges", url: "https://leetcode.com/problems/rotting-oranges/", pattern: "Graphs", difficulty: "Medium", track: "google_pyq", order: 280 },
  { id: "g-31", title: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/", pattern: "Advanced Graphs", difficulty: "Hard", track: "google_pyq", order: 281 },
  { id: "g-32", title: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", pattern: "Graphs", difficulty: "Medium", track: "google_pyq", order: 282 },
  { id: "g-33", title: "Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/", pattern: "Advanced Graphs", difficulty: "Medium", track: "google_pyq", order: 283 },
  { id: "g-34", title: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", pattern: "Stack", difficulty: "Medium", track: "google_pyq", order: 284 },
  { id: "g-35", title: "Find the Safest Path in a Grid", url: "https://leetcode.com/problems/find-the-safest-path-in-a-grid/", pattern: "Graphs", difficulty: "Medium", track: "google_pyq", order: 285 },
  { id: "g-36", title: "The Earliest Moment When Everyone Become Friends", url: "https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/", pattern: "Advanced Graphs", difficulty: "Medium", track: "google_pyq", order: 286 },
  { id: "g-37", title: "Checking Existence of Edge Length Limited Paths", url: "https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/", pattern: "Advanced Graphs", difficulty: "Hard", track: "google_pyq", order: 287 },
  { id: "g-38", title: "Longest String Chain", url: "https://leetcode.com/problems/longest-string-chain/", pattern: "1-D Dynamic Programming", difficulty: "Medium", track: "google_pyq", order: 288 },
  { id: "g-39", title: "Maximum Points You Can Obtain from Cards", url: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/", pattern: "Sliding Window", difficulty: "Medium", track: "google_pyq", order: 289 },
  { id: "g-40", title: "Step-By-Step Directions From a Binary Tree Node to Another", url: "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/", pattern: "Trees", difficulty: "Medium", track: "google_pyq", order: 290 },
  { id: "g-41", title: "Swim in Rising Water", url: "https://leetcode.com/problems/swim-in-rising-water/", pattern: "Graphs", difficulty: "Hard", track: "google_pyq", order: 291 },
  { id: "g-42", title: "Detect Squares", url: "https://leetcode.com/problems/detect-squares/", pattern: "Math & Geometry", difficulty: "Medium", track: "google_pyq", order: 292 },
  { id: "g-43", title: "Amount of New Area Painted Each Day", url: "https://leetcode.com/problems/amount-of-new-area-painted-each-day/", pattern: "Advanced Graphs", difficulty: "Hard", track: "google_pyq", order: 293 },
  { id: "g-44", title: "Range Sum Query - Mutable", url: "https://leetcode.com/problems/range-sum-query-mutable/", pattern: "Advanced Graphs", difficulty: "Medium", track: "google_pyq", order: 294 },
  { id: "g-45", title: "Best Meeting Point", url: "https://leetcode.com/problems/best-meeting-point/", pattern: "Math & Geometry", difficulty: "Hard", track: "google_pyq", order: 295 },
  { id: "g-46", title: "Logger Rate Limiter", url: "https://leetcode.com/problems/logger-rate-limiter/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "google_pyq", order: 296 },
  { id: "g-47", title: "Robot Room Cleaner", url: "https://leetcode.com/problems/robot-room-cleaner/", pattern: "Backtracking", difficulty: "Hard", track: "google_pyq", order: 297 },
  { id: "g-48", title: "Split Array Largest Sum", url: "https://leetcode.com/problems/split-array-largest-sum/", pattern: "Binary Search", difficulty: "Hard", track: "google_pyq", order: 298 },
  { id: "g-49", title: "Word Break II", url: "https://leetcode.com/problems/word-break-ii/", pattern: "Backtracking", difficulty: "Hard", track: "google_pyq", order: 299 },
  { id: "g-50", title: "Employee Free Time", url: "https://leetcode.com/problems/employee-free-time/", pattern: "Heap / Priority Queue", difficulty: "Hard", track: "google_pyq", order: 300 },
  { id: "g-51", title: "Range Module", url: "https://leetcode.com/problems/range-module/", pattern: "Advanced Graphs", difficulty: "Hard", track: "google_pyq", order: 301 },
  { id: "g-52", title: "Random Pick with Weight", url: "https://leetcode.com/problems/random-pick-with-weight/", pattern: "Binary Search", difficulty: "Medium", track: "google_pyq", order: 302 },
  { id: "g-53", title: "Text Justification", url: "https://leetcode.com/problems/text-justification/", pattern: "Arrays & Hashing", difficulty: "Hard", track: "google_pyq", order: 303 },
  { id: "g-54", title: "Snapshot Array", url: "https://leetcode.com/problems/snapshot-array/", pattern: "Binary Search", difficulty: "Medium", track: "google_pyq", order: 304 },
  { id: "g-55", title: "Max Points on a Line", url: "https://leetcode.com/problems/max-points-on-a-line/", pattern: "Math & Geometry", difficulty: "Hard", track: "google_pyq", order: 305 },
  { id: "g-56", title: "Design Search Autocomplete System", url: "https://leetcode.com/problems/design-search-autocomplete-system/", pattern: "Tries", difficulty: "Hard", track: "google_pyq", order: 306 },
  { id: "g-57", title: "Maximum Profit in Job Scheduling", url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", pattern: "1-D Dynamic Programming", difficulty: "Hard", track: "google_pyq", order: 307 },
  { id: "g-58", title: "Bus Routes", url: "https://leetcode.com/problems/bus-routes/", pattern: "Graphs", difficulty: "Hard", track: "google_pyq", order: 308 },
  { id: "g-59", title: "Shortest Path to Get All Keys", url: "https://leetcode.com/problems/shortest-path-to-get-all-keys/", pattern: "Graphs", difficulty: "Hard", track: "google_pyq", order: 309 },
  { id: "g-60", title: "Stock Price Fluctuation", url: "https://leetcode.com/problems/stock-price-fluctuation/", pattern: "Heap / Priority Queue", difficulty: "Medium", track: "google_pyq", order: 310 },

  // ==========================================================
  // QUANT DEVELOPER / LOW-LATENCY TRACK
  // ==========================================================
  { id: "q-1", title: "Design Hit Counter", url: "https://leetcode.com/problems/design-hit-counter/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "quant_dev", order: 311 },
  { id: "q-2", title: "Insert Delete GetRandom O(1)", url: "https://leetcode.com/problems/insert-delete-getrandom-o1/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "quant_dev", order: 312 },
  { id: "q-3", title: "Insert Delete GetRandom O(1) - Duplicates allowed", url: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/", pattern: "Arrays & Hashing", difficulty: "Hard", track: "quant_dev", order: 313 },
  { id: "q-4", title: "Design In-Memory File System", url: "https://leetcode.com/problems/design-in-memory-file-system/", pattern: "Tries", difficulty: "Hard", track: "quant_dev", order: 314 },
  { id: "q-5", title: "Design Bounded Blocking Queue", url: "https://leetcode.com/problems/design-bounded-blocking-queue/", pattern: "Concurrency", difficulty: "Medium", track: "quant_dev", order: 315 },
  { id: "q-6", title: "Print in Order", url: "https://leetcode.com/problems/print-in-order/", pattern: "Concurrency", difficulty: "Easy", track: "quant_dev", order: 316 },
  { id: "q-7", title: "Building H2O", url: "https://leetcode.com/problems/building-h2o/", pattern: "Concurrency", difficulty: "Medium", track: "quant_dev", order: 317 },

  // ==========================================================
  // CSES CORE BENCHMARKS (10 Problems)
  // ==========================================================
  { id: "cses-1", title: "Weird Algorithm (Collatz Conjecture)", url: "https://cses.fi/problemset/task/1068", pattern: "Math & Geometry", difficulty: "Easy", track: "cses", order: 318 },
  { id: "cses-2", title: "Missing Number (XOR / Math)", url: "https://cses.fi/problemset/task/1083", pattern: "Bit Manipulation", difficulty: "Easy", track: "cses", order: 319 },
  { id: "cses-3", title: "Repetitions (Longest Substring)", url: "https://cses.fi/problemset/task/1069", pattern: "Two Pointers", difficulty: "Easy", track: "cses", order: 320 },
  { id: "cses-4", title: "Static Range Sum Queries (Prefix Sums)", url: "https://cses.fi/problemset/task/1646", pattern: "Arrays & Hashing", difficulty: "Easy", track: "cses", order: 321 },
  { id: "cses-5", title: "Dynamic Range Minimum Queries (Segment Tree)", url: "https://cses.fi/problemset/task/1649", pattern: "Advanced Graphs", difficulty: "Medium", track: "cses", order: 322 },
  { id: "cses-6", title: "Dynamic Range Sum Queries (Fenwick / BIT)", url: "https://cses.fi/problemset/task/1648", pattern: "Advanced Graphs", difficulty: "Medium", track: "cses", order: 323 },
  { id: "cses-7", title: "Shortest Routes I (Dijkstra)", url: "https://cses.fi/problemset/task/1671", pattern: "Graphs", difficulty: "Medium", track: "cses", order: 324 },
  { id: "cses-8", title: "Flight Discount (State Graph Dijkstra)", url: "https://cses.fi/problemset/task/1195", pattern: "Graphs", difficulty: "Medium", track: "cses", order: 325 },
  { id: "cses-9", title: "Tree Diameter", url: "https://cses.fi/problemset/task/1131", pattern: "Trees", difficulty: "Medium", track: "cses", order: 326 },
  { id: "cses-10", title: "Subarray Sums I & II (Prefix Hash)", url: "https://cses.fi/problemset/task/1660", pattern: "Arrays & Hashing", difficulty: "Medium", track: "cses", order: 327 },
];
