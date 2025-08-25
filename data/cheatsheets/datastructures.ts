import { CheatSheet } from '../../types';

export const dataStructuresCheatSheets: CheatSheet[] = [
  {
    id: 'ds-1',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Hash Table (Using Map)',
    type: 'code',
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
    description: 'A hash table is a data structure that stores key-value pairs. In JavaScript, the built-in `Map` object provides this functionality.\n\n**Time Complexity:** Avg O(1) for Access, Search, Insertion, & Deletion. Worst case is O(n).\n**Space Complexity:** O(n).',
    tags: ['data structures', 'hash table', 'map', 'key-value', 'javascript'],
  },
  {
    id: 'ds-hash-table-diagram',
    category: 'Data Structures',
    subCategory: 'svg',
    title: 'Hash Table (with Collision)',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 280" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .label { font-size: 12px; fill: #94a3b8; }
        .title { font-size: 13px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .box { fill: #334155; stroke: #475569; }
        .node { fill: #0f172a; stroke: #475569; }
        .node-text { fill: #cbd5e1; font-size: 11px; font-family: 'Fira Code', monospace; }
        .arrow { stroke: #64748b; stroke-width: 1.5; marker-end: url(#ds-arrow); }
      </style>
      <defs>
        <marker id="ds-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
        </marker>
      </defs>
      
      <text x="60" y="30" class="title">Key</text>
      <text x="155" y="30" class="title">Hash Function</text>
      <text x="325" y="30" class="title">Array (Buckets)</text>

      <!-- Key 1 -->
      <text x="60" y="70" class="node-text" text-anchor="middle">"John"</text>
      <line x1="90" y1="65" x2="120" y2="125" class="arrow"/>
      
      <!-- Key 2 -->
      <text x="60" y="180" class="node-text" text-anchor="middle">"Sandra"</text>
      <line x1="90" y1="175" x2="120" y2="125" class="arrow"/>

      <!-- Hash Function -->
      <ellipse cx="155" cy="125" rx="35" ry="25" class="box"/>
      <text x="155" y="130" class="label" text-anchor="middle">hash()</text>
      <line x1="190" y1="125" x2="250" y2="125" class="arrow"/>

      <!-- Array -->
      <rect x="250" y="50" width="50" height="40" class="box"/><text x="275" y="75" class="label" text-anchor="middle">0</text>
      <rect x="250" y="90" width="50" height="40" class="box"/><text x="275" y="115" class="label" text-anchor="middle">1</text>
      <rect x="250" y="130" width="50" height="40" class="box"/><text x="275" y="155" class="label" text-anchor="middle">2</text>
      <rect x="250" y="170" width="50" height="40" class="box"/><text x="275" y="195" class="label" text-anchor="middle">3</text>
      <rect x="250" y="210" width="50" height="40" class="box"/><text x="275" y="235" class="label" text-anchor="middle">4</text>

      <!-- Collision Handling (Chaining) -->
      <text x="155" y="155" class="label" fill="#f87171" font-size="10" text-anchor="middle">hash("John") = 1</text>
      <text x="155" y="170" class="label" fill="#f87171" font-size="10" text-anchor="middle">hash("Sandra") = 1</text>

      <line x1="275" y1="110" x2="310" y2="90" class="arrow"/>
      <rect x="310" y="70" width="120" height="25" class="node"/><text x="370" y="86" class="node-text" text-anchor="middle">"John": "521-1234"</text>
      
      <line x1="370" y1="95" x2="370" y2="120" class="arrow"/>
      <rect x="310" y="120" width="120" height="25" class="node"/><text x="370" y="136" class="node-text" text-anchor="middle">"Sandra": "521-5678"</text>
    </svg>`,
    description: 'A diagram showing how a hash table works. Keys are passed through a hash function to compute an index in an array. This example shows a collision where two keys hash to the same index, which is resolved by chaining the values in a linked list.',
    tags: ['data structures', 'hash table', 'diagram', 'collision', 'chaining', 'svg'],
  },
  {
    id: 'ds-2',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Set (Unique Values)',
    type: 'code',
    snippet: `const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // Duplicate is ignored

console.log(mySet); // Set(2) { 1, 5 }
console.log(mySet.has(1)); // true

// Create a Set from an array to get unique values
const numbers = [2, 3, 4, 4, 2, 3];
const uniqueNumbers = [...new Set(numbers)]; // [2, 3, 4]`,
    description: 'A Set is a collection of unique values. The `Set` object in JavaScript lets you store unique values of any type, whether primitive values or object references.\n\n**Time Complexity:** Avg O(1) for Search, Insertion, & Deletion. Worst case is O(n).\n**Space Complexity:** O(n).',
    tags: ['data structures', 'set', 'unique', 'javascript'],
  },
  {
    id: 'ds-3',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Stack (LIFO)',
    type: 'code',
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
    description: 'A Stack is a linear data structure that follows a Last-In-First-Out (LIFO) principle. In JavaScript, it can be easily implemented using an array.\n\n**Time Complexity:** O(1) for Push/Pop (amortized), O(n) for Search/Access.\n**Space Complexity:** O(n).',
    tags: ['data structures', 'stack', 'lifo', 'push', 'pop', 'javascript'],
  },
  {
    id: 'ds-4',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Queue (FIFO)',
    type: 'code',
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
    description: 'A Queue is a linear data structure that follows a First-In-First-Out (FIFO) principle. It can be implemented using an array, where items are added to one end and removed from the other.\n\n**Time Complexity (Array Impl.):** O(1) for Enqueue (amortized), O(n) for Dequeue with `shift()`.\n**Space Complexity:** O(n).',
    tags: ['data structures', 'queue', 'fifo', 'enqueue', 'dequeue', 'javascript'],
  },
  {
    id: 'ds-5',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Singly Linked List',
    type: 'code',
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
    description: 'A linked list is a linear data structure where elements are not stored at contiguous memory locations. The elements are linked using pointers. Each node contains data and a reference (or link) to the next node in the sequence.\n\n**Time Complexity:** O(n) for Access/Search. O(1) for Head Insertion/Deletion.\n**Space Complexity:** O(n).',
    tags: ['data structures', 'linked list', 'node', 'pointer', 'javascript'],
  },
  {
    id: 'ds-linked-list-diagram',
    category: 'Data Structures',
    subCategory: 'svg',
    title: 'Singly Linked List',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 150" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .node { fill: #334155; stroke: #475569; }
        .data-box { fill: #0f172a; stroke: #475569; }
        .pointer-box { fill: #475569; stroke: #475569; }
        .text { fill: #e2e8f0; font-size: 14px; text-anchor: middle; }
        .label { fill: #94a3b8; font-size: 12px; text-anchor: middle; }
        .arrow { stroke: #60a5fa; stroke-width: 2; marker-end: url(#ll-arrow); }
      </style>
      <defs>
        <marker id="ll-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa"/>
        </marker>
      </defs>
      
      <!-- Head -->
      <text x="30" y="75" class="label">head</text>
      <line x1="30" y1="80" x2="70" y2="100" class="arrow"/>
      
      <!-- Node 1 -->
      <rect x="70" y="80" width="100" height="40" class="node" rx="5"/>
      <rect x="75" y="85" width="60" height="30" class="data-box"/><text x="105" y="105" class="text">A</text>
      <rect x="135" y="85" width="30" height="30" class="pointer-box"/>
      <line x1="150" y1="100" x2="190" y2="100" class="arrow"/>

      <!-- Node 2 -->
      <rect x="190" y="80" width="100" height="40" class="node" rx="5"/>
      <rect x="195" y="85" width="60" height="30" class="data-box"/><text x="225" y="105" class="text">B</text>
      <rect x="255" y="85" width="30" height="30" class="pointer-box"/>
      <line x1="270" y1="100" x2="310" y2="100" class="arrow"/>
      
      <!-- Node 3 -->
      <rect x="310" y="80" width="100" height="40" class="node" rx="5"/>
      <rect x="315" y="85" width="60" height="30" class="data-box"/><text x="345" y="105" class="text">C</text>
      <rect x="375" y="85" width="30" height="30" class="pointer-box"/>
      <text x="390" y="105" class="text">Ø</text>
      <text x="390" y="120" class="label">null</text>
    </svg>`,
    description: 'A diagram illustrating a singly linked list. It starts with a "head" pointer. Each node contains data and a pointer ("next") that references the subsequent node in the chain. The final node points to null, signifying the end of the list.',
    tags: ['data structures', 'linked list', 'diagram', 'node', 'pointer', 'svg'],
  },
  {
    id: 'ds-6',
    category: 'Data Structures',
    subCategory: 'javascript',
    title: 'Binary Search Tree (BST)',
    type: 'code',
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
    description: 'A tree data structure where each node has at most two children. For each node, all items in its left subtree are less than the node, and all items in its right subtree are greater. This allows for fast lookups.\n\n**Time Complexity:** Avg O(log n) for Search, Insertion, Deletion. Worst O(n) for unbalanced trees.\n**Space Complexity:** O(n).',
    tags: ['data structures', 'tree', 'binary search tree', 'bst', 'node', 'javascript'],
  },
  {
    id: 'ds-bst-diagram',
    category: 'Data Structures',
    subCategory: 'svg',
    title: 'Binary Search Tree',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .node { fill: #334155; stroke: #475569; }
        .text { fill: #e2e8f0; font-size: 14px; text-anchor: middle; }
        .label { fill: #94a3b8; font-size: 11px; text-anchor: middle; }
        .line { stroke: #64748b; stroke-width: 1.5; }
    </style>
    
    <!-- Nodes -->
    <circle cx="200" cy="50" r="20" class="node"/><text x="200" y="55" class="text">8</text>
    <circle cx="100" cy="120" r="20" class="node"/><text x="100" y="125" class="text">3</text>
    <circle cx="300" cy="120" r="20" class="node"/><text x="300" y="125" class="text">10</text>
    <circle cx="50" cy="190" r="20" class="node"/><text x="50" y="195" class="text">1</text>
    <circle cx="150" cy="190" r="20" class="node"/><text x="150" y="195" class="text">6</text>
    <circle cx="350" cy="190" r="20" class="node"/><text x="350" y="195" class="text">14</text>

    <!-- Lines -->
    <line x1="185" y1="65" x2="115" y2="105" class="line" />
    <line x1="215" y1="65" x2="285" y2="105" class="line" />
    <line x1="85" y1="135" x2="65" y2="175" class="line" />
    <line x1="115" y1="135" x2="135" y2="175" class="line" />
    <line x1="315" y1="135" x2="335" y2="175" class="line" />
    
    <!-- Labels -->
    <text x="150" y="85" class="label">Left &lt; Parent</text>
    <text x="250" y="85" class="label">Right &gt; Parent</text>
</svg>`,
    description: 'A visual representation of a Binary Search Tree (BST). Each node\'s left child has a value less than the parent, and the right child has a value greater than the parent. This property allows for efficient searching.',
    tags: ['data structures', 'tree', 'binary search tree', 'bst', 'diagram', 'svg'],
  },
  {
    id: 'ds-py-1',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Hash Table (Dictionary) in Python',
    type: 'code',
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
    description: 'A hash table (or hash map) is a data structure that stores key-value pairs. Python\'s built-in `dict` type is a highly optimized hash table implementation.\n\n**Time Complexity:** Avg O(1) for Access, Search, Insertion, & Deletion. Worst case is O(n).\n**Space Complexity:** O(n).',
    tags: ['data structures', 'python', 'hash table', 'dictionary', 'dict', 'key-value'],
  },
  {
    id: 'ds-py-2',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Set (Unique Values) in Python',
    type: 'code',
    snippet: `my_set = set()

my_set.add(1)
my_set.add(5)
my_set.add(5) # Duplicate is ignored

print(my_set) # {1, 5}
print(1 in my_set) # True

# Create a Set from a list to get unique values
numbers = [2, 3, 4, 4, 2, 3]
unique_numbers = list(set(numbers)) # [2, 3, 4]`,
    description: 'A Set is an unordered collection of unique items. Python\'s `set` object is highly efficient for membership testing.\n\n**Time Complexity:** Avg O(1) for Search, Insertion, & Deletion. Worst case is O(n).\n**Space Complexity:** O(n).',
    tags: ['data structures', 'python', 'set', 'unique'],
  },
  {
    id: 'ds-py-3',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Stack (LIFO) using a List',
    type: 'code',
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
    description: 'A Stack (LIFO - Last-In, First-Out) can be easily implemented in Python using a list. `append()` acts as push and `pop()` removes from the same end.\n\n**Time Complexity:** O(1) for Push/Pop (amortized), O(n) for Search/Access.\n**Space Complexity:** O(n).',
    tags: ['data structures', 'python', 'stack', 'lifo', 'list'],
  },
  {
    id: 'ds-py-4',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Queue (FIFO) using collections.deque',
    type: 'code',
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
    description: 'A Queue (FIFO - First-In, First-Out). While a list can be used, `collections.deque` is more efficient for appends and pops from both ends, making it ideal for implementing queues.\n\n**Time Complexity:** O(1) for Enqueue/Dequeue.\n**Space Complexity:** O(n).',
    tags: ['data structures', 'python', 'queue', 'fifo', 'deque', 'collections'],
  },
  {
    id: 'ds-py-5',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Singly Linked List (Python)',
    type: 'code',
    snippet: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    # ... methods to add, remove, find nodes`,
    description: 'A linked list is a linear data structure where elements are not stored at contiguous memory locations. The elements are linked using pointers. Each node contains data and a reference to the next node.\n\n**Time Complexity:** O(n) for Access/Search. O(1) for Head Insertion/Deletion.\n**Space Complexity:** O(n).',
    tags: ['data structures', 'python', 'linked list', 'node', 'pointer'],
  },
  {
    id: 'ds-py-6',
    category: 'Data Structures',
    subCategory: 'python',
    title: 'Binary Search Tree (BST) in Python',
    type: 'code',
    snippet: `class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

class BinarySearchTree:
    def __init__(self):
        self.root = None
    # ... methods to insert, find, remove nodes`,
    description: 'A tree data structure where each node has at most two children. For each node, all items in its left subtree are less than the node, and all items in its right subtree are greater.\n\n**Time Complexity:** Avg O(log n) for Search, Insertion, Deletion. Worst O(n) for unbalanced trees.\n**Space Complexity:** O(n).',
    tags: ['data structures', 'python', 'tree', 'binary search tree', 'bst', 'node'],
  },
];
