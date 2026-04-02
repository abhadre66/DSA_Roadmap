import { useState } from "react";

const stages = [
  {
    id: 1,
    title: "Python Foundations",
    weeks: "Week 1\u20132",
    icon: "\u26A1",
    difficulty: "Easy",
    diffColor: "#4CAF50",
    accent: "#2E7D32",
    overview:
      "Get fluent in Python syntax, data types, and built-in data structures. This is your toolkit \u2014 everything else builds on this.",
    topics: [
      {
        name: "Variables, Data Types & Operators",
        difficulty: "Easy",
        detail: "int, float, str, bool, type casting, arithmetic & comparison operators.",
        video: { name: "Mosh \u2014 Python for Beginners (Variables & Types)", url: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
      },
      {
        name: "Control Flow (if/else, loops)",
        difficulty: "Easy",
        detail: "if/elif/else, for loops, while loops, break/continue, nested loops, range().",
        video: { name: "Corey Schafer \u2014 Python Loops & Conditionals", url: "https://www.youtube.com/watch?v=6iF8Xb7Z3wQ" },
      },
      {
        name: "Functions & Scope",
        difficulty: "Easy",
        detail: "def, parameters, return, *args/**kwargs, local vs global scope, lambda.",
        video: { name: "Corey Schafer \u2014 Functions", url: "https://www.youtube.com/watch?v=9Os0o3wzS_I" },
      },
      {
        name: "Strings & String Methods",
        difficulty: "Easy",
        detail: "Slicing, split/join, f-strings, immutability, common methods (find, replace, strip).",
        video: { name: "Corey Schafer \u2014 Strings", url: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
      },
      {
        name: "Lists, Tuples, Sets, Dicts",
        difficulty: "Easy",
        detail: "List comprehensions, dict operations, set operations, when to use which.",
        video: { name: "Corey Schafer \u2014 Lists, Tuples, Sets", url: "https://www.youtube.com/watch?v=W8KRzm-HUcc" },
      },
    ],
    resources: [
      { name: "Python Full Course \u2014 Mosh (6hrs)", url: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
      { name: "Corey Schafer \u2014 Python Tutorials", url: "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" },
      { name: "Automate the Boring Stuff (free book)", url: "https://automatetheboringstuff.com" },
    ],
  },
  {
    id: 2,
    title: "Complexity Analysis",
    weeks: "Week 2\u20133",
    icon: "\uD83D\uDCD0",
    difficulty: "Easy",
    diffColor: "#4CAF50",
    accent: "#1565C0",
    overview:
      "Learn to measure how fast/slow your code is. Every interview expects you to state the Big O of your solution.",
    topics: [
      {
        name: "Big O Notation",
        difficulty: "Easy",
        detail: "O(1), O(log n), O(n), O(n log n), O(n\u00B2), O(2\u207F). How to rank them.",
        video: { name: "NeetCode \u2014 Big O Notation (clearest explanation)", url: "https://www.youtube.com/watch?v=BgLTDT03QtU" },
      },
      {
        name: "Analyzing Loops",
        difficulty: "Easy",
        detail: "Single loops = O(n), nested = O(n\u00B2). Halving = O(log n).",
        video: { name: "Abdul Bari \u2014 Time Complexity of Loops", url: "https://www.youtube.com/watch?v=9TlHvipP5yA" },
      },
      {
        name: "Space Complexity",
        difficulty: "Easy\u2013Medium",
        detail: "Auxiliary space, recursion stack space, in-place vs extra space.",
        video: { name: "CS Dojo \u2014 Space Complexity", url: "https://www.youtube.com/watch?v=yOb0BL-84h8" },
      },
      {
        name: "Analyzing Recursion",
        difficulty: "Medium",
        detail: "Recurrence relations, recursion tree method, Master theorem basics.",
        video: { name: "Abdul Bari \u2014 Recurrence Relations & Master Theorem", url: "https://www.youtube.com/watch?v=4V30R3I1vLI" },
      },
    ],
    resources: [
      { name: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com" },
      { name: "mycodeschool \u2014 Time Complexity playlist", url: "https://www.youtube.com/playlist?list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn" },
    ],
  },
  {
    id: 3,
    title: "Arrays & Hashing",
    weeks: "Week 3\u20135",
    icon: "\uD83E\uDDF1",
    difficulty: "Easy\u2013Medium",
    diffColor: "#8BC34A",
    accent: "#E65100",
    overview:
      "The most common interview topic. Learn two-pointer, sliding window, prefix sum, and frequency maps \u2014 these patterns solve 40%+ of all problems.",
    topics: [
      {
        name: "Array Traversal & Basic Operations",
        difficulty: "Easy",
        detail: "Iteration, insertion, deletion, reversing. Python list methods.",
        video: { name: "NeetCode \u2014 Arrays & Hashing (full walkthrough)", url: "https://www.youtube.com/watch?v=KLlXCFG5TnA" },
      },
      {
        name: "HashMap / Dictionary Patterns",
        difficulty: "Easy",
        detail: "Frequency counting, two-sum pattern, grouping with dicts, defaultdict.",
        video: { name: "NeetCode \u2014 Two Sum (HashMap pattern explained)", url: "https://www.youtube.com/watch?v=KLlXCFG5TnA" },
      },
      {
        name: "Two Pointer Technique",
        difficulty: "Easy\u2013Medium",
        detail: "Opposite pointers (sorted arrays), same-direction pointers. 3Sum, Container With Water.",
        video: { name: "NeetCode \u2014 Two Pointers", url: "https://www.youtube.com/watch?v=cQ1Oz4ckceM" },
      },
      {
        name: "Sliding Window",
        difficulty: "Medium",
        detail: "Fixed-size and variable-size windows. Shrink/expand pattern.",
        video: { name: "NeetCode \u2014 Sliding Window (best explanation)", url: "https://www.youtube.com/watch?v=1pkOgXD63yU" },
      },
      {
        name: "Prefix Sum",
        difficulty: "Medium",
        detail: "Running totals for range sum queries. Subarray sum equals K.",
        video: { name: "NeetCode \u2014 Prefix Sums", url: "https://www.youtube.com/watch?v=yuws7YK0Bak" },
      },
      {
        name: "Kadane\u2019s Algorithm",
        difficulty: "Medium",
        detail: "Maximum subarray sum in O(n). Foundation for many DP problems.",
        video: { name: "NeetCode \u2014 Maximum Subarray (Kadane\u2019s)", url: "https://www.youtube.com/watch?v=5WZl3MMT0Eg" },
      },
    ],
    resources: [
      { name: "NeetCode \u2014 Arrays & Hashing playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf" },
      { name: "Striver \u2014 Array problems playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" },
    ],
  },
  {
    id: 4,
    title: "Sorting & Binary Search",
    weeks: "Week 5\u20137",
    icon: "\uD83D\uDD0D",
    difficulty: "Medium",
    diffColor: "#FFC107",
    accent: "#7B1FA2",
    overview:
      "Sorting teaches divide-and-conquer. Binary search is used EVERYWHERE \u2014 on arrays, on answer spaces, on matrices. The \u2018binary search on answer\u2019 pattern is a game-changer.",
    topics: [
      {
        name: "Merge Sort",
        difficulty: "Medium",
        detail: "Divide & conquer, stable, O(n log n). Used in merge intervals, count inversions.",
        video: { name: "Striver \u2014 Merge Sort (visual + code)", url: "https://www.youtube.com/watch?v=ogjf7ORKfd8" },
      },
      {
        name: "Quick Sort",
        difficulty: "Medium",
        detail: "In-place partition, avg O(n log n). Lomuto vs Hoare. Quick Select for Kth element.",
        video: { name: "Striver \u2014 Quick Sort", url: "https://www.youtube.com/watch?v=WIrA4YexLRQ" },
      },
      {
        name: "Binary Search (Standard)",
        difficulty: "Easy\u2013Medium",
        detail: "Search sorted array, first/last occurrence, lower/upper bound.",
        video: { name: "NeetCode \u2014 Binary Search", url: "https://www.youtube.com/watch?v=s4DPM8ct1pI" },
      },
      {
        name: "Binary Search on Answer",
        difficulty: "Medium\u2013Hard",
        detail: "Koko Eating Bananas, Ship Packages, Aggressive Cows. The most powerful BS pattern.",
        video: { name: "Aditya Verma \u2014 Binary Search on Answer (legendary playlist)", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2" },
      },
      {
        name: "Search in Rotated Array / 2D Matrix",
        difficulty: "Medium",
        detail: "Modified binary search. Finding pivot, searching in rotated sorted arrays.",
        video: { name: "NeetCode \u2014 Search Rotated Sorted Array", url: "https://www.youtube.com/watch?v=U8XENwh8Oy8" },
      },
    ],
    resources: [
      { name: "NeetCode \u2014 Binary Search playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53leNZQd0iINpD-MAhMOMzWvO" },
      { name: "Aditya Verma \u2014 Binary Search (complete)", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2" },
    ],
  },
  {
    id: 5,
    title: "Linked Lists",
    weeks: "Week 7\u20138",
    icon: "\uD83D\uDD17",
    difficulty: "Easy\u2013Medium",
    diffColor: "#8BC34A",
    accent: "#00838F",
    overview:
      "Not as common in Python interviews (lists cover most cases), but pointer manipulation concepts appear everywhere. Fast/slow pointer is a must-know.",
    topics: [
      {
        name: "Singly Linked List Basics",
        difficulty: "Easy",
        detail: "Node class, traversal, insertion, deletion. Build from scratch in Python.",
        video: { name: "NeetCode \u2014 Linked List basics", url: "https://www.youtube.com/watch?v=G0_I-ZF0S38" },
      },
      {
        name: "Reverse a Linked List",
        difficulty: "Easy",
        detail: "Iterative and recursive. THE most asked linked list question.",
        video: { name: "NeetCode \u2014 Reverse Linked List", url: "https://www.youtube.com/watch?v=G0_I-ZF0S38" },
      },
      {
        name: "Fast & Slow Pointers",
        difficulty: "Medium",
        detail: "Detect cycle, find middle, find cycle start (Floyd\u2019s algorithm).",
        video: { name: "NeetCode \u2014 Linked List Cycle", url: "https://www.youtube.com/watch?v=gBTe7lFR3vc" },
      },
      {
        name: "Merge / Reorder Lists",
        difficulty: "Medium",
        detail: "Merge two sorted lists, merge K sorted lists, reorder list.",
        video: { name: "NeetCode \u2014 Merge Two Sorted Lists", url: "https://www.youtube.com/watch?v=XIdigk956u0" },
      },
    ],
    resources: [
      { name: "NeetCode \u2014 Linked List playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53leU0Ec0VkBhnf4npMRFiNcB" },
    ],
  },
  {
    id: 6,
    title: "Stacks & Queues",
    weeks: "Week 8\u20139",
    icon: "\uD83D\uDCDA",
    difficulty: "Easy\u2013Medium",
    diffColor: "#8BC34A",
    accent: "#AD1457",
    overview:
      "Stacks solve parentheses, expression, and monotonic problems. Queues are the backbone of BFS. Both show up constantly.",
    topics: [
      {
        name: "Stack Basics & Valid Parentheses",
        difficulty: "Easy",
        detail: "LIFO. Push/pop. Matching brackets is THE classic stack problem.",
        video: { name: "NeetCode \u2014 Valid Parentheses", url: "https://www.youtube.com/watch?v=WTzjTskDFMg" },
      },
      {
        name: "Min Stack",
        difficulty: "Easy\u2013Medium",
        detail: "Design a stack that supports getMin() in O(1).",
        video: { name: "NeetCode \u2014 Min Stack", url: "https://www.youtube.com/watch?v=qkLl7nAwDPo" },
      },
      {
        name: "Monotonic Stack",
        difficulty: "Medium\u2013Hard",
        detail: "Next Greater Element, Daily Temperatures, Largest Rectangle in Histogram.",
        video: { name: "NeetCode \u2014 Daily Temperatures (monotonic stack explained)", url: "https://www.youtube.com/watch?v=cTBiBSnjO3c" },
      },
      {
        name: "Queue & Deque",
        difficulty: "Easy\u2013Medium",
        detail: "FIFO. collections.deque in Python. Sliding window maximum (hard).",
        video: { name: "NeetCode \u2014 Sliding Window Maximum", url: "https://www.youtube.com/watch?v=DfljaUwZsOk" },
      },
    ],
    resources: [
      { name: "NeetCode \u2014 Stack playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53lfxD6l5pAGvCD4nPvWKU8Qo" },
    ],
  },
  {
    id: 7,
    title: "Recursion & Backtracking",
    weeks: "Week 9\u201311",
    icon: "\uD83D\uDD04",
    difficulty: "Medium",
    diffColor: "#FFC107",
    accent: "#6A1B9A",
    overview:
      "Recursion is the gateway to trees, graphs, and DP. Backtracking = recursion + undo. If this clicks, everything else becomes easier.",
    topics: [
      {
        name: "Recursion Fundamentals",
        difficulty: "Medium",
        detail: "Base case, recursive case, call stack. Think in subproblems, not loops.",
        video: { name: "Striver \u2014 Recursion from basics to advanced (BEST series)", url: "https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9" },
      },
      {
        name: "Subsets & Power Set",
        difficulty: "Medium",
        detail: "Generate all subsets. Include/exclude pattern. Bit manipulation approach.",
        video: { name: "NeetCode \u2014 Subsets", url: "https://www.youtube.com/watch?v=REOH22Xwdkk" },
      },
      {
        name: "Permutations & Combinations",
        difficulty: "Medium",
        detail: "Generate all permutations, combinations with/without repetition.",
        video: { name: "NeetCode \u2014 Permutations", url: "https://www.youtube.com/watch?v=s7AvT7cGdSo" },
      },
      {
        name: "Backtracking (N-Queens, Sudoku)",
        difficulty: "Medium\u2013Hard",
        detail: "Place, check, undo. N-Queens, Sudoku Solver, Word Search.",
        video: { name: "NeetCode \u2014 N-Queens (backtracking masterclass)", url: "https://www.youtube.com/watch?v=Ph95IHmRp5M" },
      },
    ],
    resources: [
      { name: "Striver \u2014 Recursion series (21 videos)", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9" },
      { name: "Aditya Verma \u2014 Recursion & Backtracking", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY" },
    ],
  },
  {
    id: 8,
    title: "Trees",
    weeks: "Week 11\u201314",
    icon: "\uD83C\uDF33",
    difficulty: "Medium",
    diffColor: "#FFC107",
    accent: "#283593",
    overview:
      "The #1 most tested topic in interviews. Master traversals first, then BST operations, then classic patterns (LCA, diameter, views).",
    topics: [
      {
        name: "Binary Tree Traversals",
        difficulty: "Easy\u2013Medium",
        detail: "Inorder, Preorder, Postorder (recursive + iterative). Level-order BFS.",
        video: { name: "NeetCode \u2014 Binary Tree traversals (all 4)", url: "https://www.youtube.com/watch?v=aM-s6JDOf0c" },
      },
      {
        name: "Max Depth, Same Tree, Invert Tree",
        difficulty: "Easy",
        detail: "Classic warm-up problems. All use simple recursion.",
        video: { name: "NeetCode \u2014 Invert Binary Tree", url: "https://www.youtube.com/watch?v=OnSn2XEQ4MY" },
      },
      {
        name: "BST Operations",
        difficulty: "Medium",
        detail: "Search, insert, delete. Validate BST. Kth smallest (inorder).",
        video: { name: "NeetCode \u2014 Validate BST", url: "https://www.youtube.com/watch?v=s6ATEkipzow" },
      },
      {
        name: "LCA, Diameter, Path Sum",
        difficulty: "Medium",
        detail: "Lowest Common Ancestor, tree diameter, root-to-leaf paths.",
        video: { name: "NeetCode \u2014 Diameter of Binary Tree", url: "https://www.youtube.com/watch?v=bkxqA8Rfv04" },
      },
      {
        name: "Serialize / Deserialize Tree",
        difficulty: "Hard",
        detail: "Convert tree to string and back. Preorder + null markers approach.",
        video: { name: "NeetCode \u2014 Serialize and Deserialize Binary Tree", url: "https://www.youtube.com/watch?v=u4JAi2JJhI8" },
      },
      {
        name: "Heaps / Priority Queues",
        difficulty: "Medium",
        detail: "Python heapq module. Top-K problems, merge K lists, median of stream.",
        video: { name: "NeetCode \u2014 Top K Frequent Elements (heaps explained)", url: "https://www.youtube.com/watch?v=YPTqKIgVk-k" },
      },
      {
        name: "Tries (Prefix Trees)",
        difficulty: "Medium",
        detail: "Insert, search, startsWith. Autocomplete, word search II.",
        video: { name: "NeetCode \u2014 Implement Trie", url: "https://www.youtube.com/watch?v=oobqoCJlHA0" },
      },
    ],
    resources: [
      { name: "NeetCode \u2014 Trees playlist (complete)", url: "https://www.youtube.com/playlist?list=PLot-Xpze53ldg4pN6PfzoJY7KsKcxF1jg" },
      { name: "Striver \u2014 Binary Tree series", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk" },
    ],
  },
  {
    id: 9,
    title: "Graphs",
    weeks: "Week 14\u201317",
    icon: "\uD83D\uDD78\uFE0F",
    difficulty: "Medium\u2013Hard",
    diffColor: "#FF9800",
    accent: "#4E342E",
    overview:
      "Graphs model real-world connections. BFS/DFS are the foundation \u2014 everything else (shortest path, topological sort, MST) builds on them.",
    topics: [
      {
        name: "Graph Representations",
        difficulty: "Easy",
        detail: "Adjacency list (defaultdict(list) in Python), adjacency matrix, edge list.",
        video: { name: "William Fiset \u2014 Graph Theory Introduction", url: "https://www.youtube.com/watch?v=DgXR2OWQnLc&list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93" },
      },
      {
        name: "BFS (Breadth-First Search)",
        difficulty: "Medium",
        detail: "Level-by-level exploration using deque. Shortest path in unweighted graphs. Grid traversal.",
        video: { name: "NeetCode \u2014 Number of Islands (BFS/DFS grid)", url: "https://www.youtube.com/watch?v=pV2kpPD66nE" },
      },
      {
        name: "DFS (Depth-First Search)",
        difficulty: "Medium",
        detail: "Recursive/iterative. Connected components, cycle detection, path finding.",
        video: { name: "NeetCode \u2014 Clone Graph (DFS explained)", url: "https://www.youtube.com/watch?v=mHz-mx-8lJ8" },
      },
      {
        name: "Topological Sort",
        difficulty: "Medium",
        detail: "DAGs only. Kahn\u2019s algo (BFS + indegree) and DFS-based. Course Schedule.",
        video: { name: "NeetCode \u2014 Course Schedule (topological sort)", url: "https://www.youtube.com/watch?v=EgI5nU9etnU" },
      },
      {
        name: "Dijkstra\u2019s Algorithm",
        difficulty: "Medium\u2013Hard",
        detail: "Shortest path with non-negative weights. heapq in Python. Cheapest Flights.",
        video: { name: "NeetCode \u2014 Dijkstra\u2019s (with Python heapq)", url: "https://www.youtube.com/watch?v=EaphyqKU4PQ" },
      },
      {
        name: "Union-Find (Disjoint Set)",
        difficulty: "Medium",
        detail: "Path compression + union by rank. Cycle detection, connected components.",
        video: { name: "NeetCode \u2014 Union Find (clear explanation)", url: "https://www.youtube.com/watch?v=8f1XPm4WOUc" },
      },
      {
        name: "Bellman-Ford & MST",
        difficulty: "Hard",
        detail: "Bellman-Ford handles negative weights. Kruskal\u2019s (sort + DSU), Prim\u2019s (heap).",
        video: { name: "William Fiset \u2014 Bellman-Ford & Shortest Paths", url: "https://www.youtube.com/watch?v=lyw4FaxrwHg" },
      },
    ],
    resources: [
      { name: "NeetCode \u2014 Graphs playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53ldBT_7QA8NVot219jFNr_GI" },
      { name: "William Fiset \u2014 Graph Theory (complete)", url: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93" },
    ],
  },
  {
    id: 10,
    title: "Dynamic Programming",
    weeks: "Week 17\u201322",
    icon: "\uD83E\uDDE9",
    difficulty: "Hard",
    diffColor: "#F44336",
    accent: "#C62828",
    overview:
      "DP = optimized recursion. Always start with brute-force recursion, add memoization, then convert to tabulation. Master PATTERNS, not individual problems.",
    topics: [
      {
        name: "1D DP \u2014 Fibonacci / Climbing Stairs",
        difficulty: "Easy\u2013Medium",
        detail: "The simplest DP pattern. Recursion \u2192 memo \u2192 tabulation \u2192 space-optimized.",
        video: { name: "NeetCode \u2014 Climbing Stairs (DP intuition)", url: "https://www.youtube.com/watch?v=Y0lT9Fck7qI" },
      },
      {
        name: "1D DP \u2014 House Robber / Coin Change",
        difficulty: "Medium",
        detail: "Take/skip pattern (House Robber). Unbounded knapsack (Coin Change).",
        video: { name: "NeetCode \u2014 House Robber + Coin Change", url: "https://www.youtube.com/watch?v=73r3KWiEvyk" },
      },
      {
        name: "1D DP \u2014 Longest Increasing Subsequence",
        difficulty: "Medium",
        detail: "O(n\u00B2) DP and O(n log n) with binary search. Patience sorting.",
        video: { name: "NeetCode \u2014 LIS", url: "https://www.youtube.com/watch?v=cjWnW0hdF1Y" },
      },
      {
        name: "2D DP \u2014 Grid Paths",
        difficulty: "Medium",
        detail: "Unique Paths, Minimum Path Sum. Grid as 2D table.",
        video: { name: "NeetCode \u2014 Unique Paths", url: "https://www.youtube.com/watch?v=IlEsdxuD4lY" },
      },
      {
        name: "2D DP \u2014 LCS & Edit Distance",
        difficulty: "Medium\u2013Hard",
        detail: "Longest Common Subsequence, Edit Distance. Two-string DP pattern.",
        video: { name: "NeetCode \u2014 Edit Distance (classic 2D DP)", url: "https://www.youtube.com/watch?v=XYi2-LPrwm4" },
      },
      {
        name: "0/1 Knapsack & Partition",
        difficulty: "Medium\u2013Hard",
        detail: "Subset Sum, Partition Equal Subset Sum, Target Sum. Include/exclude pattern.",
        video: { name: "Aditya Verma \u2014 0/1 Knapsack (legendary series)", url: "https://www.youtube.com/watch?v=nLmhmB6NzcM" },
      },
      {
        name: "Interval DP & Advanced",
        difficulty: "Hard",
        detail: "Palindrome Partitioning, Matrix Chain, DP on Trees, Bitmask DP.",
        video: { name: "Aditya Verma \u2014 MCM / Partition DP", url: "https://www.youtube.com/watch?v=9uomlR0hMGw" },
      },
    ],
    resources: [
      { name: "Aditya Verma \u2014 DP playlist (THE best for DP)", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go" },
      { name: "NeetCode \u2014 DP playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53lcvx_yhUmzOJN13PdEq9ax0" },
      { name: "AtCoder DP Contest (26 classic problems)", url: "https://atcoder.jp/contests/dp" },
    ],
  },
  {
    id: 11,
    title: "Greedy & Intervals",
    weeks: "Week 22\u201323",
    icon: "\uD83C\uDFAF",
    difficulty: "Medium",
    diffColor: "#FFC107",
    accent: "#00695C",
    overview:
      "Greedy = make the locally optimal choice at each step. Interval problems (merge, schedule, overlap) are a separate must-know category.",
    topics: [
      {
        name: "Greedy Basics",
        difficulty: "Medium",
        detail: "Activity selection, jump game, gas station. Proving greedy works.",
        video: { name: "NeetCode \u2014 Jump Game", url: "https://www.youtube.com/watch?v=Yan0cv2cLy8" },
      },
      {
        name: "Interval Problems",
        difficulty: "Medium",
        detail: "Merge Intervals, Non-Overlapping Intervals, Meeting Rooms.",
        video: { name: "NeetCode \u2014 Merge Intervals", url: "https://www.youtube.com/watch?v=44H3cEC2fFM" },
      },
    ],
    resources: [
      { name: "NeetCode \u2014 Greedy playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53lf5C3HSjCnyFghlB51nKkHt" },
    ],
  },
  {
    id: 12,
    title: "Bit Manipulation",
    weeks: "Week 23\u201324",
    icon: "\uD83D\uDCA1",
    difficulty: "Medium",
    diffColor: "#FFC107",
    accent: "#37474F",
    overview:
      "XOR tricks, counting bits, and bitmask subsets. Not heavily tested but appears in ~5% of interviews and can give O(1) solutions.",
    topics: [
      {
        name: "Bit Basics & XOR Tricks",
        difficulty: "Easy\u2013Medium",
        detail: "AND, OR, XOR, shifts. Single Number (XOR), Power of Two.",
        video: { name: "NeetCode \u2014 Single Number + Bit Manipulation", url: "https://www.youtube.com/watch?v=qMPX1AOa83k" },
      },
      {
        name: "Counting Bits & Advanced",
        difficulty: "Medium",
        detail: "Count set bits, reverse bits, bitmask subsets for DP.",
        video: { name: "NeetCode \u2014 Counting Bits", url: "https://www.youtube.com/watch?v=RyBM56RIWrM" },
      },
    ],
    resources: [
      { name: "NeetCode \u2014 Bit Manipulation playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53rlOo5Kd5gvTtDPLBklZohi7" },
    ],
  },
  {
    id: 13,
    title: "Interview Prep & Mastery",
    weeks: "Week 24+",
    icon: "\uD83C\uDFC6",
    difficulty: "All Levels",
    diffColor: "#9C27B0",
    accent: "#F57F17",
    overview:
      "Shift from learning to performing. Solve curated lists under timed conditions. Do mock interviews. Communicate your thought process.",
    topics: [
      {
        name: "Blind 75 (timed)",
        difficulty: "Mixed",
        detail: "The essential 75 problems. Solve each in <30 min. Track patterns.",
        video: { name: "NeetCode \u2014 Blind 75 full playlist (all solutions in Python)", url: "https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf" },
      },
      {
        name: "NeetCode 150",
        difficulty: "Mixed",
        detail: "Extended version of Blind 75 with better topic coverage.",
        video: { name: "NeetCode \u2014 NeetCode 150 roadmap walkthrough", url: "https://www.youtube.com/watch?v=8wysIxzqgPI" },
      },
      {
        name: "Mock Interviews",
        difficulty: "Hard",
        detail: "Simulate real conditions. Talk out loud. Get feedback.",
        video: { name: "Cl\u00E9ment Mihailescu \u2014 Google Mock Interview", url: "https://www.youtube.com/watch?v=10WnvU-fQQ8" },
      },
    ],
    resources: [
      { name: "NeetCode.io \u2014 Roadmap + Practice", url: "https://neetcode.io/roadmap" },
      { name: "Blind 75 list", url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" },
      { name: "Pramp \u2014 Free Mock Interviews", url: "https://www.pramp.com" },
      { name: "LeetCode Patterns \u2014 Sean Prashad", url: "https://seanprashad.com/leetcode-patterns" },
    ],
  },
];

const topPlatforms = [
  {
    name: "LeetCode",
    url: "https://leetcode.com",
    desc: "The gold standard for interview prep. Best problem categorization.",
    tag: "Interview Prep",
  },
  {
    name: "NeetCode",
    url: "https://neetcode.io",
    desc: "Curated roadmap + video explanations for every problem. ALL solutions in Python.",
    tag: "Best for Python",
  },
  {
    name: "Striver's A2Z Sheet",
    url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
    desc: "450+ problems organized topic-wise with video solutions.",
    tag: "Comprehensive",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com",
    desc: "Competitive programming contests. Great for sharpening speed.",
    tag: "Competitive",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com",
    desc: "Beginner-friendly with structured tracks and certifications.",
    tag: "Beginner",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org",
    desc: "Massive article database explaining every DSA concept.",
    tag: "Reference",
  },
];

const diffBadgeColor = (diff) => {
  if (diff.startsWith("Easy") && !diff.includes("Medium")) return "#4CAF50";
  if (diff.startsWith("Easy")) return "#8BC34A";
  if (diff === "Medium") return "#FFC107";
  if (diff.includes("Hard") && diff.includes("Medium")) return "#FF9800";
  if (diff.startsWith("Hard")) return "#F44336";
  if (diff === "Mixed" || diff === "All Levels") return "#9C27B0";
  return "#FFC107";
};

export default function DSARoadmap() {
  const [activeStage, setActiveStage] = useState(0);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [tab, setTab] = useState("roadmap");

  const stage = stages[activeStage];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0D0D0D",
        color: "#E8E8E8",
        fontFamily: "'IBM Plex Mono', 'Fira Code', monospace",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #0D0D0D 50%, #16213e 100%)",
          borderBottom: "1px solid #222",
          padding: "32px 24px 24px",
        }}
      >
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 28 }}>{"\uD83D\uDC0D"}</span>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                margin: 0,
                background: "linear-gradient(90deg, #FFD43B, #76FF03)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DSA Mastery Roadmap — Python
            </h1>
          </div>
          <p style={{ color: "#777", fontSize: 13, margin: 0, letterSpacing: 1 }}>
            ZERO {"\u2192"} INTERVIEW READY {"\u2014"} RANKED EASY TO HARD {"\u2014"} BEST YOUTUBE LINKS FOR EVERY TOPIC
          </p>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginTop: 20 }}>
            {["roadmap", "platforms"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: "8px 20px",
                  background: tab === t ? "#1E1E2E" : "transparent",
                  border: tab === t ? "1px solid #333" : "1px solid transparent",
                  borderBottom: tab === t ? "1px solid #1E1E2E" : "1px solid #333",
                  borderRadius: "8px 8px 0 0",
                  color: tab === t ? "#FFD43B" : "#666",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'IBM Plex Mono', monospace",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {t === "roadmap" ? "Roadmap" : "Platforms & Resources"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 24px 48px" }}>
        {tab === "roadmap" ? (
          <div style={{ display: "flex", gap: 0, marginTop: 0 }}>
            {/* Sidebar */}
            <div
              style={{
                width: 280,
                minWidth: 280,
                borderRight: "1px solid #1a1a1a",
                background: "#111",
                paddingTop: 12,
              }}
            >
              {stages.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveStage(i);
                    setExpandedTopic(null);
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 14px",
                    background: activeStage === i ? "#1a1a2e" : "transparent",
                    border: "none",
                    borderLeft: activeStage === i ? `3px solid ${s.accent}` : "3px solid transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                  }}
                >
                  <span style={{ fontSize: 16 }}>{s.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        color: activeStage === i ? "#fff" : "#888",
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {s.title}
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 2 }}>
                      <span
                        style={{
                          color: activeStage === i ? s.accent : "#444",
                          fontSize: 9,
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        {s.weeks}
                      </span>
                      <span
                        style={{
                          padding: "1px 6px",
                          borderRadius: 3,
                          background: s.diffColor + "22",
                          color: s.diffColor,
                          fontSize: 8,
                          fontWeight: 700,
                          fontFamily: "'IBM Plex Mono', monospace",
                          textTransform: "uppercase",
                        }}
                      >
                        {s.difficulty}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "24px 28px" }}>
              {/* Stage Header */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 32 }}>{stage.icon}</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <h2
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 22,
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                        }}
                      >
                        {stage.title}
                      </h2>
                      <span
                        style={{
                          padding: "3px 10px",
                          borderRadius: 4,
                          background: stage.diffColor + "22",
                          color: stage.diffColor,
                          fontSize: 11,
                          fontWeight: 700,
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        {stage.difficulty}
                      </span>
                    </div>
                    <span
                      style={{
                        color: stage.accent,
                        fontSize: 12,
                        fontWeight: 600,
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {stage.weeks}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    color: "#aaa",
                    fontSize: 13,
                    lineHeight: 1.7,
                    margin: "12px 0 0",
                    borderLeft: `2px solid ${stage.accent}33`,
                    paddingLeft: 14,
                  }}
                >
                  {stage.overview}
                </p>
              </div>

              {/* Topics */}
              <div style={{ marginBottom: 28 }}>
                <h3
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "#555",
                    marginBottom: 12,
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  Topics (ranked by difficulty)
                </h3>
                {stage.topics.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => setExpandedTopic(expandedTopic === i ? null : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "12px 14px",
                      marginBottom: 4,
                      background: expandedTopic === i ? "#1a1a2e" : "#141414",
                      border: expandedTopic === i ? `1px solid ${stage.accent}44` : "1px solid #1a1a1a",
                      borderRadius: 6,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          color: expandedTopic === i ? "#fff" : "#ccc",
                          fontSize: 13,
                          fontWeight: 500,
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        <span style={{ color: stage.accent, marginRight: 8, fontSize: 11 }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {topic.name}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span
                          style={{
                            padding: "2px 8px",
                            borderRadius: 3,
                            background: diffBadgeColor(topic.difficulty) + "22",
                            color: diffBadgeColor(topic.difficulty),
                            fontSize: 9,
                            fontWeight: 700,
                            fontFamily: "'IBM Plex Mono', monospace",
                          }}
                        >
                          {topic.difficulty}
                        </span>
                        <span style={{ color: "#444", fontSize: 14, transform: expandedTopic === i ? "rotate(90deg)" : "none", transition: "transform 0.15s" }}>
                          {"\u25B8"}
                        </span>
                      </div>
                    </div>
                    {expandedTopic === i && (
                      <div style={{ margin: "12px 0 4px 26px" }}>
                        <p
                          style={{
                            color: "#888",
                            fontSize: 12,
                            lineHeight: 1.7,
                            margin: "0 0 10px",
                            fontFamily: "'IBM Plex Mono', monospace",
                          }}
                        >
                          {topic.detail}
                        </p>
                        <a
                          href={topic.video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "8px 14px",
                            background: "#1a0a0a",
                            border: "1px solid #FF000033",
                            borderRadius: 6,
                            color: "#FF4444",
                            fontSize: 12,
                            textDecoration: "none",
                            fontFamily: "'IBM Plex Mono', monospace",
                            transition: "all 0.15s",
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{"\u25B6"}</span>
                          {topic.video.name}
                        </a>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Resources */}
              <div style={{ marginBottom: 28 }}>
                <h3
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "#555",
                    marginBottom: 12,
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  Best Resources
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {stage.resources.map((r, i) => (
                    <a
                      key={i}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "8px 14px",
                        background: "#161622",
                        border: "1px solid #252540",
                        borderRadius: 6,
                        color: "#76FF03",
                        fontSize: 12,
                        textDecoration: "none",
                        fontFamily: "'IBM Plex Mono', monospace",
                        transition: "border-color 0.15s",
                      }}
                    >
                      <span style={{ fontSize: 10 }}>{"\u2197"}</span>
                      {r.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28 }}>
                <button
                  onClick={() => { setActiveStage(Math.max(0, activeStage - 1)); setExpandedTopic(null); }}
                  disabled={activeStage === 0}
                  style={{
                    padding: "8px 16px",
                    background: "transparent",
                    border: "1px solid #222",
                    borderRadius: 6,
                    color: activeStage === 0 ? "#333" : "#888",
                    fontSize: 12,
                    cursor: activeStage === 0 ? "default" : "pointer",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {"\u2190"} Previous
                </button>
                <span style={{ color: "#333", fontSize: 12, fontFamily: "'IBM Plex Mono', monospace", alignSelf: "center" }}>
                  {activeStage + 1} / {stages.length}
                </span>
                <button
                  onClick={() => { setActiveStage(Math.min(stages.length - 1, activeStage + 1)); setExpandedTopic(null); }}
                  disabled={activeStage === stages.length - 1}
                  style={{
                    padding: "8px 16px",
                    background: activeStage === stages.length - 1 ? "transparent" : stage.accent + "22",
                    border: `1px solid ${activeStage === stages.length - 1 ? "#222" : stage.accent + "44"}`,
                    borderRadius: 6,
                    color: activeStage === stages.length - 1 ? "#333" : stage.accent,
                    fontSize: 12,
                    cursor: activeStage === stages.length - 1 ? "default" : "pointer",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  Next Stage {"\u2192"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Platforms Tab */
          <div style={{ padding: "28px 0" }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 4,
              }}
            >
              Top Platforms & Outlets
            </h2>
            <p style={{ color: "#666", fontSize: 13, marginBottom: 24, fontFamily: "'IBM Plex Mono', monospace" }}>
              Where to practice, learn, and compete. NeetCode is the best for Python learners.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {topPlatforms.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: 20,
                    background: "#111",
                    border: "1px solid #1a1a1a",
                    borderRadius: 8,
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span
                      style={{
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: 600,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {p.name}
                    </span>
                    <span
                      style={{
                        padding: "3px 8px",
                        background: "#1a1a2e",
                        borderRadius: 4,
                        color: "#76FF03",
                        fontSize: 10,
                        fontWeight: 600,
                        fontFamily: "'IBM Plex Mono', monospace",
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <p style={{ color: "#777", fontSize: 12, lineHeight: 1.6, margin: 0, fontFamily: "'IBM Plex Mono', monospace" }}>
                    {p.desc}
                  </p>
                </a>
              ))}
            </div>

            {/* YouTube Channels */}
            <h3
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "#555",
                marginTop: 32,
                marginBottom: 14,
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              Top YouTube Channels for Python DSA
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { name: "NeetCode", focus: "All solutions in Python. Best for interviews.", star: true },
                { name: "Striver (takeUforward)", focus: "A2Z DSA course. C++/Java but concepts transfer." },
                { name: "Aditya Verma", focus: "DP & Binary Search king. Hindi. Pattern-based." },
                { name: "Abdul Bari", focus: "Algorithm theory. Best Big O explanations." },
                { name: "William Fiset", focus: "Graph theory & advanced DS. Very thorough." },
                { name: "Corey Schafer", focus: "Python language mastery. Best Python tutorials." },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 14px",
                    background: c.star ? "#1a1a0a" : "#111",
                    border: c.star ? "1px solid #FFD43B33" : "1px solid #1a1a1a",
                    borderRadius: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "#ddd", fontSize: 13, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {c.name}
                    </span>
                    {c.star && <span style={{ color: "#FFD43B", fontSize: 10 }}>{"\u2B50"} #1 for Python</span>}
                  </div>
                  <div style={{ color: "#555", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", marginTop: 4 }}>
                    {c.focus}
                  </div>
                </div>
              ))}
            </div>

            {/* Books */}
            <h3
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "#555",
                marginTop: 28,
                marginBottom: 14,
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              Essential Books
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { title: "Grokking Algorithms", author: "Aditya Bhargava", level: "Beginner \u2014 visual, Python examples" },
                { title: "Cracking the Coding Interview", author: "Gayle McDowell", level: "Interview \u2014 189 problems, translate to Python" },
                { title: "Elements of Programming Interviews in Python", author: "Aziz, Lee, Prakash", level: "Interview \u2014 Python-specific, 250 problems" },
                { title: "CLRS \u2014 Intro to Algorithms", author: "Cormen et al.", level: "Reference \u2014 deep theory" },
              ].map((b, i) => (
                <div
                  key={i}
                  style={{
                    padding: "14px 16px",
                    background: "#111",
                    border: "1px solid #1a1a1a",
                    borderRadius: 6,
                  }}
                >
                  <div style={{ color: "#ddd", fontSize: 13, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>
                    {b.title}
                  </div>
                  <div style={{ color: "#666", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", marginTop: 4 }}>
                    {b.author}
                  </div>
                  <div style={{ color: "#76FF03", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", marginTop: 6, opacity: 0.7 }}>
                    {b.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
