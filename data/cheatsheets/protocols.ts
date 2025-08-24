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
