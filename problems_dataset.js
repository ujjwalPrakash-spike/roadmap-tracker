// ==============================================================================
// Woolf Systems & Quant Engine — Curated Problem Database & Sheets
// Tracks: NeetCode 250, Google PYQs, CSES Core, Sheet References
// ==============================================================================

const SHEET_REFERENCES = [
  {
    name: "NeetCode 250",
    category: "Primary Foundation (Months 1–4)",
    url: "https://neetcode.io/practice",
    description: "The premier 250-problem pattern recognition sequence in C++.",
    total: 250
  },
  {
    name: "Google Top Interview PYQs",
    category: "Interview Rigor (Months 5–7)",
    url: "https://leetcode.com/company/google/",
    description: "High-frequency Google onsite & phone screen questions.",
    total: 100
  },
  {
    name: "CSES Problem Set",
    category: "Competitive Programming Depth (Months 8–9)",
    url: "https://cses.fi/problemset/",
    description: "The standard Scandinavian competitive programming problem set.",
    total: 300
  },
  {
    name: "Striver's A2Z DSA Sheet",
    category: "Reference Guide",
    url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
    description: "Comprehensive step-by-step topic breakdown.",
    total: 455
  },
  {
    name: "Grind 169 (Tech Interview Handbook)",
    category: "High-ROI Sprint Sheet",
    url: "https://www.techinterviewhandbook.org/grind75?weeks=26&hours=40",
    description: "Curated prioritized LeetCode questions by Yangshun Tay.",
    total: 169
  }
];

