import { CheatSheet, ChartConfig } from '../../types';

export const algorithmsCheatSheets: CheatSheet[] = [
  {
    id: 'algo-1',
    category: 'Algorithms',
    subCategory: 'text',
    title: 'Big O Notation (Time Complexity)',
    type: 'code',
    snippet: `- **O(1) - Constant:** Accessing an array element.
- **O(log n) - Logarithmic:** Binary search.
- **O(n) - Linear:** Looping through an array.
- **O(n log n) - Log-Linear:** Efficient sorting algorithms (e.g., Merge Sort).
- **O(n^2) - Quadratic:** Nested loops (e.g., Bubble Sort).
- **O(2^n) - Exponential:** Recursive Fibonacci calculation.`,
    description: 'Big O notation is used to describe the performance or complexity of an algorithm. It specifically describes the worst-case scenario, focusing on how the execution time scales with the input size.',
    tags: ['algorithms', 'big o', 'complexity', 'performance', 'data structures'],
  },
  {
    id: 'algo-2',
    category: 'Algorithms',
    subCategory: 'javascript',
    title: 'Binary Search',
    type: 'code',
    snippet: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Not found
}`,
    description: 'An efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you have narrowed down the possible locations to just one.\n\n**Time Complexity:** O(log n).\n**Space Complexity:** O(1) for iterative, O(log n) for recursive.',
    tags: ['algorithms', 'search', 'binary search', 'log n'],
  },
  {
    id: 'algo-binary-search-diagram',
    category: 'Algorithms',
    subCategory: 'svg',
    title: 'Binary Search Visualization',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .box { fill: #334155; stroke: #475569; }
        .text { fill: #e2e8f0; font-size: 14px; text-anchor: middle; }
        .label { fill: #94a3b8; font-size: 12px; text-anchor: middle; }
        .pointer { fill: #f59e0b; }
        .highlight { fill: #10b981; }
        .discard { fill: #1e293b; stroke: #334155; opacity: 0.6; }
      </style>
      
      <!-- Initial Array -->
      <text x="250" y="30" class="label">Step 1: Target = 7, Array = [1, 2, 3, 4, 5, 6, 7, 8, 9]</text>
      <g id="array1">
        <rect x="50" y="50" width="40" height="40" class="box"/><text x="70" y="75" class="text">1</text>
        <rect x="90" y="50" width="40" height="40" class="box"/><text x="110" y="75" class="text">2</text>
        <rect x="130" y="50" width="40" height="40" class="box"/><text x="150" y="75" class="text">3</text>
        <rect x="170" y="50" width="40" height="40" class="box"/><text x="190" y="75" class="text">4</text>
        <rect x="210" y="50" width="40" height="40" class="box"/><text x="230" y="75" class="text">5</text>
        <rect x="250" y="50" width="40" height="40" class="box"/><text x="270" y="75" class="text">6</text>
        <rect x="290" y="50" width="40" height="40" class="box"/><text x="310" y="75" class="text">7</text>
        <rect x="330" y="50" width="40" height="40" class="box"/><text x="350" y="75" class="text">8</text>
        <rect x="370" y="50" width="40" height="40" class="box"/><text x="390" y="75" class="text">9</text>
      </g>
      <text x="70" y="105" class="label">L</text><polygon points="70,95 65,90 75,90" class="pointer"/>
      <text x="230" y="105" class="label">Mid=5</text><polygon points="230,95 225,90 235,90" class="pointer"/>
      <text x="390" y="105" class="label">R</text><polygon points="390,95 385,90 395,90" class="pointer"/>

      <!-- Step 2 -->
      <text x="250" y="140" class="label">Step 2: 5 < 7, so move Left pointer. L = mid + 1</text>
      <g id="array2">
        <rect x="50" y="160" width="40" height="40" class="discard"/><text x="70" y="185" class="text" opacity="0.6">1</text>
        <rect x="90" y="160" width="40" height="40" class="discard"/><text x="110" y="185" class="text" opacity="0.6">2</text>
        <rect x="130" y="160" width="40" height="40" class="discard"/><text x="150" y="185" class="text" opacity="0.6">3</text>
        <rect x="170" y="160" width="40" height="40" class="discard"/><text x="190" y="185" class="text" opacity="0.6">4</text>
        <rect x="210" y="160" width="40" height="40" class="discard"/><text x="230" y="185" class="text" opacity="0.6">5</text>
        <rect x="250" y="160" width="40" height="40" class="box"/><text x="270" y="185" class="text">6</text>
        <rect x="290" y="160" width="40" height="40" class="box"/><text x="310" y="185" class="text">7</text>
        <rect x="330" y="160" width="40" height="40" class="box"/><text x="350" y="185" class="text">8</text>
        <rect x="370" y="160" width="40" height="40" class="box"/><text x="390" y="185" class="text">9</text>
      </g>
      <text x="270" y="215" class="label">L</text><polygon points="270,205 265,200 275,200" class="pointer"/>
      <text x="310" y="215" class="label">Mid=7</text><polygon points="310,205 305,200 315,200" class="pointer"/>
      <text x="390" y="215" class="label">R</text><polygon points="390,205 385,200 395,200" class="pointer"/>
      <rect x="290" y="160" width="40" height="40" class="highlight" fill-opacity="0.5"/>
      <text x="250" y="235" class="label" fill="#a7f3d0">Step 3: Found target 7!</text>
    </svg>`,
    description: 'A visual walkthrough of the Binary Search algorithm. The search space is repeatedly halved by comparing the target value to the middle element, efficiently zeroing in on the target.',
    tags: ['algorithms', 'binary search', 'diagram', 'visualization', 'svg'],
  },
  {
    id: 'algo-3',
    category: 'Algorithms',
    subCategory: 'javascript',
    title: 'Bubble Sort',
    type: 'code',
    snippet: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
    description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. It is inefficient for large lists.\n\n**Time Complexity:** O(n^2) average and worst case.\n**Space Complexity:** O(1).',
    tags: ['algorithms', 'sort', 'bubble sort', 'n^2'],
  },
  {
    id: 'algo-4',
    category: 'Algorithms',
    subCategory: 'javascript',
    title: 'Recursion (Factorial Example)',
    type: 'code',
    snippet: `function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive step
  return n * factorial(n - 1);
}`,
    description: 'Recursion is a technique where a function calls itself to solve a problem. A recursive function must have a base case to stop the recursion and a recursive step that moves it towards the base case.\n\n**Time Complexity:** O(n).\n**Space Complexity:** O(n) due to call stack depth.',
    tags: ['algorithms', 'recursion', 'factorial', 'base case'],
  },
  {
    id: 'algo-5',
    category: 'Algorithms',
    subCategory: 'javascript',
    title: 'Two Pointers Technique',
    type: 'code',
    snippet: `function hasSum(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;
  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === target) {
      return true;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}`,
    description: 'A common pattern where two pointers iterate through a data structure, often from opposite ends, until they meet. It is very efficient for problems involving sorted arrays.\n\n**Time Complexity:** O(n).\n**Space Complexity:** O(1).',
    tags: ['algorithms', 'two pointers', 'array', 'search'],
  },
  {
    id: 'algo-6',
    category: 'Algorithms',
    subCategory: 'javascript',
    title: 'Sliding Window Technique',
    type: 'code',
    snippet: `function findMaxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}`,
    description: 'This pattern involves creating a "window" over a portion of data (like an array) and moving that window to solve a problem, typically to find the longest, shortest, or optimal sequence that satisfies a given condition.\n\n**Time Complexity:** O(n).\n**Space Complexity:** O(1) for this example.',
    tags: ['algorithms', 'sliding window', 'array', 'subarray', 'optimization'],
  },
  {
    id: 'algo-py-1',
    category: 'Algorithms',
    subCategory: 'python',
    title: 'Binary Search (Python)',
    type: 'code',
    snippet: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
    description: 'An efficient algorithm for finding an item from a sorted list. It repeatedly divides the search interval in half.\n\n**Time Complexity:** O(log n).\n**Space Complexity:** O(1).',
    tags: ['algorithms', 'python', 'search', 'binary search', 'log n'],
  },
  {
    id: 'algo-py-2',
    category: 'Algorithms',
    subCategory: 'python',
    title: 'Bubble Sort (Python)',
    type: 'code',
    snippet: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
    description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.\n\n**Time Complexity:** O(n^2) average and worst case.\n**Space Complexity:** O(1).',
    tags: ['algorithms', 'python', 'sort', 'bubble sort', 'n^2'],
  },
  {
    id: 'algo-py-3',
    category: 'Algorithms',
    subCategory: 'python',
    title: 'Recursion - Factorial (Python)',
    type: 'code',
    snippet: `def factorial(n):
    # Base case
    if n == 0 or n == 1:
        return 1
    # Recursive step
    return n * factorial(n - 1)`,
    description: 'Recursion is a technique where a function calls itself. A recursive function must have a base case to stop the recursion and a recursive step that moves towards the base case.\n\n**Time Complexity:** O(n).\n**Space Complexity:** O(n) due to call stack depth.',
    tags: ['algorithms', 'python', 'recursion', 'factorial', 'base case'],
  },
  {
    id: 'algo-py-4',
    category: 'Algorithms',
    subCategory: 'python',
    title: 'Two Pointers Technique (Python)',
    type: 'code',
    snippet: `def has_sum(sorted_arr, target):
    left, right = 0, len(sorted_arr) - 1
    while left < right:
        current_sum = sorted_arr[left] + sorted_arr[right]
        if current_sum == target:
            return True
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return False`,
    description: 'A common pattern where two pointers iterate through a data structure, often from opposite ends, until they meet. It is very efficient for problems involving sorted arrays.\n\n**Time Complexity:** O(n).\n**Space Complexity:** O(1).',
    tags: ['algorithms', 'python', 'two pointers', 'array', 'search'],
  },
  {
    id: 'algo-py-5',
    category: 'Algorithms',
    subCategory: 'python',
    title: 'Sliding Window Technique (Python)',
    type: 'code',
    snippet: `def find_max_sum_subarray(arr, k):
    max_sum = 0
    window_sum = 0
    window_start = 0
    for window_end in range(len(arr)):
        window_sum += arr[window_end]
        if window_end >= k - 1:
            max_sum = max(max_sum, window_sum)
            window_sum -= arr[window_start]
            window_start += 1
    return max_sum`,
    description: 'This pattern involves creating a "window" over a portion of data (like an array) and moving that window to solve a problem, typically to find the longest, shortest, or optimal sequence that satisfies a given condition.\n\n**Time Complexity:** O(n).\n**Space Complexity:** O(1) for this example.',
    tags: ['algorithms', 'python', 'sliding window', 'array', 'subarray', 'optimization'],
  },
  {
    id: 'algo-complexity-table',
    category: 'Algorithms',
    subCategory: 'svg',
    title: 'Data Structure Complexity Comparison',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 340" style="font-family: 'Inter', sans-serif; font-size: 13px; background-color: #1e293b; border-radius: 8px;">
    <style>
        .header { fill: #334155; font-weight: bold; }
        .header-text { fill: #cbd5e1; }
        .cell-even { fill: #1e293b; }
        .cell-odd { fill: #28364a; }
        .cell-text { fill: #94a3b8; font-family: 'Fira Code', monospace; }
        .struct-text { fill: #e2e8f0; font-weight: 500; }
        .footnote-text { fill: #64748b; font-size: 11px; }
    </style>
    <rect x="10" y="10" width="540" height="40" class="header" />
    <text x="85" y="35" text-anchor="middle" class="header-text">Data Structure</text>
    <text x="195" y="35" text-anchor="middle" class="header-text">Access</text>
    <text x="270" y="35" text-anchor="middle" class="header-text">Search</text>
    <text x="345" y="35" text-anchor="middle" class="header-text">Insertion</text>
    <text x="420" y="35" text-anchor="middle" class="header-text">Deletion</text>
    <text x="500" y="35" text-anchor="middle" class="header-text">Space</text>
    
    <rect x="10" y="50" width="540" height="30" class="cell-odd" /><text x="20" y="70" class="struct-text">Array</text><text x="195" y="70" text-anchor="middle" class="cell-text">O(1)</text><text x="270" y="70" text-anchor="middle" class="cell-text">O(n)</text><text x="345" y="70" text-anchor="middle" class="cell-text">O(n)</text><text x="420" y="70" text-anchor="middle" class="cell-text">O(n)</text><text x="500" y="70" text-anchor="middle" class="cell-text">O(n)</text>
    <rect x="10" y="80" width="540" height="30" class="cell-even" /><text x="20" y="100" class="struct-text">Stack (Array)</text><text x="195" y="100" text-anchor="middle" class="cell-text">O(n)</text><text x="270" y="100" text-anchor="middle" class="cell-text">O(n)</text><text x="345" y="100" text-anchor="middle" class="cell-text">O(1)*</text><text x="420" y="100" text-anchor="middle" class="cell-text">O(1)*</text><text x="500" y="100" text-anchor="middle" class="cell-text">O(n)</text>
    <rect x="10" y="110" width="540" height="30" class="cell-odd" /><text x="20" y="130" class="struct-text">Queue (deque)</text><text x="195" y="130" text-anchor="middle" class="cell-text">O(n)</text><text x="270" y="130" text-anchor="middle" class="cell-text">O(n)</text><text x="345" y="130" text-anchor="middle" class="cell-text">O(1)</text><text x="420" y="130" text-anchor="middle" class="cell-text">O(1)</text><text x="500" y="130" text-anchor="middle" class="cell-text">O(n)</text>
    <rect x="10" y="140" width="540" height="30" class="cell-even" /><text x="20" y="160" class="struct-text">Singly Linked List</text><text x="195" y="160" text-anchor="middle" class="cell-text">O(n)</text><text x="270" y="160" text-anchor="middle" class="cell-text">O(n)</text><text x="345" y="160" text-anchor="middle" class="cell-text">O(1)**</text><text x="420" y="160" text-anchor="middle" class="cell-text">O(1)**</text><text x="500" y="160" text-anchor="middle" class="cell-text">O(n)</text>
    <rect x="10" y="170" width="540" height="30" class="cell-odd" /><text x="20" y="190" class="struct-text">Hash Table</text><text x="195" y="190" text-anchor="middle" class="cell-text">N/A</text><text x="270" y="190" text-anchor="middle" class="cell-text">O(1) avg</text><text x="345" y="190" text-anchor="middle" class="cell-text">O(1) avg</text><text x="420" y="190" text-anchor="middle" class="cell-text">O(1) avg</text><text x="500" y="190" text-anchor="middle" class="cell-text">O(n)</text>
    <rect x="10" y="200" width="540" height="30" class="cell-even" /><text x="20" y="220" class="struct-text">Binary Search Tree</text><text x="195" y="220" text-anchor="middle" class="cell-text">O(log n) avg</text><text x="270" y="220" text-anchor="middle" class="cell-text">O(log n) avg</text><text x="345" y="220" text-anchor="middle" class="cell-text">O(log n) avg</text><text x="420" y="220" text-anchor="middle" class="cell-text">O(log n) avg</text><text x="500" y="220" text-anchor="middle" class="cell-text">O(n)</text>
    <rect x="10" y="230" width="540" height="30" class="cell-odd" /><text x="20" y="250" class="struct-text">Balanced BST</text><text x="195" y="250" text-anchor="middle" class="cell-text">O(log n)</text><text x="270" y="250" text-anchor="middle" class="cell-text">O(log n)</text><text x="345" y="250" text-anchor="middle" class="cell-text">O(log n)</text><text x="420" y="250" text-anchor="middle" class="cell-text">O(log n)</text><text x="500" y="250" text-anchor="middle" class="cell-text">O(n)</text>

    <text x="15" y="280" class="footnote-text">* Amortized time for array-based Stack.</text>
    <text x="15" y="295" class="footnote-text">** For Linked List, Insertion/Deletion is at the head.</text>
    <text x="15" y="310" class="footnote-text">Worst case for Hash Table and unbalanced BST is O(n).</text>
</svg>`,
    description: 'A comparative SVG chart of the average case time and space complexities for common data structures. Note that these can vary based on implementation details and specific scenarios (e.g., worst-case vs. average-case).',
    tags: ['algorithms', 'data structures', 'complexity', 'big o', 'comparison', 'cheatsheet', 'svg'],
  },
  {
    id: 'algo-complexity-chart',
    category: 'Algorithms',
    subCategory: 'svg',
    title: 'Big O Time Complexity Growth',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 300" style="font-family: 'Inter', sans-serif; font-size: 12px; background-color: #1e293b; border-radius: 8px;">
    <style>
        .axis-label { font-size: 13px; fill: #94a3b8; }
        .tick-label { font-size: 11px; fill: #64748b; }
        .grid-line { stroke: #334155; stroke-dasharray: 2,2; }
        .line { fill: none; stroke-width: 2.5; }
        .legend-text { fill: #cbd5e1; }
    </style>
    <g transform="translate(50, 20)">
        <line x1="0" y1="0" x2="0" y2="240" stroke="#64748b" /><text x="-150" y="-10" class="axis-label" text-anchor="middle" transform="rotate(-90)">Operations</text>
        <g class="tick-label" text-anchor="end">
            <text x="-5" y="245">0</text><line x1="0" y1="240" x2="380" y2="240" class="grid-line" />
            <text x="-5" y="185">100</text><line x1="0" y1="180" x2="380" y2="180" class="grid-line" />
            <text x="-5" y="125">200</text><line x1="0" y1="120" x2="380" y2="120" class="grid-line" />
            <text x="-5" y="65">300</text><line x1="0" y1="60" x2="380" y2="60" class="grid-line" />
            <text x="-5" y="5">400+</text><line x1="0" y1="0" x2="380" y2="0" class="grid-line" />
        </g>
        <line x1="0" y1="240" x2="380" y2="240" stroke="#64748b" /><text x="190" y="275" class="axis-label" text-anchor="middle">Input Size (n)</text>
        <g class="tick-label" text-anchor="middle">
            <text x="0" y="255">1</text><text x="140.48" y="255">16</text><text x="237.00" y="255">32</text><text x="380"  y="255">64</text>
        </g>
    </g>
    <path class="line" stroke="#8884d8" d="M50.00,239.40 L56.03,239.40 L68.10,239.40 L92.22,239.40 L140.48,239.40 L237.00,239.40 L430.00,239.40"/>
    <path class="line" stroke="#82ca9d" d="M50.00,240.00 L56.03,239.40 L68.10,238.80 L92.22,238.20 L140.48,237.60 L237.00,237.00 L430.00,236.40"/>
    <path class="line" stroke="#ffc658" d="M50.00,239.40 L56.03,238.80 L68.10,237.60 L92.22,235.20 L140.48,225.60 L237.00,211.20 L430.00,182.40"/>
    <path class="line" stroke="#ff8042" d="M50.00,240.00 L56.03,238.80 L68.10,235.20 L92.22,225.60 L140.48,182.40 L237.00,96.00 L430.00,9.60"/>
    <path class="line" stroke="#ca2c2c" d="M50.00,239.40 L56.03,237.60 L68.10,225.60 L92.22,182.40 L140.48,86.40 L237.00,0.00 L430.00,0.00"/>
    <g transform="translate(440, 80)">
        <rect x="0" y="0" width="10" height="10" fill="#8884d8" /><text x="15" y="9" class="legend-text">O(1)</text>
        <rect x="0" y="20" width="10" height="10" fill="#82ca9d" /><text x="15" y="29" class="legend-text">O(log n)</text>
        <rect x="0" y="40" width="10" height="10" fill="#ffc658" /><text x="15" y="49" class="legend-text">O(n)</text>
        <rect x="0" y="60" width="10" height="10" fill="#ff8042" /><text x="15" y="69" class="legend-text">O(n log n)</text>
        <rect x="0" y="80" width="10" height="10" fill="#ca2c2c" /><text x="15" y="89" class="legend-text">O(n^2)</text>
    </g>
</svg>`,
    description: 'An SVG line chart visualizing the growth rate of common time complexities as the input size (n) increases. This demonstrates how algorithm choices become critical for performance on large datasets. Note that the Y-axis is capped to better show the distinction between lower-complexity functions.',
    tags: ['algorithms', 'complexity', 'big o', 'chart', 'visualization', 'performance', 'svg'],
  }
];