import { CheatSheet } from '../../types';

export const dataStructuresCheatSheets: CheatSheet[] = [
  {
    id: 'ds-1',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Hash Table (Using Map)',
    snippet: `// A Map is an implementation of a hash table.
const userMap = new Map();

// Set key-value pairs
userMap.set('id123', { name: 'Alice', age: 25 });
userMap.set('id456', { name: 'Bob', age: 30 });

// Get a value by key
const user = userMap.get('id123');

// Check if a key exists
console.log(userMap.has('id123')); // true

// Get size
console.log(userMap.size); // 2`,
    description: 'A hash table is a data structure that stores key-value pairs. In JavaScript, the built-in `Map` object provides this functionality with O(1) average time complexity for insertion, deletion, and access.',
    tags: ['data structures', 'hash table', 'map', 'key-value', 'javascript'],
  },
  {
    id: 'ds-2',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Set (Unique Values)',
    snippet: `const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // Duplicate is ignored

console.log(mySet); // Set(2) { 1, 5 }
console.log(mySet.has(1)); // true

// Create a Set from an array to get unique values
const numbers = [2, 3, 4, 4, 2, 3];
const uniqueNumbers = [...new Set(numbers)]; // [2, 3, 4]`,
    description: 'A Set is a collection of unique values. The `Set` object in JavaScript lets you store unique values of any type, whether primitive values or object references.',
    tags: ['data structures', 'set', 'unique', 'javascript'],
  },
  {
    id: 'ds-3',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Stack (LIFO)',
    snippet: `class Stack {
  constructor() {
    this.items = [];
  }
  // Add item to top
  push(element) {
    this.items.push(element);
  }
  // Remove item from top
  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }
  // View top item
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}`,
    description: 'A Stack is a linear data structure that follows a Last-In-First-Out (LIFO) principle. In JavaScript, it can be easily implemented using an array.',
    tags: ['data structures', 'stack', 'lifo', 'push', 'pop', 'javascript'],
  },
  {
    id: 'ds-4',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Queue (FIFO)',
    snippet: `class Queue {
  constructor() {
    this.items = [];
  }
  // Add item to back
  enqueue(element) {
    this.items.push(element);
  }
  // Remove item from front
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  // View front item
  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}`,
    description: 'A Queue is a linear data structure that follows a First-In-First-Out (FIFO) principle. It can be implemented using an array, where items are added to one end and removed from the other.',
    tags: ['data structures', 'queue', 'fifo', 'enqueue', 'dequeue', 'javascript'],
  },
  {
    id: 'ds-5',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Singly Linked List',
    snippet: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // ... methods to add, remove, find nodes
}`,
    description: 'A linked list is a linear data structure where elements are not stored at contiguous memory locations. The elements are linked using pointers. Each node contains data and a reference (or link) to the next node in the sequence.',
    tags: ['data structures', 'linked list', 'node', 'pointer', 'javascript'],
  },
  {
    id: 'ds-6',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Binary Search Tree (BST)',
    snippet: `class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // ... methods to insert, find, remove nodes
  // Insert logic: if data < node.data, go left, else go right
}`,
    description: 'A tree data structure where each node has at most two children. For each node, all items in its left subtree are less than the node, and all items in its right subtree are greater. This allows for fast lookups (O(log n) on average).',
    tags: ['data structures', 'tree', 'binary search tree', 'bst', 'node', 'javascript'],
  },
  {
    id: 'ds-py-1',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Hash Table (Dictionary) in Python',
    snippet: `# Dictionaries are Python's implementation of hash tables
user_dict = {}

# Set key-value pairs
user_dict['id123'] = {'name': 'Alice', 'age': 25}
user_dict['id456'] = {'name': 'Bob', 'age': 30}

# Get a value by key
user = user_dict.get('id123')

# Check if a key exists
print('id123' in user_dict) # True

# Get size
print(len(user_dict)) # 2`,
    description: 'A hash table (or hash map) is a data structure that stores key-value pairs. Python\'s built-in `dict` type is a highly optimized hash table implementation with O(1) average time complexity.',
    tags: ['data structures', 'python', 'hash table', 'dictionary', 'dict', 'key-value'],
  },
  {
    id: 'ds-py-2',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Set (Unique Values) in Python',
    snippet: `my_set = set()

my_set.add(1)
my_set.add(5)
my_set.add(5) # Duplicate is ignored

print(my_set) # {1, 5}
print(1 in my_set) # True

# Create a Set from a list to get unique values
numbers = [2, 3, 4, 4, 2, 3]
unique_numbers = list(set(numbers)) # [2, 3, 4]`,
    description: 'A Set is an unordered collection of unique items. Python\'s `set` object provides this functionality and is highly efficient for membership testing.',
    tags: ['data structures', 'python', 'set', 'unique'],
  },
  {
    id: 'ds-py-3',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Stack (LIFO) using a List',
    snippet: `stack = []

# Push items (add to top)
stack.append('a')
stack.append('b')
stack.append('c')

# Pop item (remove from top)
top_item = stack.pop() # 'c'

# Peek at top item
top_item_peek = stack[-1] # 'b'

# Check if empty
is_empty = not stack`,
    description: 'A Stack (LIFO - Last-In, First-Out) can be easily implemented in Python using a list. `append()` acts as push and `pop()` removes from the same end.',
    tags: ['data structures', 'python', 'stack', 'lifo', 'list'],
  },
  {
    id: 'ds-py-4',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Queue (FIFO) using collections.deque',
    snippet: `from collections import deque

queue = deque()

# Enqueue items (add to back)
queue.append('a')
queue.append('b')
queue.append('c')

# Dequeue item (remove from front)
front_item = queue.popleft() # 'a'

# View front item
front_item_peek = queue[0] # 'b'`,
    description: 'A Queue (FIFO - First-In, First-Out). While a list can be used, `collections.deque` is more efficient for appends and pops from both ends, making it ideal for implementing queues.',
    tags: ['data structures', 'python', 'queue', 'fifo', 'deque', 'collections'],
  },
  {
    id: 'ds-py-5',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Singly Linked List (Python)',
    snippet: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    # ... methods to add, remove, find nodes`,
    description: 'A linked list is a linear data structure where elements are not stored at contiguous memory locations. The elements are linked using pointers. Each node contains data and a reference to the next node.',
    tags: ['data structures', 'python', 'linked list', 'node', 'pointer'],
  },
  {
    id: 'ds-py-6',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Binary Search Tree (BST) in Python',
    snippet: `class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

class BinarySearchTree:
    def __init__(self):
        self.root = None
    # ... methods to insert, find, remove nodes`,
    description: 'A tree data structure where each node has at most two children. For each node, all items in its left subtree are less than the node, and all items in its right subtree are greater.',
    tags: ['data structures', 'python', 'tree', 'binary search tree', 'bst', 'node'],
  },
];
