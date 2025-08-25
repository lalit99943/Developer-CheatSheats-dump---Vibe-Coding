import { CheatSheet } from '../../types';

export const networkingCheatSheets: CheatSheet[] = [
  {
    id: 'proto-10',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'ARP - Address Resolution Protocol',
    type: 'code',
    snippet: `Function: Maps a network layer address (IP address) to a link layer address (MAC address).
Process: A host sends an ARP request broadcast on the local network asking "Who has this IP address?". The host with that IP replies with its MAC address.`,
    description: 'ARP is a crucial protocol for local network communication. When a device needs to send a packet to another device on the same LAN, it uses ARP to find the destination MAC address corresponding to the destination IP address.',
    tags: ['protocols', 'arp', 'mac address', 'ip address', 'data link layer', 'networking'],
  },
  {
    id: 'net-11',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Capture Network Packets (tcpdump)',
    type: 'code',
    snippet: 'sudo tcpdump -i eth0 -n "port 80"',
    description: '`tcpdump` is a powerful command-line packet analyzer. This command captures traffic on the `eth0` interface (`-i`), does not resolve hostnames (`-n`), and only shows packets on port 80. Requires root privileges.',
    tags: ['networking', 'tcpdump', 'packet sniffing', 'debug', 'analysis', 'security'],
  },
  {
    id: 'net-9',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Check Hostname',
    type: 'code',
    snippet: 'hostname\nhostname -I',
    description: '`hostname` displays the system\'s DNS name. `hostname -I` displays all IP addresses for the host.',
    tags: ['networking', 'hostname', 'dns', 'ip'],
  },
  {
    id: 'proto-dhcp-diagram',
    category: 'Networking & Protocols',
    subCategory: 'svg',
    title: 'DHCP DORA Process',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 280" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .actor { font-size: 14px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .lifeline { stroke: #475569; stroke-dasharray: 4, 4; }
        .message { stroke: #60a5fa; stroke-width: 2; marker-end: url(#dhcp-arrow); }
        .message-text { fill: #94a3b8; font-size: 12px; }
      </style>
      <defs>
        <marker id="dhcp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa"/>
        </marker>
      </defs>
      
      <text x="100" y="40" class="actor">Client</text>
      <line x1="100" y1="50" x2="100" y2="260" class="lifeline"/>
      
      <text x="350" y="40" class="actor">DHCP Server</text>
      <line x1="350" y1="50" x2="350" y2="260" class="lifeline"/>
      
      <line x1="110" y1="70" x2="340" y2="70" class="message"/>
      <text x="115" y="65" class="message-text">1. Discover (Broadcast)</text>
      
      <line x1="340" y1="120" x2="110" y2="120" class="message"/>
      <text x="115" y="135" class="message-text">2. Offer (IP Address)</text>
      
      <line x1="110" y1="170" x2="340" y2="170" class="message"/>
      <text x="115" y="165" class="message-text">3. Request (Accept Offer)</text>
      
      <line x1="340" y1="220" x2="110" y2="220" class="message"/>
      <text x="115" y="235" class="message-text">4. Acknowledge (Lease Confirmed)</text>
    </svg>`,
    description: 'DHCP automates IP configuration via the four-step DORA process. The **Client** broadcasts a **Discover** packet. A **DHCP Server** responds with an **Offer**. The Client accepts by sending a **Request**, and the Server finalizes the lease with an **Acknowledge**.',
    tags: ['protocols', 'dhcp', 'ip address', 'networking', 'automation', 'application layer', 'diagram', 'svg'],
  },
  {
    id: 'proto-dns-diagram',
    category: 'Networking & Protocols',
    subCategory: 'svg',
    title: 'DNS Resolution Flow',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 320" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .actor { font-size: 13px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .lifeline { stroke: #475569; stroke-dasharray: 4, 4; }
        .message { stroke: #60a5fa; stroke-width: 1.5; marker-end: url(#dns-arrow); }
        .message-text { fill: #94a3b8; font-size: 11px; }
      </style>
      <defs>
        <marker id="dns-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa"/></marker>
      </defs>
      
      <text x="60" y="30" class="actor">Client</text><line x1="60" y1="40" x2="60" y2="300" class="lifeline"/>
      <text x="180" y="30" class="actor">Resolver</text><line x1="180" y1="40" x2="180" y2="300" class="lifeline"/>
      <text x="300" y="30" class="actor">Root Server</text><line x1="300" y1="40" x2="300" y2="300" class="lifeline"/>
      <text x="420" y="30" class="actor">TLD Server</text><line x1="420" y1="40" x2="420" y2="300" class="lifeline"/>
      <text x="500" y="30" class="actor" font-size="11">Authoritative NS</text><line x1="500" y1="40" x2="500" y2="300" class="lifeline"/>
      
      <line x1="70" y1="60" x2="170" y2="60" class="message"/><text x="75" y="55" class="message-text">1. query example.com</text>
      <line x1="190" y1="90" x2="290" y2="90" class="message"/><text x="195" y="85" class="message-text">2. who has .com?</text>
      <line x1="290" y1="120" x2="190" y2="120" class="message"/><text x="195" y="135" class="message-text">3. ask TLD server</text>
      <line x1="190" y1="150" x2="410" y2="150" class="message"/><text x="195" y="145" class="message-text">4. who has example.com?</text>
      <line x1="410" y1="180" x2="190" y2="180" class="message"/><text x="195" y="195" class="message-text">5. ask Authoritative NS</text>
      <line x1="190" y1="210" x2="490" y2="210" class="message"/><text x="195" y="205" class="message-text">6. get IP for example.com</text>
      <line x1="490" y1="240" x2="190" y2="240" class="message"/><text x="195" y="255" class="message-text">7. IP is 93.184.216.34</text>
      <line x1="170" y1="270" x2="70" y2="270" class="message"/><text x="75" y="285" class="message-text">8. Return IP & Cache</text>
    </svg>`,
    description: 'DNS, the "phonebook" of the internet, translates domain names to IP addresses. The process is a hierarchical lookup starting from the client, going to a **Resolver**, then querying **Root**, **TLD**, and finally **Authoritative** nameservers.',
    tags: ['protocols', 'dns', 'networking', 'ip address', 'domain', 'diagram', 'svg'],
  },
  {
    id: 'net-2',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Display Network Configuration',
    type: 'code',
    snippet: 'ip addr show\n# ifconfig (older command)',
    description: 'Shows information about network interfaces, including IP addresses, MAC addresses, and state. `ip addr` is the modern replacement for `ifconfig`.',
    tags: ['networking', 'ip', 'ifconfig', 'address', 'interface'],
  },
  {
    id: 'net-5',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Display Network Connections',
    type: 'code',
    snippet: 'netstat -tuln\nss -tuln',
    description: 'Shows active network connections and listening ports. `-t` for TCP, `-u` for UDP, `-l` for listening, `-n` for numeric addresses. `ss` is the modern replacement for `netstat`.',
    tags: ['networking', 'netstat', 'ss', 'ports', 'tcp', 'udp', 'sockets'],
  },
  {
    id: 'net-8',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Display Routing Table',
    type: 'code',
    snippet: 'ip route show\nnetstat -r',
    description: 'Shows the kernel IP routing table. This determines where network traffic is directed. `ip route` is the modern command.',
    tags: ['networking', 'route', 'routing table', 'gateway'],
  },
  {
    id: 'net-10',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Download with cURL',
    type: 'code',
    snippet: 'curl -O http://example.com/file.zip\ncurl -L http://example.com',
    description: 'cURL is a tool to transfer data from or to a server. `-O` saves the file with its original name. `-L` follows redirects.',
    tags: ['networking', 'curl', 'http', 'download', 'api'],
  },
  {
    id: 'proto-7',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'FTP - File Transfer Protocol',
    type: 'code',
    snippet: `A standard network protocol used for the transfer of computer files between a client and server on a computer network.
Uses separate control (port 21) and data (port 20) connections.`,
    description: 'FTP is built on a client-server model architecture and uses separate control and data connections between the client and the server. It is less common now due to the rise of more secure alternatives like SFTP (SSH File Transfer Protocol).',
    tags: ['protocols', 'ftp', 'file transfer', 'application layer'],
  },
  {
    id: 'proto-5',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'HTTP - Hypertext Transfer Protocol',
    type: 'code',
    snippet: `Application-layer protocol for transmitting hypermedia documents, such as HTML.
Follows a client-server model.
Stateless: each request is independent.`,
    description: 'HTTP is the foundation of data communication for the World Wide Web. It defines methods (like GET, POST, PUT, DELETE) to indicate the desired action to be performed on the identified resource.',
    tags: ['protocols', 'http', 'application layer', 'web', 'client-server'],
  },
  {
    id: 'proto-6',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'HTTPS - HTTP Secure',
    type: 'code',
    snippet: `An extension of HTTP for secure communication.
Uses TLS (Transport Layer Security) or its predecessor, SSL (Secure Sockets Layer), for encryption and authentication.
Operates on port 443 by default.`,
    description: 'HTTPS encrypts the data exchanged between the client and server, protecting against eavesdropping and man-in-the-middle attacks. It is essential for secure online transactions.',
    tags: ['protocols', 'https', 'security', 'encryption', 'tls', 'ssl'],
  },
  {
    id: 'proto-12',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'ICMP - Internet Control Message Protocol',
    type: 'code',
    snippet: `Used by network devices to send error messages and operational information.
Examples:
- "Destination Unreachable": A router can't find a path to the destination.
- "Echo Request / Echo Reply": Used by the 'ping' utility.`,
    description: 'ICMP is a supporting protocol in the Internet protocol suite. It is used by network devices, like routers, to send error messages indicating, for example, that a requested service is not available or that a host or router could not be reached.',
    tags: ['protocols', 'icmp', 'network layer', 'ping', 'traceroute', 'error reporting', 'diagnostics'],
  },
  {
    id: 'proto-14',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'IMAP & POP3 (Email Retrieval)',
    type: 'code',
    snippet: `IMAP (Internet Message Access Protocol): Syncs mail with the server. Changes on one client are reflected on the server and other clients.
POP3 (Post Office Protocol 3): Downloads mail from the server to a single client, then (usually) deletes it from the server.`,
    description: 'While SMTP is used to send email, IMAP and POP3 are the two most common protocols used to retrieve email from a mail server. IMAP is more modern and suitable for accessing email from multiple devices.',
    tags: ['protocols', 'email', 'imap', 'pop3', 'application layer', 'retrieval'],
  },
  {
    id: 'proto-4',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'IP - Internet Protocol',
    type: 'code',
    snippet: `Responsible for addressing hosts and routing datagrams (packets) from a source to a destination across one or more networks.
Operates at the Network Layer (Layer 3) of the OSI model.`,
    description: 'IP is the principal communications protocol for relaying datagrams across network boundaries. Its routing function enables internetworking, and it essentially establishes the Internet.',
    tags: ['protocols', 'ip', 'network layer', 'routing', 'addressing'],
  },
  {
    id: 'proto-nat-diagram',
    category: 'Networking & Protocols',
    subCategory: 'svg',
    title: 'NAT - Network Address Translation',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 220" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .label { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; text-anchor: middle; }
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#nat-arrow); }
      </style>
      <defs>
        <marker id="nat-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker>
      </defs>
      
      <text x="100" y="30" class="label">Private Network</text>
      <rect x="20" y="40" width="160" height="160" class="box" fill="none" stroke-dasharray="4 4"/>
      <text x="60" y="70" class="sub-label">PC 1: 192.168.1.10</text>
      <text x="60" y="120" class="sub-label">PC 2: 192.168.1.11</text>
      <text x="60" y="170" class="sub-label">PC 3: 192.168.1.12</text>

      <rect x="200" y="80" width="100" height="60" class="box"/>
      <text x="250" y="105" class="label">Router (NAT)</text>
      <text x="250" y="125" class="sub-label" fill="#f59e0b">Public IP: 203.0.113.5</text>
      
      <path d="M 180 110 L 200 110" class="arrow"/>
      <path d="M 300 110 L 350 110" class="arrow"/>
      
      <path d="M 425 40 C 450 70, 450 150, 425 180" stroke="none" fill="#0f172a" opacity="0.5"/>
      <path d="M 420 50 C 440 80, 440 140, 420 170" stroke="none" fill="#0f172a" opacity="0.5"/>
      <text x="400" y="115" class="label">Internet</text>
    </svg>`,
    description: 'NAT remaps private IP addresses to a single public IP. It allows multiple devices in a private network (e.g., 192.168.x.x) to share a single public IP address to connect to the internet, conserving public IPv4 addresses.',
    tags: ['protocols', 'nat', 'networking', 'ip address', 'router', 'ipv4', 'diagram', 'svg'],
  },
  {
    id: 'net-7',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Network Scanning with Nmap',
    type: 'code',
    snippet: 'nmap -v -A scanme.nmap.org',
    description: 'Nmap ("Network Mapper") is a powerful open-source tool for network exploration and security auditing. `-v` is for verbosity, `-A` enables OS detection, version detection, script scanning, and traceroute.',
    tags: ['networking', 'nmap', 'scan', 'security', 'ports'],
  },
  {
    id: 'proto-osi-diagram',
    category: 'Networking & Protocols',
    subCategory: 'svg',
    title: 'OSI Model Layers',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .layer-box { stroke: #475569; stroke-width: 1.5; rx: 5; }
        .layer-text { fill: #e2e8f0; font-size: 14px; font-weight: 600; }
        .example-text { fill: #94a3b8; font-size: 12px; }
      </style>
      
      <g class="layer" id="layer7"><rect x="20" y="20" width="360" height="35" fill="#3b82f6" class="layer-box"/><text x="35" y="43" class="layer-text">7. Application</text><text x="250" y="43" class="example-text">HTTP, SMTP, FTP</text></g>
      <g class="layer" id="layer6"><rect x="20" y="60" width="360" height="35" fill="#6366f1" class="layer-box"/><text x="35" y="83" class="layer-text">6. Presentation</text><text x="250" y="83" class="example-text">SSL/TLS, JPEG, MIDI</text></g>
      <g class="layer" id="layer5"><rect x="20" y="100" width="360" height="35" fill="#8b5cf6" class="layer-box"/><text x="35" y="123" class="layer-text">5. Session</text><text x="250" y="123" class="example-text">APIs, Sockets</text></g>
      <g class="layer" id="layer4"><rect x="20" y="140" width="360" height="35" fill="#a855f7" class="layer-box"/><text x="35" y="163" class="layer-text">4. Transport</text><text x="250" y="163" class="example-text">TCP, UDP</text></g>
      <g class="layer" id="layer3"><rect x="20" y="180" width="360" height="35" fill="#d946ef" class="layer-box"/><text x="35" y="203" class="layer-text">3. Network</text><text x="250" y="203" class="example-text">IP, ICMP, IGMP</text></g>
      <g class="layer" id="layer2"><rect x="20" y="220" width="360" height="35" fill="#ec4899" class="layer-box"/><text x="35" y="243" class="layer-text">2. Data Link</text><text x="250" y="243" class="example-text">Ethernet, MAC Address</text></g>
      <g class="layer" id="layer1"><rect x="20" y="260" width="360" height="35" fill="#f43f5e" class="layer-box"/><text x="35" y="283" class="layer-text">1. Physical</text><text x="250" y="283" class="example-text">Cables, Hubs</text></g>
    </svg>`,
    description: 'The OSI model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven distinct abstraction layers.',
    tags: ['protocols', 'osi model', 'networking', 'layers', 'diagram', 'svg'],
  },
  {
    id: 'net-1',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Ping a Host',
    type: 'code',
    snippet: 'ping example.com',
    description: 'Sends ICMP ECHO_REQUEST packets to a host to test network connectivity and measure round-trip time.',
    tags: ['networking', 'ping', 'icmp', 'connectivity', 'debug'],
  },
  {
    id: 'net-4',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Query DNS Records',
    type: 'code',
    snippet: 'dig example.com A\nnslookup example.com',
    description: 'Queries Domain Name System (DNS) servers to resolve hostnames to IP addresses and retrieve other DNS records. `dig` is generally more powerful than `nslookup`.',
    tags: ['networking', 'dns', 'dig', 'nslookup', 'resolve'],
  },
  {
    id: 'net-6',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Securely Copy Files (scp)',
    type: 'code',
    snippet: 'scp user@source_host:/path/to/file /local/path/\nscp /local/file user@dest_host:/remote/path/',
    description: 'Secure Copy (SCP) allows you to securely transfer files between a local and a remote host or between two remote hosts, using SSH.',
    tags: ['networking', 'scp', 'ssh', 'file transfer', 'secure'],
  },
  {
    id: 'proto-8',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'SMTP - Simple Mail Transfer Protocol',
    type: 'code',
    snippet: `The standard protocol for sending electronic mail (email).
Operates on port 25.
Used by Mail Transfer Agents (MTAs) to send and receive mail messages.`,
    description: 'SMTP is used to push email from a client to a server or between servers. Other protocols like POP3 or IMAP are used by clients to retrieve emails from a server.',
    tags: ['protocols', 'smtp', 'email', 'application layer'],
  },
  {
    id: 'proto-13',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'SSH - Secure Shell',
    type: 'code',
    snippet: `A cryptographic network protocol for operating network services securely over an unsecured network.
Common uses: Remote command-line login, secure file transfer (SFTP, SCP).
Operates on TCP port 22 by default.`,
    description: 'SSH provides a secure channel over an unsecured network in a client-server architecture. It replaces older, insecure protocols like Telnet. Authentication can be done via passwords or public-key cryptography.',
    tags: ['protocols', 'ssh', 'security', 'encryption', 'remote access', 'cli', 'application layer'],
  },
  {
    id: 'proto-tcp-handshake',
    category: 'Networking & Protocols',
    subCategory: 'svg',
    title: 'TCP 3-Way Handshake',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
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
      
      <!-- SYN-ACK -->
      <line x1="340" y1="140" x2="110" y2="140" class="message"/>
      <text x="225" y="135" class="message-text" text-anchor="middle">2. SYN-ACK</text>
      
      <!-- ACK -->
      <line x1="110" y1="200" x2="340" y2="200" class="message"/>
      <text x="225" y="195" class="message-text" text-anchor="middle">3. ACK (Acknowledge)</text>
      
    </svg>`,
    description: 'A sequence diagram showing the three steps TCP uses to establish a reliable connection between a client and a server before any data is transferred.',
    tags: ['protocols', 'tcp', 'handshake', 'networking', 'syn', 'ack', 'diagram', 'svg'],
  },
  {
    id: 'proto-2',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'TCP - Transmission Control Protocol',
    type: 'code',
    snippet: `Connection-oriented, reliable, stream-based.
Establishes a connection via a three-way handshake (SYN, SYN-ACK, ACK).
Guarantees that data arrives in order and retransmits lost packets.`,
    description: 'TCP is one of the main protocols of the Internet protocol suite. It is used for applications that require high reliability, such as web browsing (HTTP/HTTPS), email (SMTP), and file transfer (FTP).',
    tags: ['protocols', 'tcp', 'transport layer', 'reliable', 'networking'],
  },
  {
    id: 'proto-1',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'The OSI Model (7 Layers)',
    type: 'code',
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
    id: 'net-3',
    category: 'Networking & Protocols',
    subCategory: 'bash',
    title: 'Trace Route to Host',
    type: 'code',
    snippet: 'traceroute example.com',
    description: 'Prints the route (network hops) that packets take to reach a network host. Useful for diagnosing routing issues.',
    tags: ['networking', 'traceroute', 'routing', 'hops', 'debug'],
  },
  {
    id: 'proto-3',
    category: 'Networking & Protocols',
    subCategory: 'text',
    title: 'UDP - User Datagram Protocol',
    type: 'code',
    snippet: `Connectionless, unreliable, datagram-based.
No handshake; packets are sent to the destination without prior arrangement.
Faster than TCP but does not guarantee delivery, order, or error checking.`,
    description: 'UDP is suitable for applications that need fast, efficient transmission, such as video streaming, online gaming, and DNS, where speed is more critical than reliability.',
    tags: ['protocols', 'udp', 'transport layer', 'unreliable', 'fast', 'networking'],
  },
];