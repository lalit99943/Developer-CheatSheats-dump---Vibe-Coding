import { CheatSheet } from '../../types';

export const mavenCheatSheets: CheatSheet[] = [
  {
    id: 'maven-1',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Build Project (Clean and Install)',
    snippet: 'mvn clean install',
    description: 'A common command that first cleans the project (deletes the target directory) and then builds it, runs tests, and installs the resulting artifact into the local repository.',
    tags: ['maven', 'build', 'clean', 'install', 'lifecycle'],
  },
  {
    id: 'maven-2',
    category: 'Maven',
    subCategory: 'xml',
    title: 'Basic pom.xml Structure',
    snippet: `<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>my-app</artifactId>
  <version>1.0-SNAPSHOT</version>
</project>`,
    description: "The minimal required configuration for a Maven Project Object Model (POM) file. It defines the project's unique coordinates.",
    tags: ['maven', 'pom', 'xml', 'structure', 'coordinates'],
  },
  {
    id: 'maven-3',
    category: 'Maven',
    subCategory: 'xml',
    title: 'Declare a Dependency',
    snippet: `<dependencies>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>`,
    description: "How to add an external library (dependency) to your project. Dependencies are listed inside the <dependencies> block. The 'scope' element defines when the dependency is needed (e.g., only for tests).",
    tags: ['maven', 'pom', 'dependency', 'library', 'junit'],
  },
  {
    id: 'maven-4',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Package the Application',
    snippet: 'mvn package',
    description: "Compiles the code, runs tests, and packages the project into a distributable format (like a JAR or WAR file) in the 'target' directory.",
    tags: ['maven', 'package', 'build', 'jar', 'war'],
  },
  {
    id: 'maven-5',
    category: 'Maven',
    subCategory: 'bash',
    title: 'View Dependency Tree',
    snippet: 'mvn dependency:tree',
    description: "Displays the project's dependency tree, showing which dependencies are included and how transitive dependencies are resolved. Very useful for debugging version conflicts.",
    tags: ['maven', 'dependency', 'tree', 'debug', 'conflict'],
  },
  {
    id: 'maven-6',
    category: 'Maven',
    subCategory: 'xml',
    title: 'Configure a Build Plugin',
    snippet: `<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>3.8.1</version>
      <configuration>
        <source>1.8</source>
        <target>1.8</target>
      </configuration>
    </plugin>
  </plugins>
</build>`,
    description: "Plugins extend Maven's functionality. This example configures the Maven Compiler Plugin to use Java version 8 for source and target compilation.",
    tags: ['maven', 'pom', 'plugin', 'build', 'compiler', 'java'],
  },
  {
    id: 'maven-7',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Skip Tests During Build',
    snippet: 'mvn install -DskipTests',
    description: 'Builds the project without running the tests. This is useful for quickly creating a package when you are confident the tests will pass.',
    tags: ['maven', 'test', 'skip', 'build', 'property'],
  },
  {
    id: 'maven-8',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Create a New Project',
    snippet: 'mvn archetype:generate -DgroupId=com.example -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false',
    description: "Generates a new Maven project from a template (archetype). The 'maven-archetype-quickstart' is a common choice for a simple Java application.",
    tags: ['maven', 'archetype', 'generate', 'new project', 'bootstrap'],
  },
  {
    id: 'maven-9',
    category: 'Maven',
    subCategory: 'xml',
    title: 'Use Properties in pom.xml',
    snippet: `<properties>
  <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  <java.version>11</java.version>
  <junit.version>5.8.2</junit.version>
</properties>

<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>\${junit.version}</version>
    <scope>test</scope>
  </dependency>
</dependencies>`,
    description: "Define properties to manage versions and other values in a central location. Reference them elsewhere in the POM using the ${...} syntax.",
    tags: ['maven', 'pom', 'properties', 'versions', 'best practice'],
  },
  {
    id: 'maven-10',
    category: 'Maven',
    subCategory: 'xml',
    title: 'Define a Build Profile',
    snippet: `<profiles>
  <profile>
    <id>production</id>
    <properties>
      <env>prod</env>
    </properties>
  </profile>
</profiles>`,
    description: "Profiles allow you to customize the build for different environments (e.g., development, production). Activate a profile using the '-P' flag: 'mvn package -Pproduction'.",
    tags: ['maven', 'pom', 'profile', 'environment', 'build'],
  },
  {
    id: 'maven-11',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Clean the Project',
    snippet: 'mvn clean',
    description: 'Deletes the `target` directory, which contains all compiled classes, packaged artifacts, and other build outputs.',
    tags: ['maven', 'clean', 'build', 'target'],
  },
  {
    id: 'maven-12',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Show Effective POM',
    snippet: 'mvn help:effective-pom',
    description: 'Displays the final POM that Maven uses to build the project. This includes settings inherited from parent POMs, profiles, and default values.',
    tags: ['maven', 'pom', 'effective-pom', 'debug', 'build'],
  },
  {
    id: 'maven-13',
    category: 'Maven',
    subCategory: 'xml',
    title: 'Dependency Scopes (compile, provided, runtime)',
    snippet: `<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>4.0.1</version>
    <scope>provided</scope> <!-- Also: compile, runtime -->
</dependency>`,
    description: 'Defines the scope of a dependency. `compile` is the default. `provided` means the dependency is supplied by the JDK or container (e.g., a servlet container). `runtime` is needed for execution but not compilation.',
    tags: ['maven', 'dependency', 'scope', 'compile', 'provided', 'runtime'],
  },
  {
    id: 'maven-14',
    category: 'Maven',
    subCategory: 'xml',
    title: 'Exclude Transitive Dependencies',
    snippet: `<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter</artifactId>
  <version>2.5.4</version>
  <exclusions>
    <exclusion>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-logging</artifactId>
    </exclusion>
  </exclusions>
</dependency>`,
    description: 'Prevents a specific transitive dependency from being included. This is useful for resolving version conflicts or replacing a default library with a different one (e.g., log4j2 instead of logback).',
    tags: ['maven', 'dependency', 'exclude', 'transitive', 'conflict'],
  },
  {
    id: 'maven-15',
    category: 'Maven',
    subCategory: 'xml',
    title: 'Using dependencyManagement and BOMs',
    snippet: `<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-dependencies</artifactId>
      <version>2.5.4</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>`,
    description: 'The `<dependencyManagement>` section is used to centralize dependency version information. Importing a Bill of Materials (BOM) allows you to manage the versions of a whole set of related libraries.',
    tags: ['maven', 'dependencyManagement', 'bom', 'versions', 'spring boot'],
  },
  {
    id: 'maven-16',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Deploy Artifact to Remote Repository',
    snippet: 'mvn deploy',
    description: 'Runs after `install` in the build lifecycle. It copies the final artifact to the remote repository for sharing with other developers and projects. Requires `<distributionManagement>` configuration in the POM.',
    tags: ['maven', 'deploy', 'lifecycle', 'repository', 'artifact'],
  },
  {
    id: 'maven-17',
    category: 'Maven',
    subCategory: 'xml',
    title: 'Configure Distribution Management',
    snippet: `<distributionManagement>
  <repository>
    <id>my-releases</id>
    <url>https://nexus.example.com/repository/maven-releases/</url>
  </repository>
  <snapshotRepository>
    <id>my-snapshots</id>
    <url>https://nexus.example.com/repository/maven-snapshots/</url>
  </snapshotRepository>
</distributionManagement>`,
    description: 'Specifies the remote repositories where your project artifacts will be deployed. This is necessary for the `mvn deploy` command to work.',
    tags: ['maven', 'pom', 'distributionManagement', 'deploy', 'repository', 'nexus'],
  },
  {
    id: 'maven-18',
    category: 'Maven',
    subCategory: 'xml',
    title: 'Multi-Module Project Setup (Parent POM)',
    snippet: `<packaging>pom</packaging>

<modules>
  <module>my-app-core</module>
  <module>my-app-web</module>
</modules>`,
    description: 'In the parent POM of a multi-module project, set packaging to `pom` and list the sub-modules. This allows you to build all modules with a single command from the parent directory.',
    tags: ['maven', 'pom', 'multi-module', 'parent', 'modules'],
  },
  {
    id: 'maven-19',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Run a Single Test Class',
    snippet: 'mvn test -Dtest=MyTestClass',
    description: 'Runs only the tests in a specific class. You can also run a single test method with `-Dtest=MyTestClass#myTestMethod`.',
    tags: ['maven', 'test', 'surefire', 'single test', 'debug'],
  },
  {
    id: 'maven-20',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Check for Dependency Updates',
    snippet: 'mvn versions:display-dependency-updates',
    description: 'Uses the Versions Maven Plugin to scan your project\'s dependencies and produces a report of those that have newer versions available.',
    tags: ['maven', 'plugin', 'versions', 'dependency', 'update', 'check'],
  },
  {
    id: 'maven-21',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Run a Spring Boot Application',
    snippet: 'mvn spring-boot:run',
    description: 'A common command when using the Spring Boot Maven Plugin. It starts the application in an embedded container without needing to package it first.',
    tags: ['maven', 'plugin', 'spring boot', 'run', 'java'],
  },
  {
    id: 'maven-22',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Build with a Specific Profile',
    snippet: 'mvn package -P production',
    description: 'Activates a build profile defined in the pom.xml. Profiles are used to customize build settings for different environments, like development vs. production.',
    tags: ['maven', 'build', 'profile', 'activate', 'environment'],
  },
  {
    id: 'maven-23',
    category: 'Maven',
    subCategory: 'bash',
    title: 'Use the Maven Wrapper',
    snippet: './mvnw clean install',
    description: 'The Maven Wrapper (`mvnw`) is a script that allows developers to run a Maven build without having to install Maven manually. It automatically downloads and uses the specific Maven version defined in the project, ensuring build consistency across different machines.',
    tags: ['maven', 'wrapper', 'mvnw', 'build', 'consistency', 'best practice'],
  },
  {
    id: 'maven-lifecycle-diagram',
    category: 'Maven',
    subCategory: 'svg',
    title: 'Maven Build Lifecycle',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .label { font-size: 12px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 10px; fill: #94a3b8; text-anchor: middle; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#maven-arrow); }
    </style>
    <defs>
        <marker id="maven-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
        </marker>
    </defs>
    
    <text x="300" y="30" class="label" font-size="14">Default Build Lifecycle (Running a phase executes all preceding phases)</text>

    <g id="validate">
      <rect x="20" y="80" width="70" height="40" class="box"/><text x="55" y="105" class="label">validate</text>
    </g>
    <line x1="90" y1="100" x2="110" y2="100" class="arrow"/>
    
    <g id="compile">
      <rect x="110" y="80" width="70" height="40" class="box"/><text x="145" y="105" class="label">compile</text>
    </g>
    <line x1="180" y1="100" x2="200" y2="100" class="arrow"/>
    
    <g id="test">
      <rect x="200" y="80" width="70" height="40" class="box"/><text x="235" y="105" class="label">test</text>
    </g>
    <line x1="270" y1="100" x2="290" y2="100" class="arrow"/>

    <g id="package">
      <rect x="290" y="80" width="70" height="40" class="box"/><text x="325" y="105" class="label">package</text>
    </g>
    <line x1="360" y1="100" x2="380" y2="100" class="arrow"/>
    
    <g id="install">
      <rect x="380" y="80" width="70" height="40" class="box"/><text x="415" y="105" class="label">install</text>
    </g>
    <line x1="450" y1="100" x2="470" y2="100" class="arrow"/>

    <g id="deploy">
      <rect x="470" y="80" width="70" height="40" class="box"/><text x="505" y="105" class="label">deploy</text>
    </g>
    
    <text x="300" y="150" class="sub-label">e.g., 'mvn install' runs validate, compile, test, package, and install</text>
</svg>`,
    description: 'A diagram of the main phases in the default Maven build lifecycle. When you run a command like `mvn install`, Maven executes all phases in order up to and including `install`. This ensures a consistent build process.',
    tags: ['maven', 'lifecycle', 'build', 'diagram', 'ci-cd', 'svg'],
  },
];
