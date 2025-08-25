import { CheatSheet } from '../../types';

export const cicdCheatSheets: CheatSheet[] = [
  {
    id: 'jenkins-9',
    category: 'CI/CD',
    subCategory: 'groovy',
    title: 'Archiving Artifacts (Jenkins)',
    type: 'code',
    snippet: `post {
    success {
        archiveArtifacts artifacts: 'target/*.jar', fingerprint: true
    }
}`,
    description: 'The `archiveArtifacts` step saves files from the workspace to be stored with the build record. This is used for build outputs like JARs, WARs, or reports.',
    tags: ['jenkins', 'pipeline', 'artifacts', 'archive', 'build'],
  },
  {
    id: 'cicd-16',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Artifact Repository',
    type: 'code',
    snippet: 'A storage system designed to host and manage binary artifacts (e.g., JARs, Docker images, npm packages) generated and used throughout the software development lifecycle. Examples: JFrog Artifactory, Sonatype Nexus.',
    description: 'An artifact repository acts as a single source of truth for your built artifacts. CI servers push artifacts to it, and CD servers pull them for deployment. It improves reliability and traceability of builds.',
    tags: ['cicd', 'artifact repository', 'nexus', 'artifactory', 'binary', 'devops'],
  },
  {
    id: 'gha-1',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Basic Workflow (GitHub Actions)',
    type: 'code',
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
    id: 'cicd-13',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Blue-Green Deployment Strategy',
    type: 'code',
    snippet: 'A strategy that reduces downtime by running two identical production environments called "Blue" and "Green". At any time, only one of them is live.',
    description: 'To deploy a new version, you deploy and test it on the inactive (Green) environment. Once it\'s ready, you switch the router to send all traffic to Green. This allows for near-zero downtime and instant rollback by simply switching the router back to Blue.',
    tags: ['cicd', 'deployment strategy', 'blue-green', 'release', 'devops', 'zero-downtime'],
  },
  {
    id: 'jenkins-12',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Blue Ocean UI (Jenkins)',
    type: 'code',
    snippet: 'Blue Ocean is a modern user interface for Jenkins, designed to improve user experience and clarity for CI/CD pipelines.',
    description: 'It provides a sophisticated visualization of your software delivery pipeline, helps you quickly identify problems, and improves team productivity. It is installed as a plugin.',
    tags: ['jenkins', 'ui', 'blue ocean', 'visualization', 'plugin'],
  },
  {
    id: 'gha-10',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Build and Push Docker Image (GitHub Actions)',
    type: 'code',
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
    id: 'cicd-12',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Canary Deployment Strategy',
    type: 'code',
    snippet: 'A strategy where the new version of an application is gradually rolled out to a small subset of users before making it available to everyone.',
    description: 'This technique allows you to test the new version in a live production environment with minimal impact. If the new version shows errors or poor performance, it can be rolled back without affecting the majority of users.',
    tags: ['cicd', 'deployment strategy', 'canary', 'release', 'devops'],
  },
  {
    id: 'gha-6',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Caching Dependencies (GitHub Actions)',
    type: 'code',
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
    id: 'cicd-pipeline-diagram',
    category: 'CI/CD',
    subCategory: 'svg',
    title: 'CI/CD Pipeline Flow',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 180" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .stage { fill: #334155; stroke: #475569; rx: 5; }
        .label { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; text-anchor: middle; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#cicd-arrow); }
    </style>
    <defs>
        <marker id="cicd-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
        </marker>
    </defs>
    
    <!-- Stages -->
    <rect x="20" y="60" width="100" height="60" class="stage"/>
    <text x="70" y="85" class="label">Code</text>
    <text x="70" y="105" class="sub-label">git push</text>
    
    <line x1="120" y1="90" x2="160" y2="90" class="arrow"/>
    
    <rect x="160" y="60" width="100" height="60" class="stage"/>
    <text x="210" y="85" class="label">Build</text>
    <text x="210" y="105" class="sub-label">mvn package</text>
    
    <line x1="260" y1="90" x2="300" y2="90" class="arrow"/>

    <rect x="300" y="60" width="100" height="60" class="stage"/>
    <text x="350" y="85" class="label">Test</text>
    <text x="350" y="105" class="sub-label">junit tests</text>

    <line x1="400" y1="90" x2="440" y2="90" class="arrow"/>
    
    <rect x="440" y="60" width="100" height="60" class="stage"/>
    <text x="490" y="85" class="label">Deploy</text>
    <text x="490" y="105" class="sub-label">kubectl apply</text>
</svg>`,
    description: 'A visual diagram of a typical CI/CD pipeline. It shows the automated flow from a code commit, through building and testing, to eventual deployment to a production environment.',
    tags: ['cicd', 'pipeline', 'diagram', 'devops', 'automation', 'svg'],
  },
  {
    id: 'jenkins-3',
    category: 'CI/CD',
    subCategory: 'groovy',
    title: 'Common Steps (Jenkins)',
    type: 'code',
    snippet: `steps {
    sh 'npm install'
    sh 'mvn clean package'
    echo 'Build completed successfully!'
    pwd()
}`,
    description: '`sh`: Executes a shell command. `echo`: Prints a message to the console log. `pwd`: Returns the current working directory.',
    tags: ['jenkins', 'pipeline', 'steps', 'sh', 'echo'],
  },
  {
    id: 'gha-9',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Conditional Execution (GitHub Actions)',
    type: 'code',
    snippet: `- name: Deploy to production
  if: github.ref == 'refs/heads/main' && github.event_name == 'push'
  run: ./deploy.sh`,
    description: 'The `if` conditional prevents a step from running unless a condition is met. You can use any supported context and expression to create a conditional.',
    tags: ['github actions', 'if', 'conditional', 'context', 'expression'],
  },
  {
    id: 'cicd-2',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Continuous Delivery vs. Deployment',
    type: 'code',
    snippet: `Continuous Delivery: Code changes are automatically built, tested, and prepared for a release to production.
Continuous Deployment: Extends delivery by automatically deploying every passed build to production.`,
    description: 'CD automates the release process. Continuous Delivery requires a manual approval step to deploy to production, while Continuous Deployment is fully automated.',
    tags: ['cicd', 'cd', 'continuous delivery', 'continuous deployment', 'devops', 'release'],
  },
  {
    id: 'cicd-1',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Continuous Integration (CI)',
    type: 'code',
    snippet: 'CI is the practice of automating the integration of code changes from multiple contributors into a single software project.',
    description: 'The main goal is to prevent integration problems. A CI server automatically builds the code and runs tests every time a change is pushed to the repository, providing rapid feedback to developers.',
    tags: ['cicd', 'ci', 'continuous integration', 'devops', 'automation'],
  },
  {
    id: 'jenkins-1',
    category: 'CI/CD',
    subCategory: 'groovy',
    title: 'Declarative Pipeline Skeleton (Jenkins)',
    type: 'code',
    snippet: `pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // ...
            }
        }
    }
}`,
    description: 'A basic structure for a Declarative Pipeline in a Jenkinsfile. It defines an agent to run on, and a series of stages, each containing steps to be executed.',
    tags: ['jenkins', 'pipeline', 'declarative', 'jenkinsfile', 'ci-cd'],
  },
  {
    id: 'cicd-5',
    category: 'CI/CD',
    subCategory: 'bash',
    title: 'Docker in CI/CD',
    type: 'code',
    snippet: `# Log in to the container registry
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

