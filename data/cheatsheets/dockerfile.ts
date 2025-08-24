import { CheatSheet } from '../../types';

export const dockerfileCheatSheets: CheatSheet[] = [
  {
    id: 'dockerfile-1',
    category: 'Dockerfile',
    subCategory: 'dockerfile',
    title: 'FROM - Set Base Image',
    snippet: 'FROM ubuntu:22.04',
    description: 'Specifies the base image to use for building the new image. This must be the first instruction in a Dockerfile.',
    tags: ['dockerfile', 'from', 'base image', 'image'],
  },
  {
    id: 'dockerfile-2',
    category: 'Dockerfile',
    subCategory: 'dockerfile',
    title: 'RUN - Execute Command',
    snippet: 'RUN apt-get update && apt-get install -y --no-install-recommends \\\n    package-name',
    description: 'Executes any commands in a new layer on top of the current image and commits the results. Often used for installing software packages.',
    tags: ['dockerfile', 'run', 'install', 'command'],
  },
  {
    id: 'dockerfile-3',
    category: 'Dockerfile',
    subCategory: 'dockerfile',
    title: 'COPY - Copy Files',
    snippet: 'COPY ./local/path /container/path',
    description: 'Copies new files or directories from the build context to the filesystem of the container at the specified path.',
    tags: ['dockerfile', 'copy', 'files', 'add'],
  },
  {
    id: 'dockerfile-4',
    category: 'Dockerfile',
    subCategory: 'dockerfile',
    title: 'WORKDIR - Set Working Directory',
    snippet: 'WORKDIR /app',
    description: 'Sets the working directory for any subsequent RUN, CMD, ENTRYPOINT, COPY, and ADD instructions.',
    tags: ['dockerfile', 'workdir', 'directory', 'path'],
  },
  {
    id: 'dockerfile-5',
    category: 'Dockerfile',
    subCategory: 'dockerfile',
    title: 'EXPOSE - Expose Port',
    snippet: 'EXPOSE 8080',
    description: 'Informs Docker that the container listens on the specified network ports at runtime. This is documentation and does not actually publish the port.',
    tags: ['dockerfile', 'expose', 'port', 'networking'],
  },
  {
    id: 'dockerfile-6',
    category: 'Dockerfile',
    subCategory: 'dockerfile',
    title: 'CMD - Default Command',
    snippet: 'CMD ["python", "app.py"]',
    description: 'Provides defaults for an executing container. These defaults can include an executable, or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well.',
    tags: ['dockerfile', 'cmd', 'command', 'run'],
  },
  {
    id: 'dockerfile-7',
    category: 'Dockerfile',
    subCategory: 'dockerfile',
    title: 'ENTRYPOINT - Configure Executable',
    snippet: 'ENTRYPOINT ["/usr/bin/java", "-jar", "app.jar"]',
    description: 'Configures a container that will run as an executable. Allows you to configure a container that will run as an executable. It cannot be easily overridden with `docker run`.',
    tags: ['dockerfile', 'entrypoint', 'executable', 'run'],
  },
  {
    id: 'dockerfile-8',
    category: 'Dockerfile',
    subCategory: 'dockerfile',
    title: 'ENV - Set Environment Variable',
    snippet: 'ENV DB_HOST=mydatabase\nENV APP_VERSION=1.0',
    description: 'Sets the environment variable <key> to the value <value>. This value will be in the environment for all subsequent instructions in the build stage.',
    tags: ['dockerfile', 'env', 'variable', 'environment'],
  },
  {
    id: 'dockerfile-9',
    category: 'Dockerfile',
    subCategory: 'dockerfile',
    title: 'ARG - Build-time Variables',
    snippet: 'ARG APP_VERSION=1.0\nENV VERSION=${APP_VERSION}\nRUN echo "Building version ${VERSION}"',
    description: 'Defines a variable that users can pass at build-time using the `--build-arg` flag with `docker build`. Unlike ENV, ARG values are not available in the running container unless also assigned to an ENV.',
    tags: ['dockerfile', 'arg', 'build-arg', 'variable'],
  },
  {
    id: 'dockerfile-10',
    category: 'Dockerfile',
    subCategory: 'dockerfile',
    title: 'Multi-stage Builds',
    snippet: `# Build stage
FROM maven:3.8-jdk-11 AS build
WORKDIR /app
COPY . .
RUN mvn clean package

# Final stage
FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=build /app/target/my-app.jar .
CMD ["java", "-jar", "my-app.jar"]`,
    description: 'Use multiple FROM instructions in your Dockerfile. You can selectively copy artifacts from one stage to another, leaving behind everything you don\'t want in the final image. This creates significantly smaller, more secure production images.',
    tags: ['dockerfile', 'multi-stage', 'optimization', 'image size', 'best practice'],
  },
];