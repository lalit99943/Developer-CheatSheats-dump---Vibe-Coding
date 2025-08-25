import { CheatSheet } from '../../types';

export const nodejsCheatSheets: CheatSheet[] = [
  {
    id: 'nodejs-1',
    category: 'Node.js',
    subCategory: 'javascript',
    title: 'Create a Simple HTTP Server',
    snippet: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});`,
    description: 'Uses the built-in `http` module to create a basic web server that listens on port 3000 and responds with "Hello, World!".',
    tags: ['nodejs', 'http', 'server', 'core module'],
  },
  {
    id: 'nodejs-2',
    category: 'Node.js',
    subCategory: 'javascript',
    title: 'Read a File Asynchronously',
    snippet: `const fs = require('fs');

fs.readFile('/path/to/file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});`,
    description: 'Uses the `fs` (File System) module to read the contents of a file asynchronously. The callback function is executed upon completion.',
    tags: ['nodejs', 'fs', 'file system', 'async', 'readFile'],
  },
  {
    id: 'nodejs-3',
    category: 'Node.js',
    subCategory: 'javascript',
    title: 'Write a File Asynchronously',
    snippet: `const fs = require('fs');

const content = 'Some content!';

fs.writeFile('/path/to/newfile.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});`,
    description: 'Uses the `fs` module to write data to a file asynchronously, replacing the file if it already exists.',
    tags: ['nodejs', 'fs', 'file system', 'async', 'writeFile'],
  },
  {
    id: 'nodejs-4',
    category: 'Node.js',
    subCategory: 'javascript',
    title: 'Using `fs/promises`',
    snippet: `const fs = require('fs/promises');

async function readFile() {
  try {
    const data = await fs.readFile('/path/to/file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
readFile();`,
    description: 'Modern Node.js provides a promise-based version of the `fs` module, which is convenient to use with async/await syntax.',
    tags: ['nodejs', 'fs', 'promises', 'async', 'await'],
  },
  {
    id: 'nodejs-5',
    category: 'Node.js',
    subCategory: 'javascript',
    title: 'Basic Express.js Server',
    snippet: `const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(\`Example app listening at http://localhost:\${port}\`);
});`,
    description: 'Sets up a minimal web server using the Express.js framework, which simplifies routing and handling requests.',
    tags: ['nodejs', 'express', 'server', 'routing', 'framework'],
  },
  {
    id: 'nodejs-6',
    category: 'Node.js',
    subCategory: 'javascript',
    title: 'Express.js Routing with Parameters',
    snippet: `app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params); // e.g., { "userId": "34", "bookId": "8989" }
});`,
    description: 'Defines a route with named parameters. Express automatically captures the values from the URL and makes them available in `req.params`.',
    tags: ['nodejs', 'express', 'routing', 'parameters', 'url'],
  },
  {
    id: 'nodejs-7',
    category: 'Node.js',
    subCategory: 'javascript',
    title: 'Express.js Middleware',
    snippet: `const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next(); // Pass control to the next middleware
};

app.use(myLogger);`,
    description: 'Middleware functions have access to the request, response, and the next middleware function in the cycle. They can execute code, make changes to the request/response objects, or end the cycle.',
    tags: ['nodejs', 'express', 'middleware', 'app.use'],
  },
  {
    id: 'nodejs-8',
    category: 'Node.js',
    subCategory: 'javascript',
    title: 'Accessing Environment Variables',
    snippet: `// In terminal: export API_KEY="12345"
// In code:
const apiKey = process.env.API_KEY;`,
    description: 'Access environment variables through the `process.env` global object. This is the standard way to handle configuration and secrets.',
    tags: ['nodejs', 'process', 'env', 'environment variables', 'config'],
  },
  {
    id: 'nodejs-9',
    category: 'Node.js',
    subCategory: 'javascript',
    title: 'Working with Paths',
    snippet: `const path = require('path');

const myPath = '/users/test/file.txt';

console.log(path.dirname(myPath));  // /users/test
console.log(path.basename(myPath)); // file.txt
console.log(path.extname(myPath));  // .txt

// Create a cross-platform path
const fullPath = path.join(__dirname, 'files', 'image.png');`,
    description: 'The `path` module provides utilities for working with file and directory paths. It is essential for creating robust, cross-platform applications as it handles path delimiters correctly (e.g., `\\` on Windows vs. `/` on Linux).',
    tags: ['nodejs', 'path', 'file system', 'core module', 'cross-platform'],
  },
  {
    id: 'nodejs-eventloop-diagram',
    category: 'Node.js',
    subCategory: 'svg',
    title: 'Node.js Event Loop',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .label { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; text-anchor: middle; }
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .queue-box { fill: #0f172a; stroke: #334155; rx: 5; }
        .arrow { stroke: #60a5fa; stroke-width: 2; marker-end: url(#ev-arrow); }
        .loop-arrow { stroke: #f59e0b; stroke-width: 2.5; marker-end: url(#ev-loop-arrow); }
    </style>
    <defs>
        <marker id="ev-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa"/></marker>
        <marker id="ev-loop-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/></marker>
    </defs>
    
    <!-- Call Stack -->
    <rect x="50" y="50" width="120" height="200" class="box"/>
    <text x="110" y="40" class="label">Call Stack</text>
    <text x="110" y="80" class="sub-label">main()</text>
    <text x="110" y="100" class="sub-label">myFunc()</text>
    
    <!-- Node APIs -->
    <rect x="280" y="50" width="120" height="80" class="box"/>
    <text x="340" y="40" class="label">Node APIs</text>
    <text x="340" y="80" class="sub-label">fs.readFile</text>
    <text x="340" y="100" class="sub-label">setTimeout</text>
    
    <!-- Callback Queue -->
    <rect x="280" y="170" width="120" height="80" class="queue-box"/>
    <text x="340" y="160" class="label">Callback Queue</text>
    <text x="340" y="200" class="sub-label">onReadDone()</text>
    <text x="340" y="220" class="sub-label">onTimeout()</text>
    
    <!-- Arrows -->
    <path d="M 170 105 L 280 85" class="arrow" />
    <text x="225" y="85" class="sub-label" fill="#60a5fa">Async Call</text>
    
    <path d="M 340 130 L 340 170" class="arrow" />
    <text x="300" y="145" class="sub-label" fill="#60a5fa">Callback</text>

    <!-- Event Loop -->
    <text x="180" y="200" class="label" fill="#f59e0b" transform="rotate(-90 180,200)">Event Loop</text>
    <path d="M 280 210 Q 220 250 170 210" class="loop-arrow" fill="none" />
    <path d="M 170 140 Q 220 180 280 140" class="loop-arrow" opacity="0.2" fill="none" />
    <text x="225" y="245" class="sub-label" fill="#f59e0b">Stack empty?</text>
</svg>`,
    description: 'A diagram of the Node.js event loop. Asynchronous operations are passed from the Call Stack to Node APIs. When they complete, their callbacks are placed in the Callback Queue. The Event Loop constantly checks if the Call Stack is empty and moves callbacks from the queue to the stack for execution.',
    tags: ['nodejs', 'event loop', 'async', 'non-blocking', 'diagram', 'svg'],
  },
];