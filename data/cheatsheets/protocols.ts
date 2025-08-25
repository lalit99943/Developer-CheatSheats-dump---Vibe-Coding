import { CheatSheet } from '../../types';

export const protocolsCheatSheets: CheatSheet[] = [
  {
    id: 'proto-1',
    category: 'Protocols',
    subCategory: 'text',
    title: 'The 7 Layers of the OSI Model',
    snippet: `7. Application (HTTP, FTP, SMTP)
6. Presentation (SSL/TLS, JPEG)
5. Session (NetBIOS, SAP)
4. Transport (TCP, UDP)
3. Network (IP, ICMP)
2. Data Link (Ethernet, MAC)
1. Physical (Cables, Hubs)`,
    description: 'The Open Systems Interconnection (OSI) model is a conceptual framework used to understand and standardize the functions of a telecommunication or computing system without regard to its underlying internal structure and technology. It is organized into seven abstraction layers.',
    tags: ['protocols', 'osi model', 'networking', 'layers', 'conceptual'],
  },
  {
    id: 'proto-osi-diagram',
    category: 'Protocols',
    subCategory: 'svg',
    title: 'OSI Model Layers',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="320" viewBox="0 0 400 320" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .layer-box { stroke: #475569; stroke-width: 1.5; rx: 5; }
        .layer-text { fill: #e2e8f0; font-size: 14px; font-weight: 600; }
        .example-text { fill: #94a3b8; font-size: 12px; }
        .arrow { fill: #64748b; }
      </style>
      <defs>
        <marker id="proto-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" class="arrow"/>
        </marker>
      </defs>
      
      <g class="layer" id="layer7">
        <rect x="20" y="20" width="360" height="35" fill="#3b82f6" class="layer-box"/>
        <text x="35" y="43" class="layer-text">7. Application</text>
        <text x="250" y="43" class="example-text">HTTP, SMTP, FTP</text>
      </g>
      <g class="layer" id="layer6">
        <rect x="20" y="60" width="360" height="35" fill="#6366f1" class="layer-box"/>
        <text x="35" y="83" class="layer-text">6. Presentation</text>
        <text x="250" y="83" class="example-text">SSL/TLS, JPEG, MIDI</text>
      </g>
      <g class="layer" id="layer5">
        <rect x="20" y="100" width="360" height="35" fill="#8b5cf6" class="layer-box"/>
        <text x="35" y="123" class="layer-text">5. Session</text>
        <text x="250" y="123" class="example-text">APIs, Sockets</text>
      </g>
      <g class="layer" id="layer4">
        <rect x="20" y="140" width="360" height="35" fill="#a855f7" class="layer-box"/>
        <text x="35" y="163" class="layer-text">4. Transport</text>
        <text x="250" y="163" class="example-text">TCP, UDP</text>
      </g>
      <g class="layer" id="layer3">
        <rect x="20" y="180" width="360" height="35" fill="#d946ef" class="layer-box"/>
        <text x="35" y="203" class="layer-text">3. Network</text>
        <text x="250" y="203" class="example-text">IP, ICMP, IGMP</text>
      </g>
      <g class="layer" id="layer2">
        <rect x="20" y="220" width="360" height="35" fill="#ec4899" class="layer-box"/>
        <text x="35" y="243" class="layer-text">2. Data Link</text>
        <text x="250" y="243" class="example-text">Ethernet, MAC Address</text>
      </g>
      <g class="layer" id="layer1">
        <rect x="20" y="260" width="360" height="35" fill="#f43f5e" class="layer-box"/>
        <text x="35" y="283" class="layer-text">1. Physical</text>
        <text x="250" y="283" class="example-text">Cables, Hubs</text>
      </g>
    </svg>`,
    description: 'A visual diagram of the 7 layers of the OSI model, showing the hierarchy from the Physical layer to the Application layer with common examples for each.',
    tags: ['protocols', 'osi model', 'networking', 'layers', 'diagram', 'svg'],
  },
  {
    id: 'proto-2',
    category: 'Protocols',
    subCategory: 'text',
    title: 'TCP - Transmission Control Protocol',
    snippet: `Connection-oriented, reliable, stream-based.
Establishes a connection via a three-way handshake (SYN, SYN-ACK, ACK).
Guarantees that data arrives in order and retransmits lost packets.`,
    description: 'TCP is one of the main protocols of the Internet protocol suite. It is used for applications that require high reliability, such as web browsing (HTTP/HTTPS), email (SMTP), and file transfer (FTP).',
    tags: ['protocols', 'tcp', 'transport layer', 'reliable', 'networking'],
  },
   {
    id: 'proto-tcp-handshake',
    category: 'Protocols',
    subCategory: 'svg',
    title: 'TCP 3-Way Handshake',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" width="450" height="250" viewBox="0 0 450 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .actor { font-size: 14px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .lifeline { stroke: #475569; stroke-dasharray: 4, 4; }
        .message { stroke: #60a5fa; stroke-width: 2; marker-end: url(#msg-arrow); }
        .message-text { fill: #94a3b8; font-size: 12px; }
      </style>
      <defs>
        <marker id="msg-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa"/>
        </marker>
      </defs>
      
      <!-- Actors -->
      <text x="100" y="40" class="actor">Client</text>
      <line x1="100" y1="50" x2="100" y2="220" class="lifeline"/>
      
      <text x="350" y="40" class="actor">Server</text>
      <line x1="350" y1="50" x2="350" y2="220" class="lifeline"/>
      
      <!-- SYN -->
      <line x1="110" y1="80" x2="340" y2="80" class="message"/>
      <text x="225" y="75" class="message-text" text-anchor="middle">1. SYN (Synchronize)</text>
      <text x="225" y="95" class="message-text" text-anchor="middle" font-style="italic">"Hi, I want to connect."</text>
      
      <!-- SYN-ACK -->
      <line x1="340" y1="140" x2="110" y2="140" class="message"/>
      <text x="225" y="135" class="message-text" text-anchor="middle">2. SYN-ACK (Synchronize-Acknowledge)</text>
       <text x="225" y="155" class="message-text" text-anchor="middle" font-style="italic">"I hear you. I'm ready."</text>
      
      <!-- ACK -->
      <line x1="110" y1="200" x2="340" y2="200" class="message"/>
      <text x="225" y="195" class="message-text" text-anchor="middle">3. ACK (Acknowledge)</text>
      <text x="225" y="215" class="message-text" text-anchor="middle" font-style="italic">"Got it. Let's talk."</text>
      
    </svg>`,
    description: 'A sequence diagram showing the three steps TCP uses to establish a reliable connection between a client and a server before any data is transferred.',
    tags: ['protocols', 'tcp', 'handshake', 'networking', 'syn', 'ack', 'diagram', 'svg'],
  },
  {
    id: 'proto-3',
    category: 'Protocols',
    subCategory: 'text',
    title: 'UDP - User Datagram Protocol',
    snippet: `Connectionless, unreliable, datagram-based.
No handshake; packets are sent to the destination without prior arrangement.
Faster than TCP but does not guarantee delivery, order, or error checking.`,
    description: 'UDP is suitable for applications that need fast, efficient transmission, such as video streaming, online gaming, and DNS, where speed is more critical than reliability.',
    tags: ['protocols', 'udp', 'transport layer', 'unreliable', 'fast', 'networking'],
  },
  {
    id: 'proto-4',
    category: 'Protocols',
    subCategory: 'text',
    title: 'IP - Internet Protocol',
    snippet: `Responsible for addressing hosts and routing datagrams (packets) from a source to a destination across one or more networks.
Operates at the Network Layer (Layer 3) of the OSI model.`,
    description: 'IP is the principal communications protocol for relaying datagrams across network boundaries. Its routing function enables internetworking, and it essentially establishes the Internet.',
    tags: ['protocols', 'ip', 'network layer', 'routing', 'addressing'],
  },
  {
    id: 'proto-5',
    category: 'Protocols',
    subCategory: 'text',
    title: 'HTTP - Hypertext Transfer Protocol',
    snippet: `Application-layer protocol for transmitting hypermedia documents, such as HTML.
Follows a client-server model.
Stateless: each request is independent.`,
    description: 'HTTP is the foundation of data communication for the World Wide Web. It defines methods (like GET, POST, PUT, DELETE) to indicate the desired action to be performed on the identified resource.',
    tags: ['protocols', 'http', 'application layer', 'web', 'client-server'],
  },
  {
    id: 'proto-6',
    category: 'Protocols',
    subCategory: 'text',
    title: 'HTTPS - HTTP Secure',
    snippet: `An extension of HTTP for secure communication.
Uses TLS (Transport Layer Security) or its predecessor, SSL (Secure Sockets Layer), for encryption and authentication.
Operates on port 443 by default.`,
    description: 'HTTPS encrypts the data exchanged between the client and server, protecting against eavesdropping and man-in-the-middle attacks. It is essential for secure online transactions.',
    tags: ['protocols', 'https', 'security', 'encryption', 'tls', 'ssl'],
  },
  {
    id: 'proto-7',
    category: 'Protocols',
    subCategory: 'text',
    title: 'FTP - File Transfer Protocol',
    snippet: `A standard network protocol used for the transfer of computer files between a client and server on a computer network.
Uses separate control (port 21) and data (port 20) connections.`,
    description: 'FTP is built on a client-server model architecture and uses separate control and data connections between the client and the server. It is less common now due to the rise of more secure alternatives like SFTP (SSH File Transfer Protocol).',
    tags: ['protocols', 'ftp', 'file transfer', 'application layer'],
  },
  {
    id: 'proto-8',
    category: 'Protocols',
    subCategory: 'text',
    title: 'SMTP - Simple Mail Transfer Protocol',
    snippet: `The standard protocol for sending electronic mail (email).
Operates on port 25.
Used by Mail Transfer Agents (MTAs) to send and receive mail messages.`,
    description: 'SMTP is used to push email from a client to a server or between servers. Other protocols like POP3 or IMAP are used by clients to retrieve emails from a server.',
    tags: ['protocols', 'smtp', 'email', 'application layer'],
  },
  {
    id: 'proto-9',
    category: 'Protocols',
    subCategory: 'text',
    title: 'DNS - Domain Name System',
    snippet: `The "phonebook" of the Internet.
Translates human-readable domain names (e.g., www.google.com) into machine-readable IP addresses (e.g., 172.217.14.228).
Uses UDP on port 53 for queries.`,
    description: 'DNS is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It is a critical component of internet functionality.',
    tags: ['protocols', 'dns', 'networking', 'ip address', 'domain'],
  },
  {
    id: 'proto-10',
    category: 'Protocols',
    subCategory: 'text',
    title: 'ARP - Address Resolution Protocol',
    snippet: `Function: Maps a network layer address (IP address) to a link layer address (MAC address).
Process: A host sends an ARP request broadcast on the local network asking "Who has this IP address?". The host with that IP replies with its MAC address.`,
    description: 'ARP is a crucial protocol for local network communication. When a device needs to send a packet to another device on the same LAN, it uses ARP to find the destination MAC address corresponding to the destination IP address.',
    tags: ['protocols', 'arp', 'mac address', 'ip address', 'data link layer', 'networking'],
  },
  {
    id: 'proto-11',
    category: 'Protocols',
    subCategory: 'text',
    title: 'DHCP - Dynamic Host Configuration Protocol',
    snippet: `Process (DORA):
1. Discover: Client broadcasts a request for an IP address.
2. Offer: DHCP servers offer an IP address lease.
3. Request: Client requests one of the offered IPs.
4. Acknowledge: DHCP server confirms the IP address lease.`,
    description: 'DHCP is a network management protocol used to automate the process of configuring devices on IP networks. It automatically assigns an IP address, subnet mask, default gateway, and DNS server information to a client device.',
    tags: ['protocols', 'dhcp', 'ip address', 'networking', 'automation', 'application layer'],
  },
  {
    id: 'proto-12',
    category: 'Protocols',
    subCategory: 'text',
    title: 'ICMP - Internet Control Message Protocol',
    snippet: `Used by network devices to send error messages and operational information.
Examples:
- "Destination Unreachable": A router can't find a path to the destination.
- "Echo Request / Echo Reply": Used by the 'ping' utility.`,
    description: 'ICMP is a supporting protocol in the Internet protocol suite. It is used by network devices, like routers, to send error messages indicating, for example, that a requested service is not available or that a host or router could not be reached.',
    tags: ['protocols', 'icmp', 'network layer', 'ping', 'traceroute', 'error reporting', 'diagnostics'],
  },
  {
    id: 'proto-13',
    category: 'Protocols',
    subCategory: 'text',
    title: 'SSH - Secure Shell',
    snippet: `A cryptographic network protocol for operating network services securely over an unsecured network.
Common uses: Remote command-line login, secure file transfer (SFTP, SCP).
Operates on TCP port 22 by default.`,
    description: 'SSH provides a secure channel over an unsecured network in a client-server architecture. It replaces older, insecure protocols like Telnet. Authentication can be done via passwords or public-key cryptography.',
    tags: ['protocols', 'ssh', 'security', 'encryption', 'remote access', 'cli', 'application layer'],
  },
  {
    id: 'proto-14',
    category: 'Protocols',
    subCategory: 'text',
    title: 'IMAP & POP3 (Email Retrieval)',
    snippet: `IMAP (Internet Message Access Protocol): Syncs mail with the server. Changes on one client are reflected on the server and other clients.
POP3 (Post Office Protocol 3): Downloads mail from the server to a single client, then (usually) deletes it from the server.`,
    description: 'While SMTP is used to send email, IMAP and POP3 are the two most common protocols used to retrieve email from a mail server. IMAP is more modern and suitable for accessing email from multiple devices.',
    tags: ['protocols', 'email', 'imap', 'pop3', 'application layer', 'retrieval'],
  },
  {
    id: 'proto-15',
    category: 'Protocols',
    subCategory: 'text',
    title: 'NAT - Network Address Translation',
    snippet: `A method of remapping an IP address space into another by modifying network address information in IP datagram packet headers.
Allows multiple devices in a private network (e.g., 192.168.x.x) to share a single public IP address.`,
    description: 'NAT is a fundamental technology used in routers for home and corporate networks. It conserves public IPv4 addresses and enhances security by hiding the internal network structure.',
    tags: ['protocols', 'nat', 'networking', 'ip address', 'router', 'ipv4'],
  },
];