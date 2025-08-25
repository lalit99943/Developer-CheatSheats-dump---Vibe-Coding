import { CheatSheet } from '../../types';

export const redisCheatSheets: CheatSheet[] = [
  {
    id: 'redis-1',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Set and Get a Key',
    snippet: 'SET mykey "Hello"\nGET mykey',
    description: '`SET` stores a string value for a given key. `GET` retrieves the value of a key. If the key does not exist, `nil` is returned.',
    tags: ['redis', 'string', 'set', 'get', 'key-value'],
  },
  {
    id: 'redis-2',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Increment a Number',
    snippet: 'SET mynumber 10\nINCR mynumber\nGET mynumber',
    description: '`INCR` increments the number stored at a key by one. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type.',
    tags: ['redis', 'string', 'number', 'incr', 'atomic'],
  },
  {
    id: 'redis-3',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Key Existence and Deletion',
    snippet: 'EXISTS mykey\nDEL mykey',
    description: '`EXISTS` checks if a key exists and returns 1 if it does, 0 otherwise. `DEL` removes the specified key.',
    tags: ['redis', 'key', 'exists', 'del', 'delete'],
  },
  {
    id: 'redis-4',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Set a Key with Expiration',
    snippet: 'SETEX mykey 60 "Hello"\nTTL mykey',
    description: '`SETEX` (SET with EXpire) sets a key to a value with a specified timeout in seconds. `TTL` (Time To Live) returns the remaining time to live of a key that has a timeout.',
    tags: ['redis', 'key', 'expire', 'ttl', 'setex'],
  },
  {
    id: 'redis-5',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Push to a List (LPUSH)',
    snippet: 'LPUSH mylist "world"\nLPUSH mylist "hello"',
    description: '`LPUSH` prepends one or more values to a list. It creates the list if it does not exist. This acts like a stack.',
    tags: ['redis', 'list', 'lpush', 'data structures'],
  },
  {
    id: 'redis-6',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Get a Range from a List',
    snippet: 'LRANGE mylist 0 -1',
    description: '`LRANGE` returns the specified elements of the list stored at a key. The offsets `start` and `stop` are zero-based. `0 -1` means retrieve all elements from the list.',
    tags: ['redis', 'list', 'lrange', 'data structures'],
  },
  {
    id: 'redis-7',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Set Fields in a Hash',
    snippet: 'HSET myhash field1 "Hello" field2 "World"',
    description: '`HSET` sets the specified fields to their respective values in the hash stored at a key. It is useful for storing objects.',
    tags: ['redis', 'hash', 'hset', 'object', 'data structures'],
  },
  {
    id: 'redis-8',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Get All Fields from a Hash',
    snippet: 'HGETALL myhash',
    description: '`HGETALL` returns all fields and values of the hash stored at a key. It returns a list of fields and their values.',
    tags: ['redis', 'hash', 'hgetall', 'object', 'data structures'],
  },
  {
    id: 'redis-9',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Add to a Set',
    snippet: 'SADD myset "apple"\nSADD myset "banana"\nSADD myset "apple"',
    description: '`SADD` adds the specified members to the set stored at a key. Specified members that are already a member of this set are ignored.',
    tags: ['redis', 'set', 'sadd', 'unique', 'data structures'],
  },
  {
    id: 'redis-10',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Get All Members of a Set',
    snippet: 'SMEMBERS myset',
    description: '`SMEMBERS` returns all the members of the set value stored at a key.',
    tags: ['redis', 'set', 'smembers', 'data structures'],
  },
  {
    id: 'redis-11',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Publish a Message',
    snippet: 'PUBLISH mychannel "Hello World"',
    description: 'Posts a message to the given channel. This is part of Redis\'s Publish/Subscribe messaging paradigm.',
    tags: ['redis', 'pubsub', 'publish', 'messaging'],
  },
  {
    id: 'redis-12',
    category: 'Redis',
    subCategory: 'bash',
    title: 'Subscribe to a Channel',
    snippet: 'SUBSCRIBE mychannel',
    description: 'Listens for messages published to the given channels. This command blocks the client and waits for messages.',
    tags: ['redis', 'pubsub', 'subscribe', 'messaging'],
  },
  {
    id: 'redis-pubsub-diagram',
    category: 'Redis',
    subCategory: 'svg',
    title: 'Redis Pub/Sub Pattern',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .channel-box { fill: #0f172a; stroke: #475569; rx: 5; }
        .label { font-size: 14px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; text-anchor: middle; font-family: 'Fira Code', monospace;}
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#redis-arrow); }
        .message-arrow { stroke: #f59e0b; }
    </style>
    <defs>
        <marker id="redis-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
        </marker>
    </defs>

    <!-- Publisher -->
    <rect x="20" y="95" width="100" height="60" class="box"/>
    <text x="70" y="130" class="label">Publisher</text>

    <!-- Channel -->
    <rect x="190" y="95" width="120" height="60" class="channel-box"/>
    <text x="250" y="120" class="label">Channel</text>
    <text x="250" y="140" class="sub-label">"news.sports"</text>

    <!-- Subscribers -->
    <rect x="380" y="20" width="100" height="60" class="box"/>
    <text x="430" y="55" class="label">Subscriber 1</text>
    <rect x="380" y="170" width="100" height="60" class="box"/>
    <text x="430" y="205" class="label">Subscriber 2</text>
    
    <!-- Arrows -->
    <path d="M 120 125 L 190 125" class="arrow message-arrow"/>
    <text x="155" y="115" class="sub-label" fill="#fcd34d">PUBLISH</text>

    <path d="M 310 110 L 380 50" class="arrow"/>
    <path d="M 310 140 L 380 200" class="arrow"/>
</svg>`,
    description: 'A diagram of the Redis Pub/Sub model. A "Publisher" client sends messages to a specific "Channel". One or more "Subscriber" clients, who are subscribed to that channel, receive the message. This decouples the message sender from the receivers.',
    tags: ['redis', 'pubsub', 'messaging', 'design pattern', 'diagram', 'svg'],
  }
];
