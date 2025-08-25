import { CheatSheet } from '../../types';

export const reactCheatSheets: CheatSheet[] = [
  {
    id: 'react-1',
    category: 'React',
    subCategory: 'javascript',
    title: 'Functional Component',
    snippet: `import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;`,
    description: 'A functional component is a simple JavaScript function that accepts props (properties) as an argument and returns a React element.',
    tags: ['react', 'component', 'functional', 'props'],
  },
  {
    id: 'react-2',
    category: 'React',
    subCategory: 'javascript',
    title: 'useState Hook',
    snippet: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
    description: 'The `useState` hook adds state to a functional component. It returns a stateful value and a function to update it. React re-renders the component when the state is updated.',
    tags: ['react', 'hooks', 'usestate', 'state'],
  },
  {
    id: 'react-3',
    category: 'React',
    subCategory: 'javascript',
    title: 'useEffect Hook',
    snippet: `import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This function runs after every render
    document.title = \`You clicked \${count} times\`;

    // Optional: return a cleanup function
    return () => {
      // Runs before the component unmounts or before the effect runs again
    };
  }, [count]); // Dependency array: only re-run if 'count' changes

  return <button onClick={() => setCount(c => c + 1)}>...<button>;
}`,
    description: 'The `useEffect` hook lets you perform side effects in functional components. It runs after every render by default. The dependency array `[]` makes it run only once after the initial render.',
    tags: ['react', 'hooks', 'useeffect', 'lifecycle', 'side effects'],
  },
  {
    id: 'react-4',
    category: 'React',
    subCategory: 'javascript',
    title: 'Conditional Rendering',
    snippet: `function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
  // Or using ternary operator:
  // return <div>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</div>
}`,
    description: 'You can use standard JavaScript `if` statements or the ternary operator `?` to conditionally render JSX. This allows you to create different UI based on the state.',
    tags: ['react', 'conditional rendering', 'jsx', 'if', 'ternary'],
  },
  {
    id: 'react-5',
    category: 'React',
    subCategory: 'javascript',
    title: 'Mapping Over Arrays',
    snippet: `function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}`,
    description: 'Use the JavaScript `.map()` method to transform an array of data into an array of JSX elements. It is essential to provide a unique `key` prop for each item in the list for performance and to avoid bugs.',
    tags: ['react', 'list', 'map', 'key', 'jsx'],
  },
  {
    id: 'react-6',
    category: 'React',
    subCategory: 'javascript',
    title: 'Passing Props',
    snippet: `// Parent component
function App() {
  return <Greeting name="Alice" />;
}

// Child component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}`,
    description: 'Props (properties) are read-only objects used to pass data from a parent component to a child component. This is the primary way of configuring and customizing child components.',
    tags: ['react', 'props', 'component', 'parent-child', 'communication'],
  },
  {
    id: 'react-data-flow-diagram',
    category: 'React',
    subCategory: 'svg',
    title: 'Component Data Flow',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .label { font-size: 14px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .arrow { stroke-width: 2; marker-end: url(#react-arrow); }
        .props-arrow { stroke: #34d399; }
        .event-arrow { stroke: #f59e0b; }
        .arrow-label { font-size: 12px; font-weight: 500; text-anchor: middle; }
    </style>
    <defs>
        <marker id="react-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
    </defs>
    
    <!-- Parent -->
    <rect x="100" y="30" width="200" height="60" class="box"/>
    <text x="200" y="65" class="label">Parent Component</text>
    
    <!-- Child -->
    <rect x="125" y="160" width="150" height="50" class="box"/>
    <text x="200" y="190" class="label">Child Component</text>

    <!-- Props Down Arrow -->
    <path d="M 200 90 V 160" class="arrow props-arrow" fill="none" marker-end="url(#react-arrow)"/>
    <text x="235" y="130" class="arrow-label" fill="#a7f3d0">Props</text>
    
    <!-- Events Up Arrow -->
    <path d="M 170 160 C 170 120, 140 120, 140 90" class="arrow event-arrow" fill="none" marker-end="url(#react-arrow)"/>
    <text x="115" y="130" class="arrow-label" fill="#fcd34d">Events</text>
</svg>`,
    description: 'A diagram illustrating the standard data flow in React. Data is passed down from parent to child components via "props". Child components communicate back up to parents by calling callback functions passed as props, commonly referred to as "events".',
    tags: ['react', 'data flow', 'props', 'events', 'state management', 'diagram', 'svg'],
  },
];
