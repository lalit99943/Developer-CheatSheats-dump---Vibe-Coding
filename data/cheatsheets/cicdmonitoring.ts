import { CheatSheet } from '../../types';

export const cicdMonitoringCheatSheets: CheatSheet[] = [
  {
    id: 'cicd-1',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Continuous Integration (CI)',
    snippet: 'CI is the practice of automating the integration of code changes from multiple contributors into a single software project.',
    description: 'The main goal is to prevent integration problems. A CI server automatically builds the code and runs tests every time a change is pushed to the repository, providing rapid feedback to developers.',
    tags: ['cicd', 'ci', 'continuous integration', 'devops', 'automation'],
  },
  {
    id: 'cicd-2',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Continuous Delivery/Deployment (CD)',
    snippet: `Continuous Delivery: Code changes are automatically built, tested, and prepared for a release to production.
Continuous Deployment: Extends delivery by automatically deploying every passed build to production.`,
    description: 'CD automates the release process. Continuous Delivery requires a manual approval step to deploy to production, while Continuous Deployment is fully automated.',
    tags: ['cicd', 'cd', 'continuous delivery', 'continuous deployment', 'devops', 'release'],
  },
  {
    id: 'cicd-3',
    category: 'CI/CD and Monitoring',
    subCategory: 'yaml',
    title: 'GitHub Actions: Basic Workflow',
    snippet: `name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run a one-line script
        run: echo Hello, world!`,
    description: 'A basic workflow file for GitHub Actions. This workflow is triggered on every push and pull request, runs on an Ubuntu virtual machine, checks out the code, and executes a simple script.',
    tags: ['cicd', 'github actions', 'yaml', 'workflow', 'automation'],
  },
  {
    id: 'cicd-4',
    category: 'CI/CD and Monitoring',
    subCategory: 'yaml',
    title: 'GitHub Actions: Build and Test Node.js',
    snippet: `jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test`,
    description: 'A common job for a Node.js project. It uses the `setup-node` action, installs dependencies using `npm ci` for consistency, builds the project, and runs tests.',
    tags: ['cicd', 'github actions', 'nodejs', 'npm', 'build', 'test'],
  },
  {
    id: 'cicd-5',
    category: 'CI/CD and Monitoring',
    subCategory: 'bash',
    title: 'Docker in CI/CD: Build and Push',
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
    id: 'cicd-6',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Infrastructure as Code (IaC)',
    snippet: 'The management of infrastructure (networks, virtual machines, load balancers, etc.) in a descriptive model, using the same versioning as DevOps team uses for source code.',
    description: 'IaC allows for automated, repeatable, and consistent infrastructure provisioning. Popular tools include Terraform, AWS CloudFormation, and Ansible.',
    tags: ['cicd', 'iac', 'infrastructure as code', 'terraform', 'ansible', 'devops'],
  },
  {
    id: 'cicd-7',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Monitoring: Four Golden Signals',
    snippet: `1. Latency: The time it takes to service a request.
2. Traffic: A measure of how much demand is being placed on your system.
3. Errors: The rate of requests that fail.
4. Saturation: How "full" your service is (e.g., CPU, memory usage).`,
    description: 'A set of key metrics defined by Google for monitoring a system\'s health. If you can only measure four things, these are the ones to focus on.',
    tags: ['monitoring', 'sre', 'metrics', 'golden signals', 'observability'],
  },
  {
    id: 'cicd-8',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Monitoring: Logs vs Metrics vs Traces',
    snippet: `Logs: Detailed, timestamped records of discrete events. Good for debugging specific incidents.
Metrics: Aggregated, numerical data over time (e.g., CPU usage, request count). Good for dashboards and alerting.
Traces: Show the lifecycle of a single request as it passes through multiple services. Good for understanding latency in distributed systems.`,
    description: 'The three pillars of observability. Each provides a different perspective on the health and performance of your system.',
    tags: ['monitoring', 'observability', 'logs', 'metrics', 'traces', 'devops'],
  },
  {
    id: 'cicd-9',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Prometheus Overview',
    snippet: 'An open-source systems monitoring and alerting toolkit. It collects and stores its metrics as time series data, i.e., metrics information is stored with the timestamp at which it was recorded.',
    description: 'Prometheus works on a "pull" model, where it scrapes metrics from instrumented jobs (endpoints) on a regular basis. It has a powerful query language called PromQL.',
    tags: ['monitoring', 'prometheus', 'metrics', 'time series', 'alerting'],
  },
  {
    id: 'cicd-10',
    category: 'CI/CD and Monitoring',
    subCategory: 'prometheus',
    title: 'Basic PromQL Query',
    snippet: `// Total number of HTTP requests received
http_requests_total

// Rate of requests over the last 5 minutes
rate(http_requests_total{job="api-server"}[5m])`,
    description: 'Prometheus Query Language (PromQL) is used to query the time series data. This example shows a simple metric selector and a rate function to calculate the per-second average rate of increase.',
    tags: ['monitoring', 'prometheus', 'promql', 'query', 'metrics'],
  },
  {
    id: 'cicd-11',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Grafana Overview',
    snippet: 'An open-source platform for monitoring and observability. It allows you to query, visualize, alert on, and understand your metrics no matter where they are stored.',
    description: 'Grafana is primarily used for creating dashboards. It connects to various data sources (like Prometheus, Loki, Elasticsearch) and provides a rich set of visualization options like graphs, tables, and heatmaps.',
    tags: ['monitoring', 'grafana', 'dashboard', 'visualization', 'metrics'],
  },
  {
    id: 'cicd-12',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Canary Deployment Strategy',
    snippet: 'A strategy where the new version of an application is gradually rolled out to a small subset of users before making it available to everyone.',
    description: 'This technique allows you to test the new version in a live production environment with minimal impact. If the new version shows errors or poor performance, it can be rolled back without affecting the majority of users.',
    tags: ['cicd', 'deployment strategy', 'canary', 'release', 'devops'],
  },
  {
    id: 'cicd-13',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Blue-Green Deployment Strategy',
    snippet: 'A strategy that reduces downtime by running two identical production environments called "Blue" and "Green". At any time, only one of them is live.',
    description: 'To deploy a new version, you deploy and test it on the inactive (Green) environment. Once it\'s ready, you switch the router to send all traffic to Green. This allows for near-zero downtime and instant rollback by simply switching the router back to Blue.',
    tags: ['cicd', 'deployment strategy', 'blue-green', 'release', 'devops', 'zero-downtime'],
  },
  {
    id: 'cicd-14',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'SLI / SLO / SLA',
    snippet: `SLI (Service Level Indicator): A quantitative measure of some aspect of the level of service that is provided (e.g., request latency).
SLO (Service Level Objective): A target value for an SLI over a period of time (e.g., 99.9% of requests served in under 200ms).
SLA (Service Level Agreement): A formal contract with users that includes consequences for not meeting SLOs.`,
    description: 'A hierarchy of reliability metrics used in Site Reliability Engineering (SRE). SLIs are the raw measurements, SLOs are the internal goals for those measurements, and SLAs are the external promises made to customers.',
    tags: ['monitoring', 'sre', 'sli', 'slo', 'sla', 'metrics', 'reliability'],
  },
  {
    id: 'cicd-15',
    category: 'CI/CD and Monitoring',
    subCategory: 'groovy',
    title: 'Pipeline as Code (Jenkinsfile)',
    snippet: `pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean install'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
    }
}`,
    description: 'The practice of defining your CI/CD pipeline through code (e.g., a Jenkinsfile) rather than configuring it in a UI. This makes the pipeline versionable, reviewable, and reusable.',
    tags: ['cicd', 'jenkins', 'pipeline as code', 'jenkinsfile', 'automation', 'groovy'],
  },
  {
    id: 'cicd-16',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Artifact Repository',
    snippet: 'A storage system designed to host and manage binary artifacts (e.g., JARs, Docker images, npm packages) generated and used throughout the software development lifecycle. Examples: JFrog Artifactory, Sonatype Nexus.',
    description: 'An artifact repository acts as a single source of truth for your built artifacts. CI servers push artifacts to it, and CD servers pull them for deployment. It improves reliability and traceability of builds.',
    tags: ['cicd', 'artifact repository', 'nexus', 'artifactory', 'binary', 'devops'],
  },
  {
    id: 'cicd-17',
    category: 'CI/CD and Monitoring',
    subCategory: 'text',
    title: 'Log Aggregation (ELK Stack)',
    snippet: 'The practice of consolidating log data from different systems into a single, centralized location for easier analysis, searching, and monitoring. The ELK Stack (Elasticsearch, Logstash, Kibana) is a popular toolset for this.',
    description: 'In a distributed system, checking logs on individual servers is impractical. Log aggregation tools collect logs, parse them into a structured format (Logstash), store and index them (Elasticsearch), and provide a visualization and search interface (Kibana).',
    tags: ['monitoring', 'logs', 'logging', 'elk stack', 'elasticsearch', 'logstash', 'kibana', 'observability'],
  },
  {
    id: 'cicd-18',
    category: 'CI/CD and Monitoring',
    subCategory: 'yaml',
    title: 'GitHub Actions: Caching Dependencies',
    snippet: `- name: Cache node modules
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-`,
    description: 'Improves workflow execution time by caching dependencies or other files that are expensive to create. This example caches npm packages, using the `package-lock.json` file as the key to ensure the cache is only restored for the exact same set of dependencies.',
    tags: ['cicd', 'github actions', 'cache', 'performance', 'optimization'],
  },
];
