import { CheatSheet } from '../../types';

export const dockerCheatSheets: CheatSheet[] = [
  {
    id: 'docker-1',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Build a Docker Image',
    type: 'code',
    snippet: 'docker build -t <image_name>:<tag> .',
    description: 'Builds a Docker image from a Dockerfile in the current directory, tagging it with a specified name and tag.',
    tags: ['docker', 'build', 'image', 'dockerfile'],
  },
  {
    id: 'docker-lifecycle-diagram',
    category: 'Docker',
    subCategory: 'svg',
    title: 'Docker Lifecycle',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 180" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .label { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; font-family: 'Fira Code', monospace; fill: #94a3b8; text-anchor: middle; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#docker-arrow); }
    </style>
    <defs>
        <marker id="docker-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
        </marker>
    </defs>
    
    <!-- Dockerfile -->
    <rect x="20" y="60" width="120" height="60" class="box"/>
    <text x="80" y="85" class="label">Dockerfile</text>
    <text x="80" y="105" class="sub-label">FROM, RUN, COPY</text>
    
    <line x1="140" y1="90" x2="190" y2="90" class="arrow"/>
    <text x="165" y="80" class="sub-label">docker build</text>
    
    <!-- Image -->
    <rect x="190" y="60" width="180" height="60" class="box"/>
    <text x="280" y="85" class="label">Image</text>
    <text x="280" y="105" class="sub-label">Read-only template with layers</text>
    
    <line x1="370" y1="90" x2="420" y2="90" class="arrow"/>
    <text x="395" y="80" class="sub-label">docker run</text>
    
    <!-- Container -->
    <rect x="420" y="60" width="160" height="60" class="box" stroke-dasharray="4 4" stroke="#34d399"/>
    <text x="500" y="85" class="label">Container</text>
    <text x="500" y="105" class="sub-label">Running instance of an image</text>
</svg>`,
    description: 'A diagram illustrating the core Docker workflow. A `Dockerfile` (a text file with instructions) is used with the `docker build` command to create a read-only `Image`. The `docker run` command then creates a runnable instance of that image, which is called a `Container`.',
    tags: ['docker', 'lifecycle', 'dockerfile', 'image', 'container', 'diagram', 'svg'],
  },
  {
    id: 'docker-14',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Clean Up Docker System',
    type: 'code',
    snippet: 'docker system prune -a --volumes',
    description: 'Removes all unused data: stopped containers, unused networks, dangling images, and build cache. `-a` removes unused images, not just dangling ones. `--volumes` removes unused volumes.',
    tags: ['docker', 'system', 'prune', 'cleanup', 'disk space'],
  },
  {
    id: 'docker-12',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Docker Compose Down',
    type: 'code',
    snippet: 'docker-compose down -v',
    description: 'Stops and removes containers, networks, and volumes created by `docker-compose up`. The `-v` flag removes named volumes.',
    tags: ['docker', 'docker-compose', 'down', 'cleanup'],
  },
  {
    id: 'docker-4',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Docker Compose Up',
    type: 'code',
    snippet: 'docker-compose up -d',
    description: 'Starts and runs your entire multi-container application defined in `docker-compose.yml` in detached mode.',
    tags: ['docker', 'docker-compose', 'up', 'multi-container'],
  },
  {
    id: 'docker-11',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Execute Command in Container',
    type: 'code',
    snippet: 'docker exec -it <container_id_or_name> bash',
    description: 'Opens an interactive bash shell inside a running container, allowing you to run commands within it.',
    tags: ['docker', 'exec', 'shell', 'debug', 'interactive'],
  },
  {
    id: 'docker-15',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Inspect a Container or Image',
    type: 'code',
    snippet: 'docker inspect <container_or_image_id>',
    description: 'Returns low-level information on Docker objects in JSON format. Extremely useful for debugging, as it shows network settings, volumes, and configurations.',
    tags: ['docker', 'inspect', 'debug', 'json', 'details'],
  },
  {
    id: 'docker-5',
    category: 'Docker',
    subCategory: 'bash',
    title: 'List All Containers',
    type: 'code',
    snippet: 'docker ps -a',
    description: 'Shows a list of all containers, including those that are not currently running.',
    tags: ['docker', 'ps', 'list', 'containers', 'all'],
  },
  {
    id: 'docker-8',
    category: 'Docker',
    subCategory: 'bash',
    title: 'List Images',
    type: 'code',
    snippet: 'docker images',
    description: 'Displays all Docker images stored on your local machine.',
    tags: ['docker', 'images', 'list', 'image management'],
  },
  {
    id: 'docker-3',
    category: 'Docker',
    subCategory: 'bash',
    title: 'List Running Containers',
    type: 'code',
    snippet: 'docker ps',
    description: 'Shows a list of all currently running Docker containers.',
    tags: ['docker', 'ps', 'list', 'containers', 'running'],
  },
  {
    id: 'docker-16',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Manage Docker Volumes',
    type: 'code',
    snippet: 'docker volume create my-volume\ndocker volume ls\ndocker volume rm my-volume',
    description: 'Volumes are the preferred mechanism for persisting data generated by and used by Docker containers. These commands create, list, and remove volumes.',
    tags: ['docker', 'volume', 'data', 'persistence', 'storage'],
  },
  {
    id: 'docker-13',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Pull Image from Registry',
    type: 'code',
    snippet: 'docker pull <image_name>:<tag>',
    description: 'Downloads a Docker image or a repository from a registry (like Docker Hub).',
    tags: ['docker', 'pull', 'download', 'image', 'registry'],
  },
  {
    id: 'docker-7',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Remove a Container',
    type: 'code',
    snippet: 'docker rm <container_id_or_name>',
    description: 'Removes a stopped container. Use `docker rm -f <id>` to force remove a running container.',
    tags: ['docker', 'rm', 'remove', 'delete', 'container'],
  },
  {
    id: 'docker-9',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Remove an Image',
    type: 'code',
    snippet: 'docker rmi <image_id_or_name>',
    description: 'Removes a Docker image from your local machine. You must remove all containers using the image first.',
    tags: ['docker', 'rmi', 'remove', 'delete', 'image'],
  },
  {
    id: 'docker-2',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Run a Docker Container',
    type: 'code',
    snippet: 'docker run -d -p 8080:80 --name <container_name> <image_name>',
    description: 'Runs a container from an image in detached mode, maps port 8080 on the host to port 80 in the container, and assigns it a name.',
    tags: ['docker', 'run', 'container', 'port mapping'],
  },
  {
    id: 'docker-6',
    category: 'Docker',
    subCategory: 'bash',
    title: 'Stop and Start a Container',
    type: 'code',
    snippet: 'docker stop <container_id_or_name>\ndocker start <container_id_or_name>',
    description: 'Stops a running container or starts a stopped container using its ID or name.',
    tags: ['docker', 'stop', 'start', 'container management'],
  },
  {
    id: 'docker-10',
    category: 'Docker',
    subCategory: 'bash',
    title: 'View Container Logs',
    type: 'code',
    snippet: 'docker logs -f <container_id_or_name>',
    description: 'Fetches the logs of a container. The `-f` flag follows the log output in real-time.',
    tags: ['docker', 'logs', 'debug', 'container'],
  },
  {
    id: 'dockerfile-9',
    category: 'Docker',
    subCategory: 'dockerfile',
    title: 'Dockerfile: ARG - Build-time Variables',
    type: 'code',
    snippet: 'ARG APP_VERSION=1.0\nENV VERSION=${APP_VERSION}\nRUN echo "Building version ${VERSION}"',
    description: 'Defines a variable that users can pass at build-time using the `--build-arg` flag with `docker build`. Unlike ENV, ARG values are not available in the running container unless also assigned to an ENV.',
    tags: ['dockerfile', 'arg', 'build-arg', 'variable'],
  },
  {
    id: 'dockerfile-6',
    category: 'Docker',
    subCategory: 'dockerfile',
    title: 'Dockerfile: CMD - Default Command',
    type: 'code',
    snippet: 'CMD ["python", "app.py"]',
    description: 'Provides defaults for an executing container. These defaults can include an executable, or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well.',
    tags: ['dockerfile', 'cmd', 'command', 'run'],
  },
  {
    id: 'dockerfile-3',
    category: 'Docker',
    subCategory: 'dockerfile',
    title: 'Dockerfile: COPY - Copy Files',
    type: 'code',
    snippet: 'COPY ./local/path /container/path',
    description: 'Copies new files or directories from the build context to the filesystem of the container at the specified path.',
    tags: ['dockerfile', 'copy', 'files', 'add'],
  },
  {
    id: 'dockerfile-7',
    category: 'Docker',
    subCategory: 'dockerfile',
    title: 'Dockerfile: ENTRYPOINT - Configure Executable',
    type: 'code',
    snippet: 'ENTRYPOINT ["/usr/bin/java", "-jar", "app.jar"]',
    description: 'Configures a container that will run as an executable. Allows you to configure a container that will run as an executable. It cannot be easily overridden with `docker run`.',
    tags: ['dockerfile', 'entrypoint', 'executable', 'run'],
  },
  {
    id: 'dockerfile-5',
    category: 'Docker',
    subCategory: 'dockerfile',
    title: 'Dockerfile: EXPOSE - Expose Port',
    type: 'code',
    snippet: 'EXPOSE 8080',
    description: 'Informs Docker that the container listens on the specified network ports at runtime. This is documentation and does not actually publish the port.',
    tags: ['dockerfile', 'expose', 'port', 'networking'],
  },
  {
    id: 'dockerfile-1',
    category: 'Docker',
    subCategory: 'dockerfile',
    title: 'Dockerfile: FROM - Set Base Image',
    type: 'code',
    snippet: 'FROM ubuntu:22.04',
    description: 'Specifies the base image to use for building the new image. This must be the first instruction in a Dockerfile.',
    tags: ['dockerfile', 'from', 'base image', 'image'],
  },
  {
    id: 'dockerfile-10',
    category: 'Docker',
    subCategory: 'dockerfile',
    title: 'Dockerfile: Multi-stage Builds',
    type: 'code',
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
  {
    id: 'dockerfile-2',
    category: 'Docker',
    subCategory: 'dockerfile',
    title: 'Dockerfile: RUN - Execute Command',
    type: 'code',
    snippet: 'RUN apt-get update && apt-get install -y --no-install-recommends \\\n    package-name',
    description: 'Executes any commands in a new layer on top of the current image and commits the results. Often used for installing software packages.',
    tags: ['dockerfile', 'run', 'install', 'command'],
  },
  {
    id: 'dockerfile-8',
    category: 'Docker',
    subCategory: 'dockerfile',
    title: 'Dockerfile: ENV - Set Environment Variable',
    type: 'code',
    snippet: 'ENV DB_HOST=mydatabase\nENV APP_VERSION=1.0',
    description: 'Sets the environment variable <key> to the value <value>. This value will be in the environment for all subsequent instructions in the build stage.',
    tags: ['dockerfile', 'env', 'variable', 'environment'],
  },
  {
    id: 'dockerfile-4',
    category: 'Docker',
    subCategory: 'dockerfile',
    title: 'Dockerfile: WORKDIR - Set Working Directory',
    type: 'code',
    snippet: 'WORKDIR /app',
    description: 'Sets the working directory for any subsequent RUN, CMD, ENTRYPOINT, COPY, and ADD instructions.',
    tags: ['dockerfile', 'workdir', 'directory', 'path'],
  },
];