# Build the Docker image
docker build -t your-username/your-app:latest .

# Push the Docker image
docker push your-username/your-app:latest`,
    description: 'A typical sequence of commands in a CI/CD pipeline for a containerized application. It involves logging into a registry (like Docker Hub), building the image, and pushing it to the registry.',
    tags: ['cicd', 'docker', 'build', 'push', 'registry', 'container'],
  },
  {
    id: 'gha-11',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Getting Step Output (GitHub Actions)',
    type: 'code',
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
    id: 'cicd-11',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Grafana Overview',
    type: 'code',
    snippet: 'An open-source platform for monitoring and observability. It allows you to query, visualize, alert on, and understand your metrics no matter where they are stored.',
    description: 'Grafana is primarily used for creating dashboards. It connects to various data sources (like Prometheus, Loki, Elasticsearch) and provides a rich set of visualization options like graphs, tables, and heatmaps.',
    tags: ['monitoring', 'grafana', 'dashboard', 'visualization', 'metrics'],
  },
  {
    id: 'cicd-6',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Infrastructure as Code (IaC)',
    type: 'code',
    snippet: 'The management of infrastructure (networks, virtual machines, load balancers, etc.) in a descriptive model, using the same versioning as DevOps team uses for source code.',
    description: 'IaC allows for automated, repeatable, and consistent infrastructure provisioning. Popular tools include Terraform, AWS CloudFormation, and Ansible.',
    tags: ['cicd', 'iac', 'infrastructure as code', 'terraform', 'ansible', 'devops'],
  },
  {
    id: 'cicd-17',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Log Aggregation (ELK Stack)',
    type: 'code',
    snippet: 'The practice of consolidating log data from different systems into a single, centralized location for easier analysis, searching, and monitoring. The ELK Stack (Elasticsearch, Logstash, Kibana) is a popular toolset for this.',
    description: 'In a distributed system, checking logs on individual servers is impractical. Log aggregation tools collect logs, parse them into a structured format (Logstash), store and index them (Elasticsearch), and provide a visualization and search interface (Kibana).',
    tags: ['monitoring', 'logs', 'logging', 'elk stack', 'elasticsearch', 'logstash', 'kibana', 'observability'],
  },
  {
    id: 'cicd-8',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Logs vs Metrics vs Traces',
    type: 'code',
    snippet: `Logs: Detailed, timestamped records of discrete events. Good for debugging specific incidents.
