import { CheatSheet } from '../../types';

export const githubActionsCheatSheets: CheatSheet[] = [
  {
    id: 'gha-1',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Basic Workflow Structure',
    snippet: `name: CI Workflow

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out code
        uses: actions/checkout@v4
      - name: Run a one-line script
        run: echo "Hello, world!"`,
    description: 'The fundamental structure of a GitHub Actions workflow file. It defines the workflow name, the events that trigger it (on), and the jobs to be executed.',
    tags: ['github actions', 'workflow', 'yaml', 'ci', 'basics'],
  },
  {
    id: 'gha-2',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Workflow Triggers (Events)',
    snippet: `on:
  push:
    branches:
      - 'main'
      - 'releases/**'
  schedule:
    - cron: '30 5 * * 1-5' # Run at 5:30 AM on Weekdays
  workflow_dispatch: # Allows manual trigger`,
    description: 'The `on` key defines what events trigger the workflow. You can trigger on pushes, pull requests, scheduled cron jobs, or manual dispatches from the GitHub UI.',
    tags: ['github actions', 'trigger', 'on', 'events', 'push', 'schedule'],
  },
  {
    id: 'gha-3',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Using an Action (Marketplace)',
    snippet: `steps:
  - uses: actions/checkout@v4
  - name: Set up Node.js
    uses: actions/setup-node@v4
    with:
      node-version: '20'`,
    description: 'The `uses` keyword specifies an action to run. Actions are reusable units of code. `actions/checkout` and `actions/setup-node` are common official actions. The `with` keyword provides input parameters to the action.',
    tags: ['github actions', 'actions', 'uses', 'marketplace', 'checkout', 'setup-node'],
  },
  {
    id: 'gha-4',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Running Shell Commands',
    snippet: `steps:
  - name: Install dependencies
    run: npm ci
  - name: Run tests
    run: npm test
  - name: Multi-line script
    run: |
      echo "This is the first line."
      echo "This is the second line."`,
    description: 'The `run` keyword executes command-line programs using the runner\'s shell. For multi-line scripts, use the `|` character.',
    tags: ['github actions', 'run', 'script', 'shell', 'npm'],
  },
  {
    id: 'gha-5',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Matrix Strategy for Testing',
    snippet: `jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20, 22]
        os: [ubuntu-latest, windows-latest]
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
      # ... other steps`,
    description: 'A matrix strategy lets you use variables in a single job definition to automatically create multiple job runs that are based on the combinations of the variables. For example, testing across multiple versions of a language or on different operating systems.',
    tags: ['github actions', 'matrix', 'strategy', 'testing', 'ci'],
  },
  {
    id: 'gha-6',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Caching Dependencies',
    snippet: `- name: Cache node modules
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-`,
    description: 'Use the `actions/cache` action to speed up your workflows by caching dependencies or other files that are expensive to create. The key is used to identify the cache.',
    tags: ['github actions', 'cache', 'performance', 'dependencies', 'npm'],
  },
  {
    id: 'gha-7',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Uploading and Downloading Artifacts',
    snippet: `- name: Upload build artifact
  uses: actions/upload-artifact@v4
  with:
    name: my-app-build
    path: dist/

# In a later job:
- name: Download build artifact
  uses: actions/download-artifact@v4
  with:
    name: my-app-build`,
    description: 'Artifacts allow you to persist data between jobs in a workflow. Use `upload-artifact` in one job to save files and `download-artifact` in another job to use them.',
    tags: ['github actions', 'artifacts', 'upload', 'download', 'jobs'],
  },
  {
    id: 'gha-8',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Using Secrets and Environment Variables',
    snippet: `env:
  NODE_ENV: production

steps:
  - name: Use a secret
    run: echo "The secret is safe"
    env:
      API_KEY: \${{ secrets.MY_API_KEY }}`,
    description: 'Use the `env` keyword to set environment variables for a workflow, job, or step. Use the `secrets` context to access encrypted secrets that you have stored in your repository settings.',
    tags: ['github actions', 'secrets', 'env', 'environment variables', 'security'],
  },
  {
    id: 'gha-9',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Conditional Execution (if)',
    snippet: `- name: Deploy to production
  if: github.ref == 'refs/heads/main' && github.event_name == 'push'
  run: ./deploy.sh`,
    description: 'The `if` conditional prevents a step from running unless a condition is met. You can use any supported context and expression to create a conditional.',
    tags: ['github actions', 'if', 'conditional', 'context', 'expression'],
  },
  {
    id: 'gha-10',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Build and Push Docker Image',
    snippet: `- name: Login to Docker Hub
  uses: docker/login-action@v3
  with:
    username: \${{ secrets.DOCKERHUB_USERNAME }}
    password: \${{ secrets.DOCKERHUB_TOKEN }}
- name: Build and push
  uses: docker/build-push-action@v5
  with:
    context: .
    push: true
    tags: your-username/your-app:latest`,
    description: 'A common pattern for containerized applications. This uses the official Docker actions to log in to a registry, build an image from your Dockerfile, and push it.',
    tags: ['github actions', 'docker', 'build', 'push', 'container', 'ci-cd'],
  },
  {
    id: 'gha-11',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Getting Output from a Step',
    snippet: `- name: Set a value
  id: step_one
  run: echo "my_value=hello" >> "$GITHUB_OUTPUT"
- name: Use the value
  id: step_two
  run: echo "The value was \${{ steps.step_one.outputs.my_value }}"`,
    description: 'A step can generate output values. Define an `id` for the step and write to the `$GITHUB_OUTPUT` file. Subsequent steps can then access these outputs using the `steps` context.',
    tags: ['github actions', 'output', 'steps', 'context', 'jobs'],
  },
  {
    id: 'gha-12',
    category: 'GitHub Actions',
    subCategory: 'yaml',
    title: 'Reusable Workflows',
    snippet: `jobs:
  call-reusable-workflow:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      username: 'MonaTheOctocat'
    secrets:
      envPAT: \${{ secrets.MY_PAT }}`,
    description: 'You can call one workflow from within another. This allows you to avoid duplicating code and create more maintainable pipelines. The called workflow must be configured with `workflow_call`.',
    tags: ['github actions', 'reusable', 'workflow call', 'ci-cd', 'pipeline'],
  },
];
