import { CheatSheet } from '../../types';

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
];