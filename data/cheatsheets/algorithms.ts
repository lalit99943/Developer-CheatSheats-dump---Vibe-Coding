import { CheatSheet } from '../../types';

export const algorithmsCheatSheets: CheatSheet[] = [
  {
    id: 'algo-1',
    category: 'Algorithms',
    subCategory: 'text',
    title: 'Big O Notation (Time Complexity)',
    snippet: `O(1) - Constant: Accessing an array element.
O(log n) - Logarithmic: Binary search.
O(n) - Linear: Looping through an array.
O(n log n) - Log-Linear: Efficient sorting algorithms (e.g., Merge Sort).
O(n^2) - Quadratic: Nested loops (e.g., Bubble Sort).
O(2^n) - Exponential: Recursive Fibonacci calculation.`,
    description: 'Big O notation is used to describe the performance or complexity of an algorithm. It specifically describes the worst-case scenario, focusing on how the execution time scales with the input size.',
    tags: ['algorithms', 'big o', 'complexity', 'performance', 'data structures'],
  },
  {
    id: 'algo-2',
    category: 'Algorithms',
    subCategory: 'javascript',
    title: 'Binary Search',
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
    description: 'An efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you have narrowed down the possible locations to just one.',
    tags: ['algorithms', 'search', 'binary search', 'log n'],
  },
  {
    id: 'algo-3',
    category: 'Algorithms',
    subCategory: 'javascript',
    title: 'Bubble Sort',
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
    description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. It is inefficient for large lists with a complexity of O(n^2).',
    tags: ['algorithms', 'sort', 'bubble sort', 'n^2'],
  },
  {
    id: 'algo-4',
    category: 'Algorithms',
    subCategory: 'javascript',
    title: 'Recursion (Factorial Example)',
    snippet: `function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive step
  return n * factorial(n - 1);
}`,
    description: 'Recursion is a technique where a function calls itself to solve a problem. A recursive function must have a base case to stop the recursion and a recursive step that moves it towards the base case.',
    tags: ['algorithms', 'recursion', 'factorial', 'base case'],
  },
  {
    id: 'algo-5',
    category: 'Algorithms',
    subCategory: 'javascript',
    title: 'Two Pointers Technique',
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
    description: 'A common pattern where two pointers iterate through a data structure, often from opposite ends, until they meet. It is very efficient for problems involving sorted arrays.',
    tags: ['algorithms', 'two pointers', 'array', 'search'],
  },
  {
    id: 'algo-6',
    category: 'Algorithms',
    subCategory: 'javascript',
    title: 'Sliding Window Technique',
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
    description: 'This pattern involves creating a "window" over a portion of data (like an array) and moving that window to solve a problem, typically to find the longest, shortest, or optimal sequence that satisfies a given condition.',
    tags: ['algorithms', 'sliding window', 'array', 'subarray', 'optimization'],
  },
  {
    id: 'algo-py-1',
    category: 'Algorithms',
    subCategory: 'python',
    title: 'Binary Search (Python)',
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
    description: 'An efficient algorithm for finding an item from a sorted list. It repeatedly divides the search interval in half. Its time complexity is O(log n).',
    tags: ['algorithms', 'python', 'search', 'binary search', 'log n'],
  },
  {
    id: 'algo-py-2',
    category: 'Algorithms',
    subCategory: 'python',
    title: 'Bubble Sort (Python)',
    snippet: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
    description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It has a time complexity of O(n^2).',
    tags: ['algorithms', 'python', 'sort', 'bubble sort', 'n^2'],
  },
  {
    id: 'algo-py-3',
    category: 'Algorithms',
    subCategory: 'python',
    title: 'Recursion - Factorial (Python)',
    snippet: `def factorial(n):
    # Base case
    if n == 0 or n == 1:
        return 1
    # Recursive step
    return n * factorial(n - 1)`,
    description: 'Recursion is a technique where a function calls itself. A recursive function must have a base case to stop the recursion and a recursive step that moves towards the base case.',
    tags: ['algorithms', 'python', 'recursion', 'factorial', 'base case'],
  },
  {
    id: 'algo-py-4',
    category: 'Algorithms',
    subCategory: 'python',
    title: 'Two Pointers Technique (Python)',
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
    description: 'A common pattern where two pointers iterate through a data structure, often from opposite ends, until they meet. It is very efficient for problems involving sorted arrays.',
    tags: ['algorithms', 'python', 'two pointers', 'array', 'search'],
  },
  {
    id: 'algo-py-5',
    category: 'Algorithms',
    subCategory: 'python',
    title: 'Sliding Window Technique (Python)',
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
    description: 'This pattern involves creating a "window" over a portion of data (like an array) and moving that window to solve a problem, typically to find the longest, shortest, or optimal sequence that satisfies a given condition.',
    tags: ['algorithms', 'python', 'sliding window', 'array', 'subarray', 'optimization'],
  },
];