Metrics: Aggregated, numerical data over time (e.g., CPU usage, request count). Good for dashboards and alerting.
Traces: Show the lifecycle of a single request as it passes through multiple services. Good for understanding latency in distributed systems.`,
    description: 'The three pillars of observability. Each provides a different perspective on the health and performance of your system.',
    tags: ['monitoring', 'observability', 'logs', 'metrics', 'traces', 'devops'],
  },
  {
    id: 'cicd-7',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Monitoring: The Four Golden Signals',
    type: 'code',
    snippet: `1. Latency: The time it takes to service a request.
2. Traffic: A measure of how much demand is being placed on your system.
3. Errors: The rate of requests that fail.
4. Saturation: How "full" your service is (e.g., CPU, memory usage).`,
    description: 'A set of key metrics defined by Google for monitoring a system\'s health. If you can only measure four things, these are the ones to focus on.',
    tags: ['monitoring', 'sre', 'metrics', 'golden signals', 'observability'],
  },
  {
    id: 'cicd-15',
    category: 'CI/CD',
    subCategory: 'groovy',
    title: 'Pipeline as Code (Jenkins)',
    type: 'code',
    snippet: `pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean install'
            }
        }
    }
}`,
    description: 'The practice of defining your CI/CD pipeline through code (e.g., a Jenkinsfile) rather than configuring it in a UI. This makes the pipeline versionable, reviewable, and reusable.',
    tags: ['cicd', 'jenkins', 'pipeline as code', 'jenkinsfile', 'automation', 'groovy'],
  },
  {
    id: 'cicd-10',
    category: 'CI/CD',
    subCategory: 'prometheus',
    title: 'PromQL Query Basics',
    type: 'code',
    snippet: `// Total number of HTTP requests received
http_requests_total

// Rate of requests over the last 5 minutes
rate(http_requests_total{job="api-server"}[5m])`,
    description: 'Prometheus Query Language (PromQL) is used to query the time series data. This example shows a simple metric selector and a rate function to calculate the per-second average rate of increase.',
    tags: ['monitoring', 'prometheus', 'promql', 'query', 'metrics'],
  },
  {
    id: 'cicd-9',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'Prometheus Overview',
    type: 'code',
    snippet: 'An open-source systems monitoring and alerting toolkit. It collects and stores its metrics as time series data, i.e., metrics information is stored with the timestamp at which it was recorded.',
    description: 'Prometheus works on a "pull" model, where it scrapes metrics from instrumented jobs (endpoints) on a regular basis. It has a powerful query language called PromQL.',
    tags: ['monitoring', 'prometheus', 'metrics', 'time series', 'alerting'],
  },
  {
    id: 'gha-12',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Reusable Workflows (GitHub Actions)',
    type: 'code',
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
  {
    id: 'gha-4',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Running Shell Commands (GitHub Actions)',
    type: 'code',
    snippet: `steps:
  - name: Install dependencies
    run: npm ci
  - name: Run tests
    run: npm test`,
    description: 'The `run` keyword executes command-line programs using the runner\'s shell. For multi-line scripts, use the `|` character.',
    tags: ['github actions', 'run', 'script', 'shell', 'npm'],
  },
  {
    id: 'jenkins-11',
    category: 'CI/CD',
    subCategory: 'groovy',
    title: 'Scripted Pipeline Skeleton (Jenkins)',
    type: 'code',
    snippet: `node {
    stage('Build') {
        echo 'Building...'
        sh 'mvn clean install'
    }
}`,
    description: 'Scripted Pipeline is a more flexible, Groovy-based syntax. It offers more programmatic control compared to Declarative Pipeline but can be more complex to write.',
    tags: ['jenkins', 'pipeline', 'scripted', 'groovy', 'jenkinsfile'],
  },
  {
    id: 'cicd-14',
    category: 'CI/CD',
    subCategory: 'text',
    title: 'SLI / SLO / SLA',
    type: 'code',
    snippet: `SLI (Service Level Indicator): A quantitative measure of some aspect of the level of service that is provided (e.g., request latency).
