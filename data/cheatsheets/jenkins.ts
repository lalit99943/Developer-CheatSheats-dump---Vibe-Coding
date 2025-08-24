import { CheatSheet } from '../../types';

export const jenkinsCheatSheets: CheatSheet[] = [
  {
    id: 'jenkins-1',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Declarative Pipeline Skeleton',
    snippet: `pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // ...
            }
        }
        stage('Test') {
            steps {
                // ...
            }
        }
        stage('Deploy') {
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
    id: 'jenkins-2',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Agent Directive',
    snippet: `agent any // Run on any available agent
agent { label 'linux' } // Run on an agent with the 'linux' label
agent { docker 'maven:3.8.1-jdk-11' } // Run inside a Docker container`,
    description: 'The `agent` directive specifies where the entire Pipeline, or a specific stage, will execute in the Jenkins environment.',
    tags: ['jenkins', 'pipeline', 'agent', 'docker', 'label'],
  },
  {
    id: 'jenkins-3',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Common Steps (sh, echo, pwd)',
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
    id: 'jenkins-4',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Environment Variables',
    snippet: `environment {
    DB_NAME = 'test_db'
    AWS_REGION = 'us-east-1'
}
stages {
    stage('Test') {
        steps {
            sh 'echo "Using database \${DB_NAME}"'
        }
    }
}`,
    description: 'The `environment` directive specifies a sequence of key-value pairs which will be defined as environment variables for all steps, or stage-specific steps.',
    tags: ['jenkins', 'pipeline', 'environment', 'variables', 'config'],
  },
  {
    id: 'jenkins-5',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Post-build Actions',
    snippet: `post {
    always {
        echo 'This will always run'
    }
    success {
        echo 'This will run only if the build is successful'
    }
    failure {
        echo 'This will run only if the build failed'
    }
}`,
    description: 'The `post` section defines actions that are run at the end of the Pipeline’s or stage’s run, depending on the outcome.',
    tags: ['jenkins', 'pipeline', 'post', 'notifications', 'cleanup'],
  },
  {
    id: 'jenkins-6',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Triggers (Cron and PollSCM)',
    snippet: `triggers {
    cron('H 2 * * *') // Run every night at 2 AM
    pollSCM('H/15 * * * *') // Poll for SCM changes every 15 minutes
}`,
    description: 'The `triggers` directive defines the automated ways in which the Pipeline should be re-triggered. `cron` for time-based scheduling, `pollSCM` for checking for new commits.',
    tags: ['jenkins', 'pipeline', 'triggers', 'cron', 'pollscm', 'automation'],
  },
  {
    id: 'jenkins-7',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Parameters',
    snippet: `parameters {
    string(name: 'BRANCH', defaultValue: 'main', description: 'Branch to build')
    booleanParam(name: 'RUN_DEPLOY', defaultValue: false, description: 'Deploy to production?')
}
stages {
    stage('Build') {
        steps {
            checkout([$class: 'GitSCM', branches: [[name: params.BRANCH]]])
        }
    }
}`,
    description: 'Parameters allow your Pipeline to accept user input when a build is triggered. The values are available in the `params` object.',
    tags: ['jenkins', 'pipeline', 'parameters', 'input', 'dynamic'],
  },
  {
    id: 'jenkins-8',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Using Credentials',
    snippet: `environment {
    // ID of the credential configured in Jenkins
    SECRET_KEY = credentials('my-secret-key-id')
}
steps {
    sh 'echo "The secret is \${SECRET_KEY}"' // Use with caution!
    // For username/password
    withCredentials([usernamePassword(credentialsId: 'my-user-pass', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
        sh 'echo "User is \${USER}"'
    }
}`,
    description: 'Securely handle secrets like API keys and passwords using the Credentials plugin. The `credentials()` helper injects them as environment variables. `withCredentials` is safer as it scopes them to a block.',
    tags: ['jenkins', 'pipeline', 'credentials', 'secrets', 'security'],
  },
  {
    id: 'jenkins-9',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Archiving Artifacts',
    snippet: `post {
    success {
        archiveArtifacts artifacts: 'target/*.jar', fingerprint: true
    }
}`,
    description: 'The `archiveArtifacts` step saves files from the workspace to be stored with the build record. This is used for build outputs like JARs, WARs, or reports.',
    tags: ['jenkins', 'pipeline', 'artifacts', 'archive', 'build'],
  },
  {
    id: 'jenkins-10',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Tools Directive',
    snippet: `tools {
    maven 'Maven_3.8'
    jdk 'JDK_11'
}
steps {
    sh 'mvn --version'
    sh 'java -version'
}`,
    description: 'The `tools` directive allows you to specify tools to be automatically installed (if not present) and added to the PATH. Tool names must match those configured in "Manage Jenkins -> Global Tool Configuration".',
    tags: ['jenkins', 'pipeline', 'tools', 'maven', 'jdk', 'config'],
  },
  {
    id: 'jenkins-11',
    category: 'Jenkins',
    subCategory: 'groovy',
    title: 'Scripted Pipeline Skeleton',
    snippet: `node {
    stage('Build') {
        echo 'Building...'
        sh 'mvn clean install'
    }
    stage('Test') {
        echo 'Testing...'
        sh 'mvn test'
    }
}`,
    description: 'Scripted Pipeline is a more flexible, Groovy-based syntax. It offers more programmatic control compared to Declarative Pipeline but can be more complex to write.',
    tags: ['jenkins', 'pipeline', 'scripted', 'groovy', 'jenkinsfile'],
  },
  {
    id: 'jenkins-12',
    category: 'Jenkins',
    subCategory: 'text',
    title: 'Blue Ocean UI',
    snippet: 'Blue Ocean is a modern user interface for Jenkins, designed to improve user experience and clarity for CI/CD pipelines.',
    description: 'It provides a sophisticated visualization of your software delivery pipeline, helps you quickly identify problems, and improves team productivity. It is installed as a plugin.',
    tags: ['jenkins', 'ui', 'blue ocean', 'visualization', 'plugin'],
  },
];