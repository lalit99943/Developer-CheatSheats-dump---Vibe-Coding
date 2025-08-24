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
];