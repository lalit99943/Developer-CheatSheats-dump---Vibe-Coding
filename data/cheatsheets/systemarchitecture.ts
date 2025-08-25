import { CheatSheet, ChartConfig } from '../../types';

export const systemArchitectureCheatSheets: CheatSheet[] = [
  {
    id: 'sysarch-1',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'CAP Theorem',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .title { font-size: 16px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .label { font-size: 14px; font-weight: bold; }
        .sub-label { font-size: 11px; fill: #94a3b8; }
        .triangle { fill: none; stroke: #475569; stroke-width: 2; }
        .c-text { fill: #f59e0b; }
        .a-text { fill: #34d399; }
        .p-text { fill: #60a5fa; }
    </style>
    <text x="225" y="40" class="title">CAP Theorem</text>
    <polygon points="225,60 75,260 375,260" class="triangle"/>
    
    <g id="consistency">
        <text x="225" y="55" text-anchor="middle" class="label c-text">C</text>
        <text x="225" y="75" text-anchor="middle" class="sub-label c-text">Consistency</text>
    </g>
    <g id="availability">
        <text x="65" y="270" text-anchor="middle" class="label a-text">A</text>
        <text x="65" y="290" text-anchor="middle" class="sub-label a-text">Availability</text>
    </g>
    <g id="partition-tolerance">
        <text x="385" y="270" text-anchor="middle" class="label p-text">P</text>
        <text x="385" y="290" text-anchor="middle" class="sub-label p-text">Partition Tolerance</text>
    </g>

    <text x="145" y="170" class="label" fill="#cbd5e1" transform="rotate(-60 145 170)">Choose 2 of 3</text>
    
    <text x="300" y="170" class="label" fill="#cbd5e1" transform="rotate(60 300 170)">In Reality: Must choose P</text>
    
    <text x="225" y="250" class="label" fill="#cbd5e1">Trade-off: C vs A</text>
</svg>`,
    description: 'A distributed data store can only provide two of the following three guarantees: **Consistency** (every read receives the most recent write), **Availability** (every request receives a non-error response), and **Partition Tolerance** (the system operates despite network failures). In modern distributed systems, Partition Tolerance is non-negotiable, forcing a trade-off between Consistency and Availability.',
    tags: ['system architecture', 'distributed systems', 'cap theorem', 'consistency', 'availability', 'partition tolerance', 'svg'],
  },
  {
    id: 'sysarch-2',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'Load Balancer',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .label { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; text-anchor: middle; }
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .server-box { fill: #0f172a; stroke: #334155; rx: 5; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#lb-arrow); }
    </style>
    <defs>
        <marker id="lb-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker>
    </defs>
    
    <text x="50" y="125" class="label">Users</text>
    <path d="M 80 125 L 150 125" class="arrow" />

    <rect x="150" y="90" width="120" height="70" class="box"/>
    <text x="210" y="115" class="label">Load Balancer</text>
    <text x="210" y="140" class="sub-label">(e.g., Round Robin)</text>
    
    <path d="M 270 125 L 340 60" class="arrow" />
    <path d="M 270 125 L 340 125" class="arrow" />
    <path d="M 270 125 L 340 190" class="arrow" />

    <rect x="340" y="30" width="120" height="50" class="server-box"/>
    <text x="400" y="55" class="label">Server 1</text>
    <rect x="340" y="100" width="120" height="50" class="server-box"/>
    <text x="400" y="125" class="label">Server 2</text>
    <rect x="340" y="170" width="120" height="50" class="server-box"/>
    <text x="400" y="195" class="label">Server 3</text>
</svg>`,
    description: 'A load balancer distributes network or application traffic across multiple servers to improve capacity and reliability. Common algorithms include **Round Robin** (sequential distribution), **Least Connections** (sends to the server with fewest connections), and **IP Hash** (distributes based on client IP).',
    tags: ['system architecture', 'load balancer', 'scalability', 'availability', 'networking', 'svg'],
  },
  {
    id: 'sysarch-3',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'API Gateway',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .label { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; text-anchor: middle; }
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .service-box { fill: #0f172a; stroke: #334155; rx: 5; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#gw-arrow); }
    </style>
    <defs>
        <marker id="gw-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker>
    </defs>
    
    <text x="60" y="50" class="label">Web Client</text>
    <text x="60" y="140" class="label">Mobile Client</text>
    <text x="60" y="230" class="label">3rd Party App</text>
    <path d="M 120 50 L 180 140" class="arrow" />
    <path d="M 120 140 L 180 140" class="arrow" />
    <path d="M 120 230 L 180 140" class="arrow" />

    <rect x="180" y="70" width="140" height="140" class="box"/>
    <text x="250" y="90" class="label">API Gateway</text>
    <text x="250" y="120" class="sub-label">Authentication</text>
    <text x="250" y="140" class="sub-label">Rate Limiting</text>
    <text x="250" y="160" class="sub-label">Routing</text>
    <text x="250" y="180" class="sub-label">Caching</text>
    
    <path d="M 320 140 L 370 60" class="arrow" />
    <path d="M 320 140 L 370 140" class="arrow" />
    <path d="M 320 140 L 370 220" class="arrow" />

    <rect x="370" y="30" width="120" height="50" class="service-box"/>
    <text x="430" y="55" class="label">User Service</text>
    <rect x="370" y="115" width="120" height="50" class="service-box"/>
    <text x="430" y="140" class="label">Product Service</text>
    <rect x="370" y="200" width="120" height="50" class="service-box"/>
    <text x="430" y="225" class="label">Order Service</text>
</svg>`,
    description: 'An API Gateway acts as a single entry point for all clients. It sits between clients and backend microservices to handle routing, authentication, rate limiting, and caching, simplifying both the client and the services.',
    tags: ['system architecture', 'api gateway', 'microservices', 'routing', 'security', 'svg'],
  },
   {
    id: 'sysarch-monolith-vs-micro',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'Monolith vs. Microservices',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 220" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
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
    description: '**Monolith:** The application is a single, unified unit. Simple to develop/deploy initially, but complex to scale and maintain. **Microservices:** The application is a collection of smaller, independent services, each with its own database. They can be developed, deployed, and scaled independently but add operational complexity.',
    tags: ['system architecture', 'microservices', 'monolith', 'diagram', 'svg'],
  },
  {
    id: 'sysarch-5',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'Caching Strategy: Cache-Aside',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .label { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; }
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .arrow { stroke-width: 2; marker-end: url(#cache-arrow); }
        .hit-arrow { stroke: #34d399; }
        .miss-arrow { stroke: #f59e0b; }
    </style>
    <defs>
        <marker id="cache-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker>
    </defs>
    
    <rect x="20" y="100" width="120" height="60" class="box"/>
    <text x="80" y="135" class="label">Application</text>

    <rect x="200" y="100" width="120" height="60" class="box"/>
    <text x="260" y="135" class="label">Cache</text>

    <rect x="380" y="100" width="100" height="60" class="box"/>
    <text x="430" y="135" class="label">Database</text>

    <!-- Cache Hit -->
    <path d="M 140 120 L 200 120" class="arrow hit-arrow" />
    <text x="145" y="110" class="sub-label hit-arrow">1. Request Data</text>
    <path d="M 200 140 L 140 140" class="arrow hit-arrow" />
    <text x="145" y="160" class="sub-label hit-arrow">2. Return from Cache</text>
    <text x="80" y="40" class="label" fill="#a7f3d0">Cache Hit Flow</text>

    <!-- Cache Miss -->
    <path d="M 140 120 L 200 120" class="arrow miss-arrow" transform="translate(0, 100)" />
    <text x="145" y="210" class="sub-label miss-arrow">1. Request Data (Miss)</text>
    <path d="M 320 120 L 380 120" class="arrow miss-arrow" transform="translate(0, 100)" />
    <text x="325" y="210" class="sub-label miss-arrow">2. Get from DB</text>
    <path d="M 380 140 L 320 140" class="arrow miss-arrow" transform="translate(0, 100)" />
    <text x="325" y="250" class="sub-label miss-arrow">3. Store in Cache</text>
    <path d="M 200 140 L 140 140" class="arrow miss-arrow" transform="translate(0, 100)" />
    <text x="145" y="270" class="sub-label miss-arrow">4. Return to App</text>
    <text x="340" y="40" class="label" fill="#fcd34d">Cache Miss Flow</text>
</svg>`,
    description: 'The Cache-Aside strategy places the cache to the side of the database. The application is responsible for checking the cache first. If data is present (hit), it\'s returned. If not (miss), the app fetches it from the database, stores it in the cache, and then returns it.',
    tags: ['system architecture', 'caching', 'performance', 'redis', 'memcached', 'svg'],
  },
  {
    id: 'sysarch-6',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'Database Scaling: Replication vs. Sharding',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .title { font-size: 14px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .label { font-size: 12px; fill: #94a3b8; text-anchor: middle; }
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .db-primary { fill: #0f172a; stroke: #3b82f6; }
        .db-replica { fill: #0f172a; stroke: #34d399; }
        .db-shard { fill: #0f172a; stroke: #f59e0b; }
        .arrow { stroke-width: 2; marker-end: url(#db-arrow); }
    </style>
    <defs>
        <marker id="db-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker>
    </defs>
    
    <text x="125" y="30" class="title">Replication (Read Scaling)</text>
    <rect x="75" y="50" width="100" height="40" class="box db-primary"/><text x="125" y="75" class="label">Primary DB</text>
    <rect x="25" y="150" width="100" height="40" class="box db-replica"/><text x="75" y="175" class="label">Replica 1</text>
    <rect x="125" y="150" width="100" height="40" class="box db-replica"/><text x="175" y="175" class="label">Replica 2</text>
    <path d="M 125 90 V 150" class="arrow" stroke="#64748b"/>
    <path d="M 125 90 L 75 150" class="arrow" stroke="#64748b"/>
    <text x="100" y="45" class="label" fill="#f87171">Writes</text><path d="M 100 50 V 40" class="arrow" stroke="#f87171"/>
    <text x="50" y="200" class="label" fill="#a7f3d0">Reads</text><path d="M 50 190 V 200" class="arrow" stroke="#a7f3d0"/>
    <text x="150" y="200" class="label" fill="#a7f3d0">Reads</text><path d="M 150 190 V 200" class="arrow" stroke="#a7f3d0"/>

    <line x1="250" y1="20" y2="230" stroke="#475569"/>

    <text x="375" y="30" class="title">Sharding (Write Scaling)</text>
    <rect x="275" y="100" width="60" height="40" class="box db-shard"/><text x="305" y="125" class="label">Shard 1</text><text x="305" y="90" class="label" fill="#fcd34d">Users A-H</text>
    <rect x="345" y="100" width="60" height="40" class="box db-shard"/><text x="375" y="125" class="label">Shard 2</text><text x="375" y="90" class="label" fill="#fcd34d">Users I-P</text>
    <rect x="415" y="100" width="60" height="40" class="box db-shard"/><text x="445" y="125" class="label">Shard 3</text><text x="445" y="90" class="label" fill="#fcd34d">Users Q-Z</text>
    <text x="375" y="60" class="label">Load Balancer / Router</text><path d="M 375 70 V 100" class="arrow" stroke="#64748b"/>
</svg>`,
    description: '**Replication** improves read performance by creating copies of a primary database. Writes go to the primary, and reads are spread across replicas. **Sharding** improves write performance by splitting data horizontally across multiple independent databases (shards), with each shard holding a subset of the data.',
    tags: ['system architecture', 'database', 'scalability', 'replication', 'sharding', 'performance', 'svg'],
  },
  {
    id: 'sysarch-message-queue-diagram',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'Message Queue Architecture',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
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
    description: 'Message queues enable asynchronous communication between services. The **Producer** sends messages to a central **Queue** (e.g., RabbitMQ, AWS SQS). The **Consumer** receives and processes messages from the queue. This decouples services, improving reliability and scalability.',
    tags: ['system architecture', 'message queue', 'async', 'diagram', 'svg', 'rabbitmq', 'kafka'],
  },
  {
    id: 'sysarch-8',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'CDN - Content Delivery Network',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .label { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; }
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#cdn-arrow); }
        .hit-arrow { stroke: #34d399; }
        .miss-arrow { stroke: #f59e0b; stroke-dasharray: 4, 4; }
    </style>
    <defs>
        <marker id="cdn-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker>
    </defs>

    <text x="50" y="50" class="label">User (EU)</text>
    <text x="50" y="230" class="label">User (US)</text>
    
    <rect x="150" y="20" width="200" height="60" class="box"/>
    <text x="250" y="45" class="label">CDN Edge (EU)</text>
    <text x="250" y="65" class="sub-label" text-anchor="middle">Cached Content</text>

    <rect x="150" y="200" width="200" height="60" class="box"/>
    <text x="250" y="225" class="label">CDN Edge (US)</text>
    <text x="250" y="245" class="sub-label" text-anchor="middle">Cached Content</text>
    
    <rect x="380" y="110" width="110" height="60" class="box"/>
    <text x="435" y="145" class="label">Origin Server</text>
    
    <!-- Arrows -->
    <path d="M 100 50 L 150 50" class="arrow hit-arrow" />
    <path d="M 100 230 L 150 230" class="arrow hit-arrow" />
    <text x="100" y="130" class="sub-label hit-arrow">Cache Hit (Fast)</text>

    <path d="M 350 200 C 370 180, 370 160, 380 140" class="arrow miss-arrow" />
    <text x="310" y="180" class="sub-label miss-arrow">Cache Miss (Slow)</text>
</svg>`,
    description: 'A CDN is a geographically distributed network of proxy servers. It serves static content (images, JS, CSS) from an "edge" server close to the user\'s location. This reduces latency (**Cache Hit**). If the content isn\'t cached, the CDN fetches it from the **Origin Server** (**Cache Miss**).',
    tags: ['system architecture', 'cdn', 'performance', 'latency', 'networking', 'caching', 'svg'],
  },
  {
    id: 'sysarch-9',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'Service Discovery',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .label { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; }
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#sd-arrow); }
    </style>
    <defs>
        <marker id="sd-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker>
    </defs>
    
    <rect x="20" y="110" width="120" height="60" class="box"/>
    <text x="80" y="145" class="label">Client Service</text>
    
    <rect x="180" y="110" width="140" height="60" class="box"/>
    <text x="250" y="145" class="label">Service Registry</text>

    <rect x="360" y="20" width="120" height="60" class="box"/>
    <text x="420" y="55" class="label">Service A (v1)</text>

    <rect x="360" y="200" width="120" height="60" class="box"/>
    <text x="420" y="235" class="label">Service A (v2)</text>
    
    <!-- Arrows -->
    <path d="M 360 80 V 110" class="arrow" />
    <text x="290" y="95" class="sub-label">1. Register</text>
    <path d="M 360 200 V 170" class="arrow" />

    <path d="M 140 120 H 180" class="arrow" />
    <text x="140" y="110" class="sub-label">2. Query("Service A")</text>
    <path d="M 180 160 H 140" class="arrow" />
    <text x="140" y="180" class="sub-label">3. Return IP:Port</text>
    
    <path d="M 80 110 C 20 50, 300 30, 360 40" fill="none" class="arrow" />
    <text x="200" y="60" class="sub-label">4. Connect</text>
</svg>`,
    description: 'The process of how services find each other in a microservices architecture. Services register their location with a central **Service Registry**. A **Client** then queries the registry to find the current address of a service it needs to call.',
    tags: ['system architecture', 'microservices', 'service discovery', 'networking', 'eureka', 'consul', 'svg'],
  },
  {
    id: 'sysarch-10',
    category: 'System Architecture',
    subCategory: 'svg',
    title: 'Circuit Breaker Pattern',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .state { stroke-width: 2; }
        .closed { fill: #10b981; stroke: #a7f3d0; }
        .open { fill: #ef4444; stroke: #fca5a5; }
        .half-open { fill: #f59e0b; stroke: #fcd34d; }
        .state-text { font-size: 14px; font-weight: bold; text-anchor: middle; fill: #0f172a; }
        .label { font-size: 11px; fill: #94a3b8; text-anchor: middle; }
        .arrow { stroke: #64748b; stroke-width: 2; fill: none; marker-end: url(#cb-arrow); }
    </style>
    <defs>
        <marker id="cb-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker>
    </defs>
    
    <circle cx="100" cy="125" r="40" class="state closed"/>
    <text x="100" y="130" class="state-text">CLOSED</text>
    <text x="100" y="65" class="label">Requests Flow</text>

    <circle cx="400" cy="125" r="40" class="state open"/>
    <text x="400" y="130" class="state-text">OPEN</text>
    <text x="400" y="65" class="label">Requests Fail Fast</text>
    
    <circle cx="250" cy="200" r="40" class="state half-open"/>
    <text x="250" y="205" class="state-text">HALF-OPEN</text>
    
    <!-- Arrows -->
    <path d="M 140 110 C 220 50, 360 60, 380 100" class="arrow"/>
    <text x="260" y="60" class="label">Failures &gt; Threshold</text>
    
    <path d="M 360 150 C 320 190, 290 195, 270 200" class="arrow"/>
    <text x="330" y="185" class="label">Timeout expires</text>

    <path d="M 230 200 C 190 195, 160 190, 140 150" class="arrow"/>
    <text x="180" y="165" class="label">Success</text>
    
    <path d="M 280 210 C 330 240, 380 210, 380 155" class="arrow"/>
    <text x="350" y="225" class="label">Failure</text>
</svg>`,
    description: 'A design pattern to prevent a cascade of failures in a distributed system. The circuit is **Closed** during normal operation. If failures exceed a threshold, it trips to **Open**, failing requests immediately. After a timeout, it becomes **Half-Open**, allowing a test request. On success, it closes; on failure, it opens again.',
    tags: ['system architecture', 'resilience', 'fault tolerance', 'design patterns', 'microservices', 'svg'],
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