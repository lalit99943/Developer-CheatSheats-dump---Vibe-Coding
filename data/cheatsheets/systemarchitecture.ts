import { CheatSheet, ChartConfig } from '../../types';

export const systemArchitectureCheatSheets: CheatSheet[] = [
  {
    id: 'sysarch-1',
    category: 'System Architecture',
    subCategory: 'text',
    title: 'CAP Theorem',
    snippet: `States that a distributed data store can only provide two of the following three guarantees:
- Consistency: Every read receives the most recent write or an error.
- Availability: Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
- Partition Tolerance: The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.`,
    description: 'In a distributed system, you can only choose two out of three: Consistency, Availability, and Partition Tolerance. In modern systems, Partition Tolerance is a must, so the trade-off is typically between Consistency and Availability.',
    tags: ['system architecture', 'distributed systems', 'cap theorem', 'consistency', 'availability', 'partition tolerance'],
  },
  {
    id: 'sysarch-2',
    category: 'System Architecture',
    subCategory: 'text',
    title: 'Load Balancer',
    snippet: `A device or service that distributes network or application traffic across a number of servers.
Common Algorithms:
- Round Robin: Distributes requests sequentially.
- Least Connections: Sends traffic to the server with the fewest active connections.
- IP Hash: Distributes requests based on the client's IP address.`,
    description: 'Load balancers are used to increase capacity (concurrent users) and reliability of applications. They improve the overall performance of applications by decreasing the burden on servers.',
    tags: ['system architecture', 'load balancer', 'scalability', 'availability', 'networking'],
  },
  {
    id: 'sysarch-3',
    category: 'System Architecture',
    subCategory: 'text',
    title: 'API Gateway',
    snippet: `An API management tool that sits between a client and a collection of backend services.
Responsibilities:
- Routing: Directs incoming requests to the appropriate microservice.
- Authentication & Authorization: Verifies the identity of clients.
- Rate Limiting: Protects services from being overwhelmed.
- Caching: Stores responses to reduce latency.`,
    description: 'An API Gateway acts as a single entry point for all clients. It simplifies the client-side code and allows for centralized handling of cross-cutting concerns.',
    tags: ['system architecture', 'api gateway', 'microservices', 'routing', 'security'],
  },
  {
    id: 'sysarch-4',
    category: 'System Architecture',
    subCategory: 'text',
    title: 'Microservices vs. Monolith',
    snippet: `Monolith: The entire application is built as a single, unified unit. Simple to develop and deploy initially, but becomes complex to scale and maintain.
Microservices: The application is broken down into a collection of smaller, independent services. Each service is self-contained and can be developed, deployed, and scaled independently.`,
    description: 'Choosing between monolithic and microservices architecture is a major design decision. Microservices offer scalability and flexibility at the cost of increased operational complexity.',
    tags: ['system architecture', 'microservices', 'monolith', 'design patterns', 'scalability'],
  },
   {
    id: 'sysarch-monolith-vs-micro',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'Monolith vs. Microservices',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="220" viewBox="0 0 500 220" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .title { font-size: 14px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .label { font-size: 11px; fill: #94a3b8; text-anchor: middle; }
        .box { stroke-width: 1.5; rx: 5; }
        .monolith-box { fill: #334155; stroke: #475569; }
        .microservice-box { fill: #0f172a; stroke: #334155; }
        .line { stroke: #64748b; }
      </style>
      
      <!-- Monolith Side -->
      <text x="125" y="30" class="title">Monolithic Architecture</text>
      <rect x="25" y="50" width="200" height="150" class="box monolith-box"/>
      <text x="125" y="70" class="label">UI</text>
      <line x1="40" y1="80" x2="210" y2="80" class="line"/>
      <text x="125" y="100" class="label">Business Logic (Users, Orders, etc.)</text>
      <line x1="40" y1="110" x2="210" y2="110" class="line"/>
      <text x="125" y="130" class="label">Data Access Layer</text>
       <line x1="40" y1="140" x2="210" y2="140" class="line"/>
      <text x="125" y="160" class="label">Database</text>

      <!-- Microservices Side -->
      <text x="375" y="30" class="title">Microservices Architecture</text>
      <text x="375" y="60" class="label">UI</text>
      <rect x="275" y="80" width="80" height="50" class="box microservice-box"/>
      <text x="315" y="105" class="label">User Service</text>
      
      <rect x="375" y="80" width="80" height="50" class="box microservice-box"/>
      <text x="415" y="105" class="label">Order Service</text>
      
      <rect x="275" y="150" width="80" height="50" class="box microservice-box"/>
      <text x="315" y="175" class="label">User DB</text>
      
      <rect x="375" y="150" width="80" height="50" class="box microservice-box"/>
      <text x="415" y="175" class="label">Order DB</text>
    </svg>`,
    description: 'A visual comparison between a monolithic architecture, where the application is a single unit, and a microservices architecture, where the application is split into independent, deployable services, often with their own databases.',
    tags: ['system architecture', 'microservices', 'monolith', 'diagram', 'svg'],
  },
  {
    id: 'sysarch-5',
    category: 'System Architecture',
    subCategory: 'text',
    title: 'Caching Strategies',
    snippet: `Cache-Aside: Application code is responsible for reading/writing from the cache. (Most common)
Read-Through: Cache library handles reading from DB on cache miss.
Write-Through: Data is written to cache and DB simultaneously. Ensures consistency but adds latency.
Write-Back: Data is written to cache only. Cache writes to DB later. Fast, but risk of data loss on cache failure.`,
    description: 'Caching is a critical technique for improving performance by storing frequently accessed data in a fast layer (like Redis or Memcached). Different strategies balance performance, consistency, and complexity.',
    tags: ['system architecture', 'caching', 'performance', 'redis', 'memcached'],
  },
  {
    id: 'sysarch-6',
    category: 'System Architecture',
    subCategory: 'text',
    title: 'Database Scaling: Replication & Sharding',
    snippet: `Replication (Read Scaling): Creating copies of the database (replicas). Writes go to a primary DB, reads are distributed across replicas. Improves read performance and availability.
Sharding (Write Scaling): Splitting a database horizontally into smaller, more manageable pieces (shards). Each shard has a subset of the data. Improves write performance and handles massive datasets.`,
    description: 'Strategies for scaling databases to handle more load. Replication is simpler and handles read-heavy workloads, while sharding is more complex but necessary for write-heavy, large-scale applications.',
    tags: ['system architecture', 'database', 'scalability', 'replication', 'sharding', 'performance'],
  },
  {
    id: 'sysarch-7',
    category: 'System Architecture',
    subCategory: 'text',
    title: 'Message Queues',
    snippet: `A form of asynchronous service-to-service communication.
Components:
- Producer: Application that sends messages.
- Queue: Stores messages until they are processed.
- Consumer: Application that receives and processes messages.
Examples: RabbitMQ, AWS SQS, Apache Kafka.`,
    description: 'Message queues decouple services, allowing them to communicate asynchronously. This improves reliability and scalability, as the producer can send messages without waiting for the consumer to be available.',
    tags: ['system architecture', 'message queue', 'async', 'decoupling', 'rabbitmq', 'kafka'],
  },
  {
    id: 'sysarch-message-queue-diagram',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'Message Queue Architecture',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="180" viewBox="0 0 500 180" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .label { font-size: 14px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .queue-box { fill: #0f172a; stroke: #475569; rx: 5; }
        .message-box { fill: #3b82f6; rx: 3; }
        .line { stroke: #64748b; stroke-width: 2; marker-end: url(#mq-arrow); }
      </style>
      <defs>
        <marker id="mq-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
        </marker>
      </defs>

      <!-- Producer -->
      <rect x="20" y="60" width="100" height="60" class="box"/>
      <text x="70" y="95" class="label">Producer</text>

      <!-- Line to Queue -->
      <line x1="120" y1="90" x2="180" y2="90" class="line"/>

      <!-- Message Queue -->
      <rect x="180" y="40" width="140" height="100" class="queue-box"/>
      <text x="250" y="30" class="label" font-size="12">Message Queue</text>
      <rect x="190" y="75" width="20" height="20" class="message-box"/>
      <rect x="220" y="75" width="20" height="20" class="message-box"/>
      <rect x="250" y="75" width="20" height="20" class="message-box"/>
      <rect x="280" y="75" width="20" height="20" class="message-box" opacity="0.5"/>
      
      <!-- Line to Consumer -->
      <line x1="320" y1="90" x2="380" y2="90" class="line"/>
      
      <!-- Consumer -->
      <rect x="380" y="60" width="100" height="60" class="box"/>
      <text x="430" y="95" class="label">Consumer</text>
    </svg>`,
    description: 'A diagram illustrating the basic architecture of a message queue system. The Producer sends messages to a central queue, which decouples it from the Consumer that processes the messages asynchronously.',
    tags: ['system architecture', 'message queue', 'async', 'diagram', 'svg'],
  },
  {
    id: 'sysarch-8',
    category: 'System Architecture',
    subCategory: 'text',
    title: 'CDN - Content Delivery Network',
    snippet: `A geographically distributed network of proxy servers and their data centers.
Goal: Provide high availability and performance by distributing the service spatially relative to end-users.`,
    description: 'CDNs are used to serve static content (images, CSS, JS) from a server close to the user\'s physical location. This dramatically reduces latency and offloads traffic from your origin servers.',
    tags: ['system architecture', 'cdn', 'performance', 'latency', 'networking', 'caching'],
  },
  {
    id: 'sysarch-9',
    category: 'System Architecture',
    subCategory: 'text',
    title: 'Service Discovery',
    snippet: `The process of how services in a microservices architecture find each other on a network.
Patterns:
- Client-Side Discovery: Client queries a service registry (e.g., Eureka, Consul) to find a service's location.
- Server-Side Discovery: Client makes a request to a router (like a load balancer), which queries the service registry and forwards the request.`,
    description: 'In a dynamic microservices environment where instances are constantly being created and destroyed, service discovery is essential for routing traffic correctly.',
    tags: ['system architecture', 'microservices', 'service discovery', 'networking', 'eureka', 'consul'],
  },
  {
    id: 'sysarch-10',
    category: 'System Architecture',
    subCategory: 'text',
    title: 'Circuit Breaker Pattern',
    snippet: `A design pattern used to detect failures and prevent a failure from constantly recurring.
States:
- Closed: Requests flow normally. If failures exceed a threshold, it trips to Open.
- Open: Requests fail immediately without attempting to call the service. After a timeout, it goes to Half-Open.
- Half-Open: A limited number of test requests are allowed. If successful, it closes. If they fail, it opens again.`,
    description: 'The circuit breaker pattern prevents an application from repeatedly trying to execute an operation that is likely to fail, allowing it to heal and preventing a cascade of failures.',
    tags: ['system architecture', 'resilience', 'fault tolerance', 'design patterns', 'microservices'],
  },
  {
    id: 'sysarch-11',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'Basic Load Balancer Diagram',
    type: 'svg',
    snippet: `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200" style="font-family: sans-serif; font-size: 12px;">
    <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
        </marker>
    </defs>
    <rect x="1" y="1" width="298" height="198" fill="none" stroke="#334155" stroke-width="1"/>
    
    <!-- Client -->
    <text x="30" y="95" text-anchor="middle">Client</text>
    <line x1="60" y1="95" x2="90" y2="95" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />

    <!-- Load Balancer -->
    <rect x="100" y="75" width="80" height="40" rx="5" fill="#1e293b" stroke="#334155" />
    <text x="140" y="98" fill="#e2e8f0" text-anchor="middle">Load Balancer</text>

    <!-- Lines to Servers -->
    <line x1="180" y1="95" x2="210" y2="55" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
    <line x1="180" y1="95" x2="210" y2="135" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
    
    <!-- Servers -->
    <rect x="220" y="30" width="60" height="30" rx="3" fill="#0f172a" stroke="#334155" />
    <text x="250" y="50" fill="#94a3b8" text-anchor="middle">Server 1</text>
    <rect x="220" y="110" width="60" height="30" rx="3" fill="#0f172a" stroke="#334155" />
    <text x="250" y="130" fill="#94a3b8" text-anchor="middle">Server 2</text>
</svg>
        `,
    description: 'A simple SVG diagram illustrating how a load balancer distributes traffic from a client to multiple backend servers. This is a fundamental concept in scalable system design.',
    tags: ['system architecture', 'diagram', 'svg', 'load balancer', 'scalability'],
  },
  {
    id: 'sysarch-12',
    category: 'System Architecture',
    subCategory: 'chart',
    title: 'API Latency Comparison (ms)',
    type: 'chart',
    snippet: {
      type: 'bar',
      data: [
        { name: 'Monolith', p95: 120, p99: 250 },
        { name: 'Microservices', p95: 150, p99: 320 },
        { name: 'Serverless', p95: 80, p99: 400 },
      ],
      xAxisDataKey: 'name',
      series: [
        { dataKey: 'p95', color: '#8884d8' },
        { dataKey: 'p99', color: '#82ca9d' },
      ],
    } as ChartConfig,
    description: 'A bar chart comparing the P95 and P99 response latencies for different architectural styles. Note that values are illustrative; actual performance depends heavily on implementation.',
    tags: ['system architecture', 'chart', 'performance', 'latency', 'monolith', 'microservices', 'serverless'],
  },
];