const CURATED_PROBLEMS = [
  // --- 1. ARRAYS & HASHING ---
  { id: "nc-1", title: "Contains Duplicate", slug: "contains-duplicate", url: "https://leetcode.com/problems/contains-duplicate/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 1 },
  { id: "nc-2", title: "Valid Anagram", slug: "valid-anagram", url: "https://leetcode.com/problems/valid-anagram/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 2 },
  { id: "nc-3", title: "Two Sum", slug: "two-sum", url: "https://leetcode.com/problems/two-sum/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "neetcode", order: 3 },
  { id: "nc-4", title: "Group Anagrams", slug: "group-anagrams", url: "https://leetcode.com/problems/group-anagrams/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 4 },
  { id: "nc-5", title: "Top K Frequent Elements", slug: "top-k-frequent-elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 5 },
  { id: "nc-6", title: "Product of Array Except Self", slug: "product-of-array-except-self", url: "https://leetcode.com/problems/product-of-array-except-self/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 6 },
  { id: "nc-7", title: "Valid Sudoku", slug: "valid-sudoku", url: "https://leetcode.com/problems/valid-sudoku/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 7 },
  { id: "nc-8", title: "Encode and Decode Strings", slug: "encode-and-decode-strings", url: "https://leetcode.com/problems/encode-and-decode-strings/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 8 },
  { id: "nc-9", title: "Longest Consecutive Sequence", slug: "longest-consecutive-sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", pattern: "Arrays & Hashing", difficulty: "Medium", track: "neetcode", order: 9 },

  // --- 2. TWO POINTERS ---
  { id: "nc-10", title: "Valid Palindrome", slug: "valid-palindrome", url: "https://leetcode.com/problems/valid-palindrome/", pattern: "Two Pointers", difficulty: "Easy", track: "neetcode", order: 10 },
  { id: "nc-11", title: "Two Sum II - Input Array Is Sorted", slug: "two-sum-ii-input-array-is-sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 11 },
  { id: "nc-12", title: "3Sum", slug: "3sum", url: "https://leetcode.com/problems/3sum/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 12 },
  { id: "nc-13", title: "Container With Most Water", slug: "container-with-most-water", url: "https://leetcode.com/problems/container-with-most-water/", pattern: "Two Pointers", difficulty: "Medium", track: "neetcode", order: 13 },
  { id: "nc-14", title: "Trapping Rain Water", slug: "trapping-rain-water", url: "https://leetcode.com/problems/trapping-rain-water/", pattern: "Two Pointers", difficulty: "Hard", track: "neetcode", order: 14 },

  // --- 3. SLIDING WINDOW ---
  { id: "nc-15", title: "Best Time to Buy and Sell Stock", slug: "best-time-to-buy-and-sell-stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", pattern: "Sliding Window", difficulty: "Easy", track: "neetcode", order: 15 },
  { id: "nc-16", title: "Longest Substring Without Repeating Characters", slug: "longest-substring-without-repeating-characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 16 },
  { id: "nc-17", title: "Longest Repeating Character Replacement", slug: "longest-repeating-character-replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 17 },
  { id: "nc-18", title: "Permutation in String", slug: "permutation-in-string", url: "https://leetcode.com/problems/permutation-in-string/", pattern: "Sliding Window", difficulty: "Medium", track: "neetcode", order: 18 },
  { id: "nc-19", title: "Minimum Window Substring", slug: "minimum-window-substring", url: "https://leetcode.com/problems/minimum-window-substring/", pattern: "Sliding Window", difficulty: "Hard", track: "neetcode", order: 19 },
  { id: "nc-20", title: "Sliding Window Maximum", slug: "sliding-window-maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", pattern: "Sliding Window", difficulty: "Hard", track: "neetcode", order: 20 },

  // --- 4. STACK ---
  { id: "nc-21", title: "Valid Parentheses", slug: "valid-parentheses", url: "https://leetcode.com/problems/valid-parentheses/", pattern: "Stack", difficulty: "Easy", track: "neetcode", order: 21 },
  { id: "nc-22", title: "Min Stack", slug: "min-stack", url: "https://leetcode.com/problems/min-stack/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 22 },
  { id: "nc-23", title: "Evaluate Reverse Polish Notation", slug: "evaluate-reverse-polish-notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 23 },
  { id: "nc-24", title: "Generate Parentheses", slug: "generate-parentheses", url: "https://leetcode.com/problems/generate-parentheses/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 24 },
  { id: "nc-25", title: "Daily Temperatures", slug: "daily-temperatures", url: "https://leetcode.com/problems/daily-temperatures/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 25 },
  { id: "nc-26", title: "Car Fleet", slug: "car-fleet", url: "https://leetcode.com/problems/car-fleet/", pattern: "Stack", difficulty: "Medium", track: "neetcode", order: 26 },
  { id: "nc-27", title: "Largest Rectangle in Histogram", slug: "largest-rectangle-in-histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", pattern: "Stack", difficulty: "Hard", track: "neetcode", order: 27 },

  // --- 5. BINARY SEARCH ---
  { id: "nc-28", title: "Binary Search", slug: "binary-search", url: "https://leetcode.com/problems/binary-search/", pattern: "Binary Search", difficulty: "Easy", track: "neetcode", order: 28 },
  { id: "nc-29", title: "Search a 2D Matrix", slug: "search-a-2d-matrix", url: "https://leetcode.com/problems/search-a-2d-matrix/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 29 },
  { id: "nc-30", title: "Koko Eating Bananas", slug: "koko-eating-bananas", url: "https://leetcode.com/problems/koko-eating-bananas/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 30 },
  { id: "nc-31", title: "Find Minimum in Rotated Sorted Array", slug: "find-minimum-in-rotated-sorted-array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 31 },
  { id: "nc-32", title: "Search in Rotated Sorted Array", slug: "search-in-rotated-sorted-array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 32 },
  { id: "nc-33", title: "Time Based Key-Value Store", slug: "time-based-key-value-store", url: "https://leetcode.com/problems/time-based-key-value-store/", pattern: "Binary Search", difficulty: "Medium", track: "neetcode", order: 33 },
  { id: "nc-34", title: "Median of Two Sorted Arrays", slug: "median-of-two-sorted-arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", pattern: "Binary Search", difficulty: "Hard", track: "neetcode", order: 34 },

  // --- 6. LINKED LIST ---
  { id: "nc-35", title: "Reverse Linked List", slug: "reverse-linked-list", url: "https://leetcode.com/problems/reverse-linked-list/", pattern: "Linked List", difficulty: "Easy", track: "neetcode", order: 35 },
  { id: "nc-36", title: "Merge Two Sorted Lists", slug: "merge-two-sorted-lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", pattern: "Linked List", difficulty: "Easy", track: "neetcode", order: 36 },
  { id: "nc-37", title: "Reorder List", slug: "reorder-list", url: "https://leetcode.com/problems/reorder-list/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 37 },
  { id: "nc-38", title: "Remove Nth Node From End of List", slug: "remove-nth-node-from-end-of-list", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 38 },
  { id: "nc-39", title: "Copy List with Random Pointer", slug: "copy-list-with-random-pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 39 },
  { id: "nc-40", title: "Add Two Numbers", slug: "add-two-numbers", url: "https://leetcode.com/problems/add-two-numbers/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 40 },
  { id: "nc-41", title: "Linked List Cycle", slug: "linked-list-cycle", url: "https://leetcode.com/problems/linked-list-cycle/", pattern: "Linked List", difficulty: "Easy", track: "neetcode", order: 41 },
  { id: "nc-42", title: "Find the Duplicate Number", slug: "find-the-duplicate-number", url: "https://leetcode.com/problems/find-the-duplicate-number/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 42 },
  { id: "nc-43", title: "LRU Cache", slug: "lru-cache", url: "https://leetcode.com/problems/lru-cache/", pattern: "Linked List", difficulty: "Medium", track: "neetcode", order: 43 },
  { id: "nc-44", title: "Merge K Sorted Lists", slug: "merge-k-sorted-lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", pattern: "Linked List", difficulty: "Hard", track: "neetcode", order: 44 },
  { id: "nc-45", title: "Reverse Nodes in k-Group", slug: "reverse-nodes-in-k-group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", pattern: "Linked List", difficulty: "Hard", track: "neetcode", order: 45 },

  // --- 7. TREES ---
  { id: "nc-46", title: "Invert Binary Tree", slug: "invert-binary-tree", url: "https://leetcode.com/problems/invert-binary-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 46 },
  { id: "nc-47", title: "Maximum Depth of Binary Tree", slug: "maximum-depth-of-binary-tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 47 },
  { id: "nc-48", title: "Diameter of Binary Tree", slug: "diameter-of-binary-tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 48 },
  { id: "nc-49", title: "Balanced Binary Tree", slug: "balanced-binary-tree", url: "https://leetcode.com/problems/balanced-binary-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 49 },
  { id: "nc-50", title: "Same Tree", slug: "same-tree", url: "https://leetcode.com/problems/same-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 50 },
  { id: "nc-51", title: "Subtree of Another Tree", slug: "subtree-of-another-tree", url: "https://leetcode.com/problems/subtree-of-another-tree/", pattern: "Trees", difficulty: "Easy", track: "neetcode", order: 51 },
  { id: "nc-52", title: "Lowest Common Ancestor of a BST", slug: "lowest-common-ancestor-of-a-binary-search-tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 52 },
  { id: "nc-53", title: "Binary Tree Level Order Traversal", slug: "binary-tree-level-order-traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 53 },
  { id: "nc-54", title: "Binary Tree Right Side View", slug: "binary-tree-right-side-view", url: "https://leetcode.com/problems/binary-tree-right-side-view/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 54 },
  { id: "nc-55", title: "Count Good Nodes in Binary Tree", slug: "count-good-nodes-in-binary-tree", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 55 },
  { id: "nc-56", title: "Validate Binary Search Tree", slug: "validate-binary-search-tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 56 },
  { id: "nc-57", title: "Kth Smallest Element in a BST", slug: "kth-smallest-element-in-a-bst", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 57 },
  { id: "nc-58", title: "Construct Binary Tree from Preorder and Inorder Traversal", slug: "construct-binary-tree-from-preorder-and-inorder-traversal", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", pattern: "Trees", difficulty: "Medium", track: "neetcode", order: 58 },
  { id: "nc-59", title: "Binary Tree Maximum Path Sum", slug: "binary-tree-maximum-path-sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", pattern: "Trees", difficulty: "Hard", track: "neetcode", order: 59 },
  { id: "nc-60", title: "Serialize and Deserialize Binary Tree", slug: "serialize-and-deserialize-binary-tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", pattern: "Trees", difficulty: "Hard", track: "neetcode", order: 60 },

  // --- 8. HEAP / PRIORITY QUEUE ---
  { id: "nc-61", title: "Kth Largest Element in a Stream", slug: "kth-largest-element-in-a-stream", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", pattern: "Heaps", difficulty: "Easy", track: "neetcode", order: 61 },
  { id: "nc-62", title: "Last Stone Weight", slug: "last-stone-weight", url: "https://leetcode.com/problems/last-stone-weight/", pattern: "Heaps", difficulty: "Easy", track: "neetcode", order: 62 },
  { id: "nc-63", title: "K Closest Points to Origin", slug: "k-closest-points-to-origin", url: "https://leetcode.com/problems/k-closest-points-to-origin/", pattern: "Heaps", difficulty: "Medium", track: "neetcode", order: 63 },
  { id: "nc-64", title: "Kth Largest Element in an Array", slug: "kth-largest-element-in-an-array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", pattern: "Heaps", difficulty: "Medium", track: "neetcode", order: 64 },
  { id: "nc-65", title: "Task Scheduler", slug: "task-scheduler", url: "https://leetcode.com/problems/task-scheduler/", pattern: "Heaps", difficulty: "Medium", track: "neetcode", order: 65 },
  { id: "nc-66", title: "Design Twitter", slug: "design-twitter", url: "https://leetcode.com/problems/design-twitter/", pattern: "Heaps", difficulty: "Medium", track: "neetcode", order: 66 },
  { id: "nc-67", title: "Find Median from Data Stream", slug: "find-median-from-data-stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", pattern: "Heaps", difficulty: "Hard", track: "neetcode", order: 67 },

  // --- 9. BACKTRACKING ---
  { id: "nc-68", title: "Subsets", slug: "subsets", url: "https://leetcode.com/problems/subsets/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 68 },
  { id: "nc-69", title: "Combination Sum", slug: "combination-sum", url: "https://leetcode.com/problems/combination-sum/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 69 },
  { id: "nc-70", title: "Permutations", slug: "permutations", url: "https://leetcode.com/problems/permutations/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 70 },
  { id: "nc-71", title: "Subsets II", slug: "subsets-ii", url: "https://leetcode.com/problems/subsets-ii/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 71 },
  { id: "nc-72", title: "Combination Sum II", slug: "combination-sum-ii", url: "https://leetcode.com/problems/combination-sum-ii/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 72 },
  { id: "nc-73", title: "Word Search", slug: "word-search", url: "https://leetcode.com/problems/word-search/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 73 },
  { id: "nc-74", title: "Palindrome Partitioning", slug: "palindrome-partitioning", url: "https://leetcode.com/problems/palindrome-partitioning/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 74 },
  { id: "nc-75", title: "Letter Combinations of a Phone Number", slug: "letter-combinations-of-a-phone-number", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", pattern: "Backtracking", difficulty: "Medium", track: "neetcode", order: 75 },
  { id: "nc-76", title: "N-Queens", slug: "n-queens", url: "https://leetcode.com/problems/n-queens/", pattern: "Backtracking", difficulty: "Hard", track: "neetcode", order: 76 },

  // --- 10. GRAPHS ---
  { id: "nc-77", title: "Number of Islands", slug: "number-of-islands", url: "https://leetcode.com/problems/number-of-islands/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 77 },
  { id: "nc-78", title: "Max Area of Island", slug: "max-area-of-island", url: "https://leetcode.com/problems/max-area-of-island/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 78 },
  { id: "nc-79", title: "Clone Graph", slug: "clone-graph", url: "https://leetcode.com/problems/clone-graph/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 79 },
  { id: "nc-80", title: "Pacific Atlantic Water Flow", slug: "pacific-atlantic-water-flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 80 },
  { id: "nc-81", title: "Surrounded Regions", slug: "surrounded-regions", url: "https://leetcode.com/problems/surrounded-regions/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 81 },
  { id: "nc-82", title: "Rotting Oranges", slug: "rotting-oranges", url: "https://leetcode.com/problems/rotting-oranges/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 82 },
  { id: "nc-83", title: "Walls and Gates", slug: "walls-and-gates", url: "https://leetcode.com/problems/walls-and-gates/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 83 },
  { id: "nc-84", title: "Course Schedule", slug: "course-schedule", url: "https://leetcode.com/problems/course-schedule/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 84 },
  { id: "nc-85", title: "Course Schedule II", slug: "course-schedule-ii", url: "https://leetcode.com/problems/course-schedule-ii/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 85 },
  { id: "nc-86", title: "Redundant Connection", slug: "redundant-connection", url: "https://leetcode.com/problems/redundant-connection/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 86 },
  { id: "nc-87", title: "Number of Connected Components in an Undirected Graph", slug: "number-of-connected-components-in-an-undirected-graph", url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 87 },
  { id: "nc-88", title: "Graph Valid Tree", slug: "graph-valid-tree", url: "https://leetcode.com/problems/graph-valid-tree/", pattern: "Graphs & Topo", difficulty: "Medium", track: "neetcode", order: 88 },
  { id: "nc-89", title: "Word Ladder", slug: "word-ladder", url: "https://leetcode.com/problems/word-ladder/", pattern: "Graphs & Topo", difficulty: "Hard", track: "neetcode", order: 89 },

  // --- 11. 1-D DYNAMIC PROGRAMMING ---
  { id: "nc-90", title: "Climbing Stairs", slug: "climbing-stairs", url: "https://leetcode.com/problems/climbing-stairs/", pattern: "DP (1D/2D)", difficulty: "Easy", track: "neetcode", order: 90 },
  { id: "nc-91", title: "Min Cost Climbing Stairs", slug: "min-cost-climbing-stairs", url: "https://leetcode.com/problems/min-cost-climbing-stairs/", pattern: "DP (1D/2D)", difficulty: "Easy", track: "neetcode", order: 91 },
  { id: "nc-92", title: "House Robber", slug: "house-robber", url: "https://leetcode.com/problems/house-robber/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 92 },
  { id: "nc-93", title: "House Robber II", slug: "house-robber-ii", url: "https://leetcode.com/problems/house-robber-ii/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 93 },
  { id: "nc-94", title: "Longest Palindromic Substring", slug: "longest-palindromic-substring", url: "https://leetcode.com/problems/longest-palindromic-substring/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 94 },
  { id: "nc-95", title: "Palindromic Substrings", slug: "palindromic-substrings", url: "https://leetcode.com/problems/palindromic-substrings/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 95 },
  { id: "nc-96", title: "Decode Ways", slug: "decode-ways", url: "https://leetcode.com/problems/decode-ways/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 96 },
  { id: "nc-97", title: "Coin Change", slug: "coin-change", url: "https://leetcode.com/problems/coin-change/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 97 },
  { id: "nc-98", title: "Maximum Product Subarray", slug: "maximum-product-subarray", url: "https://leetcode.com/problems/maximum-product-subarray/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 98 },
  { id: "nc-99", title: "Word Break", slug: "word-break", url: "https://leetcode.com/problems/word-break/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 99 },
  { id: "nc-100", title: "Longest Increasing Subsequence", slug: "longest-increasing-subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", pattern: "DP (1D/2D)", difficulty: "Medium", track: "neetcode", order: 100 },

  // --- GOOGLE TOP PYQS ---
  { id: "g-1", title: "Logger Rate Limiter", slug: "logger-rate-limiter", url: "https://leetcode.com/problems/logger-rate-limiter/", pattern: "Arrays & Hashing", difficulty: "Easy", track: "google_pyq", order: 101 },
  { id: "g-2", title: "Robot Room Cleaner", slug: "robot-room-cleaner", url: "https://leetcode.com/problems/robot-room-cleaner/", pattern: "Backtracking", difficulty: "Hard", track: "google_pyq", order: 102 },
  { id: "g-3", title: "Split Array Largest Sum", slug: "split-array-largest-sum", url: "https://leetcode.com/problems/split-array-largest-sum/", pattern: "Binary Search", difficulty: "Hard", track: "google_pyq", order: 103 },
  { id: "g-4", title: "Longest Increasing Path in a Matrix", slug: "longest-increasing-path-in-a-matrix", url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", pattern: "DP (1D/2D)", difficulty: "Hard", track: "google_pyq", order: 104 },
  { id: "g-5", title: "Word Break II", slug: "word-break-ii", url: "https://leetcode.com/problems/word-break-ii/", pattern: "Backtracking", difficulty: "Hard", track: "google_pyq", order: 105 },
  { id: "g-6", title: "Employee Free Time", slug: "employee-free-time", url: "https://leetcode.com/problems/employee-free-time/", pattern: "Heaps", difficulty: "Hard", track: "google_pyq", order: 106 },

  // --- CSES CORE SET ---
  { id: "cses-1", title: "Weird Algorithm (Collatz)", slug: "weird-algorithm", url: "https://cses.fi/problemset/task/1068", pattern: "Math & Simulation", difficulty: "Easy", track: "cses", order: 201 },
  { id: "cses-2", title: "Missing Number", slug: "missing-number", url: "https://cses.fi/problemset/task/1083", pattern: "Bit Manipulation", difficulty: "Easy", track: "cses", order: 202 },
  { id: "cses-3", title: "Repetitions", slug: "repetitions", url: "https://cses.fi/problemset/task/1069", pattern: "Two Pointers", difficulty: "Easy", track: "cses", order: 203 },
  { id: "cses-4", title: "Static Range Sum Queries (Prefix Sum)", slug: "static-range-sum-queries", url: "https://cses.fi/problemset/task/1646", pattern: "Arrays & Hashing", difficulty: "Easy", track: "cses", order: 204 },
  { id: "cses-5", title: "Dynamic Range Minimum Queries (Segment Tree)", slug: "dynamic-range-minimum-queries", url: "https://cses.fi/problemset/task/1649", pattern: "Segment Tree / DSU", difficulty: "Medium", track: "cses", order: 205 }
];