SLO (Service Level Objective): A target value for an SLI over a period of time (e.g., 99.9% of requests served in under 200ms).
SLA (Service Level Agreement): A formal contract with users that includes consequences for not meeting SLOs.`,
    description: 'A hierarchy of reliability metrics used in Site Reliability Engineering (SRE). SLIs are the raw measurements, SLOs are the internal goals for those measurements, and SLAs are the external promises made to customers.',
    tags: ['monitoring', 'sre', 'sli', 'slo', 'sla', 'metrics', 'reliability'],
  },
  {
    id: 'gha-7',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Uploading/Downloading Artifacts (GitHub Actions)',
    type: 'code',
    snippet: `- name: Upload build artifact
  uses: actions/upload-artifact@v4
  with:
    name: my-app-build
    path: dist/
# In a later job:
- name: Download build artifact
  uses: actions/download-artifact@v4`,
    description: 'Artifacts allow you to persist data between jobs in a workflow. Use `upload-artifact` in one job to save files and `download-artifact` in another job to use them.',
    tags: ['github actions', 'artifacts', 'upload', 'download', 'jobs'],
  },
  {
    id: 'gha-3',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Using an Action (GitHub Actions)',
    type: 'code',
    snippet: `steps:
  - uses: actions/checkout@v4
  - name: Set up Node.js
    uses: actions/setup-node@v4
    with:
      node-version: '20'`,
    description: 'The `uses` keyword specifies an action to run. Actions are reusable units of code. `actions/checkout` and `actions/setup-node` are common official actions.',
    tags: ['github actions', 'actions', 'uses', 'marketplace', 'checkout', 'setup-node'],
  },
  {
    id: 'jenkins-8',
    category: 'CI/CD',
    subCategory: 'groovy',
    title: 'Using Credentials (Jenkins)',
    type: 'code',
    snippet: `environment {
    SECRET_KEY = credentials('my-secret-key-id')
}
steps {
    withCredentials(...) {
        sh 'echo "User is \${USER}"'
    }
}`,
    description: 'Securely handle secrets like API keys and passwords using the Credentials plugin. The `credentials()` helper injects them as environment variables.',
    tags: ['jenkins', 'pipeline', 'credentials', 'secrets', 'security'],
  },
  {
    id: 'gha-8',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Using Secrets & Env Vars (GitHub Actions)',
    type: 'code',
    snippet: `env:
  NODE_ENV: production
steps:
  - env:
      API_KEY: \${{ secrets.MY_API_KEY }}
    run: echo "Using the secret"`,
    description: 'Use `env` to set environment variables. Use the `secrets` context to access encrypted secrets stored in your repository settings.',
    tags: ['github actions', 'secrets', 'env', 'environment variables', 'security'],
  },
  {
    id: 'gha-2',
    category: 'CI/CD',
    subCategory: 'yaml',
    title: 'Workflow Triggers (GitHub Actions)',
    type: 'code',
    snippet: `on:
  push:
    branches: [ 'main' ]
  schedule:
    - cron: '30 5 * * 1-5'
  workflow_dispatch:`,
    description: 'The `on` key defines what events trigger the workflow, such as pushes, scheduled cron jobs, or manual dispatches from the GitHub UI.',
    tags: ['github actions', 'trigger', 'on', 'events', 'push', 'schedule'],
  },
];
