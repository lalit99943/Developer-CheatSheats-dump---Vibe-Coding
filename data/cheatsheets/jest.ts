import { CheatSheet } from '../../types';

export const jestCheatSheets: CheatSheet[] = [
  {
    id: 'jest-1',
    category: 'Jest',
    subCategory: 'javascript',
    title: 'Basic Test Structure',
    type: 'code',
    snippet: `function sum(a, b) {
  return a + b;
}

describe('sum function', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });
});`,
    description: '`describe` creates a block that groups together several related tests. `it` (or `test`) is the actual test case. `expect` is used with a "matcher" function (like `toBe`) to assert something about a value.',
    tags: ['jest', 'test', 'describe', 'it', 'expect', 'structure'],
  },
  {
    id: 'jest-2',
    category: 'Jest',
    subCategory: 'javascript',
    title: 'Common Matchers',
    type: 'code',
    snippet: `expect(value).toBe(3); // Strict equality (===)
expect(value).toEqual({ a: 1 }); // Deep equality for objects/arrays
expect(value).toBeTruthy(); // Checks if value is true in a boolean context
expect(value).toBeNull(); // Checks for null
expect(value).toContain('item'); // For arrays or strings
expect(value).toHaveLength(3); // For strings or arrays`,
    description: 'Matchers let you validate values in different ways. Jest has a rich set of built-in matchers for various use cases.',
    tags: ['jest', 'matchers', 'expect', 'asserth'],
  },
  {
    id: 'jest-3',
    category: 'Jest',
    subCategory: 'javascript',
    title: 'Setup and Teardown',
    type: 'code',
    snippet: `beforeEach(() => {
  // Runs before each test in this describe block
});

afterEach(() => {
  // Runs after each test in this describe block
});

beforeAll(() => {
  // Runs once before all tests in this describe block
});

afterAll(() => {
  // Runs once after all tests in this describe block
});`,
    description: 'Jest provides helper functions to run setup or teardown logic before/after tests, which is useful for cleaning up state or setting up a common environment.',
    tags: ['jest', 'setup', 'teardown', 'beforeeach', 'aftereach'],
  },
  {
    id: 'jest-4',
    category: 'Jest',
    subCategory: 'javascript',
    title: 'Mocking Functions',
    type: 'code',
    snippet: `const myMock = jest.fn();
myMock.mockReturnValue(true);

const result = myMock('arg1', 'arg2');

expect(myMock).toHaveBeenCalled();
expect(myMock).toHaveBeenCalledWith('arg1', 'arg2');`,
    description: 'Mock functions make it easy to test the links between code by erasing the actual implementation of a function, capturing calls to the function, and allowing you to configure return values.',
    tags: ['jest', 'mock', 'jest.fn', 'spies'],
  },
  {
    id: 'jest-5',
    category: 'Jest',
    subCategory: 'javascript',
    title: 'Testing Asynchronous Code',
    type: 'code',
    snippet: `// Using Promises
it('should resolve with the correct data', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

// Using async/await (preferred)
it('should resolve with the correct data', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});`,
    description: 'Jest has built-in support for testing asynchronous code. You can return a promise from your test, or use the more readable `async/await` syntax.',
    tags: ['jest', 'async', 'await', 'promise', 'asynchronous'],
  },
];
