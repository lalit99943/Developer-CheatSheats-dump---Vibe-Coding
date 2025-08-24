import { CheatSheet } from '../../types';

export const securityCheatSheets: CheatSheet[] = [
  {
    id: 'security-1',
    category: 'Security',
    subCategory: 'text',
    title: 'OWASP Top 10 (Concept)',
    snippet: `1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Security Logging and Monitoring Failures
10. Server-Side Request Forgery (SSRF)`,
    description: 'The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.',
    tags: ['security', 'owasp', 'vulnerability', 'web', 'best practice'],
  },
  {
    id: 'security-2',
    category: 'Security',
    subCategory: 'text',
    title: 'Password Hashing vs. Encryption',
    snippet: `Hashing: One-way process. You can't un-hash a password. Used for storing passwords.
Encryption: Two-way process. You can encrypt and decrypt data with a key. Used for protecting data in transit (TLS) or at rest (disk encryption).`,
    description: 'Never store plain-text passwords. Always use a strong, salted, one-way hashing algorithm like Argon2, scrypt, or bcrypt.',
    tags: ['security', 'password', 'hashing', 'encryption', 'bcrypt', 'authentication'],
  },
  {
    id: 'security-3',
    category: 'Security',
    subCategory: 'text',
    title: 'SQL Injection (SQLi) Prevention',
    snippet: `Vulnerable:
String query = "SELECT * FROM users WHERE name = '" + userName + "'";

Secure (Prepared Statement):
PreparedStatement stmt = connection.prepareStatement("SELECT * FROM users WHERE name = ?");
stmt.setString(1, userName);`,
    description: 'Prevent SQLi by using parameterized queries (prepared statements). This ensures that user input is treated as data, not as executable code, by the database.',
    tags: ['security', 'sqli', 'injection', 'database', 'owasp'],
  },
  {
    id: 'security-4',
    category: 'Security',
    subCategory: 'text',
    title: 'Cross-Site Scripting (XSS) Prevention',
    snippet: `Key Principle: Output Encoding.
When displaying user-provided data in HTML, encode special characters.
< becomes &lt;
> becomes &gt;
" becomes &quot;
' becomes &#39;
& becomes &amp;`,
    description: 'XSS occurs when malicious scripts are injected into trusted websites. Prevent it by properly encoding all user-provided data before it is output in the browser to ensure it is treated as text, not HTML.',
    tags: ['security', 'xss', 'owasp', 'web', 'encoding'],
  },
  {
    id: 'security-5',
    category: 'Security',
    subCategory: 'text',
    title: 'CORS - Cross-Origin Resource Sharing',
    snippet: `// Example HTTP Header from Server:
Access-Control-Allow-Origin: https://www.example.com`,
    description: 'CORS is a browser security mechanism that restricts cross-origin HTTP requests initiated from scripts. Servers can opt-in to allowing cross-origin access by including specific CORS headers in their responses.',
    tags: ['security', 'cors', 'web', 'browser', 'http', 'header'],
  },
  {
    id: 'security-6',
    category: 'Security',
    subCategory: 'http',
    title: 'Content Security Policy (CSP) Header',
    snippet: `Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com;`,
    description: 'CSP is an added layer of security that helps to detect and mitigate certain types of attacks, including XSS and data injection. It tells the browser which sources of content (scripts, styles, images) are trusted.',
    tags: ['security', 'csp', 'http', 'header', 'xss', 'web'],
  },
  {
    id: 'security-7',
    category: 'Security',
    subCategory: 'bash',
    title: 'Generate SSH Key Pair',
    snippet: 'ssh-keygen -t ed25519 -C "your_email@example.com"',
    description: 'Creates a new SSH key pair for secure, password-less authentication with services like GitHub or remote servers. Ed25519 is a modern and secure algorithm.',
    tags: ['security', 'ssh', 'authentication', 'keys', 'crypto'],
  },
  {
    id: 'security-8',
    category: 'Security',
    subCategory: 'bash',
    title: 'Basic Port Scan with Nmap',
    snippet: 'nmap -sT -p- 192.168.1.1',
    description: 'Uses Nmap to perform a TCP connect scan (`-sT`) across all ports (`-p-`) on a target IP address to see which services are open.',
    tags: ['security', 'nmap', 'scanning', 'network', 'ports'],
  },
  {
    id: 'security-9',
    category: 'Security',
    subCategory: 'text',
    title: 'JWT (JSON Web Token) Structure',
    snippet: `A JWT consists of three parts separated by dots: Header, Payload, Signature.
Example: xxxxx.yyyyy.zzzzz

Header: { "alg": "HS256", "typ": "JWT" } (Base64Url encoded)
Payload: { "sub": "123", "name": "John Doe", "iat": 1516239022 } (Base64Url encoded)
Signature: A cryptographic signature to verify the token's integrity.`,
    description: 'JWTs are a compact, URL-safe means of representing claims to be transferred between two parties. The payload contains claims about an entity (typically, the user) and additional data. The signature ensures that the token has not been tampered with.',
    tags: ['security', 'jwt', 'authentication', 'authorization', 'token', 'json'],
  },
  {
    id: 'security-10',
    category: 'Security',
    subCategory: 'text',
    title: 'Authentication vs. Authorization',
    snippet: `Authentication (AuthN): Verifies who you are. (e.g., logging in with a password).
Authorization (AuthZ): Determines what you are allowed to do. (e.g., checking if a user has admin rights).`,
    description: 'A fundamental concept in security. Authentication happens first to confirm identity. Authorization happens second to grant or deny access to resources.',
    tags: ['security', 'authentication', 'authorization', 'authn', 'authz', 'access control'],
  },
  {
    id: 'security-11',
    category: 'Security',
    subCategory: 'text',
    title: 'Cross-Site Request Forgery (CSRF) Prevention',
    snippet: `Prevention Method: Anti-CSRF Tokens.
1. Server generates a unique, unpredictable token for a user session.
2. Token is embedded in a hidden form field.
3. On submission, server validates that the token from the form matches the one in the session.`,
    description: 'CSRF tricks a victim\'s browser into making an unwanted request to a web application where they are authenticated. Anti-CSRF tokens ensure that the request was intentionally sent by the user from the application\'s own page.',
    tags: ['security', 'csrf', 'xsrf', 'owasp', 'web', 'vulnerability', 'token'],
  },
  {
    id: 'security-12',
    category: 'Security',
    subCategory: 'text',
    title: 'Principle of Least Privilege (PoLP)',
    snippet: 'Grant only the minimum permissions necessary for a user or system to perform its required task.',
    description: 'A foundational security principle. It limits the damage that can result from an accident, error, or malicious attack. For example, a web server process should not run as the root user.',
    tags: ['security', 'principle', 'least privilege', 'polp', 'access control', 'design'],
  },
  {
    id: 'security-13',
    category: 'Security',
    subCategory: 'text',
    title: 'Secrets Management Best Practices',
    snippet: `1. Never hardcode secrets (API keys, passwords) in source code.
2. Use environment variables for local development.
3. For production, use a dedicated secrets management service (e.g., HashiCorp Vault, AWS Secrets Manager, Azure Key Vault).`,
    description: 'Securely storing and managing sensitive information like API keys, database credentials, and encryption keys. Hardcoding secrets is a major security risk.',
    tags: ['security', 'secrets management', 'api keys', 'credentials', 'vault', 'best practice'],
  },
  {
    id: 'security-14',
    category: 'Security',
    subCategory: 'text',
    title: 'Input Validation (Whitelisting)',
    snippet: `Whitelisting (Allowlisting): Define exactly what IS allowed, and reject everything else.
Example: A username field should only allow alphanumeric characters and be between 3-20 characters long. \`^[a-zA-Z0-9]{3,20}$\``,
    description: 'Validating all input from users, APIs, and other sources is critical to prevent injection attacks. Whitelisting is much safer than blacklisting (trying to block known bad input), as it\'s impossible to predict all malicious inputs.',
    tags: ['security', 'input validation', 'whitelisting', 'allowlisting', 'injection', 'best practice'],
  },
  {
    id: 'security-15',
    category: 'Security',
    subCategory: 'bash',
    title: 'Dependency Scanning',
    snippet: `# For Node.js projects
npm audit

# For Java (Maven) using OWASP Dependency-Check plugin
mvn org.owasp:dependency-check-maven:check`,
    description: 'The practice of scanning your project\'s third-party libraries for known vulnerabilities (CVEs). Modern development heavily relies on open-source packages, which can introduce risks. Tools like npm audit, GitHub\'s Dependabot, or Snyk can automate this process.',
    tags: ['security', 'dependency', 'scanning', 'vulnerability', 'cve', 'npm audit', 'snyk'],
  },
  {
    id: 'security-16',
    category: 'Security',
    subCategory: 'text',
    title: 'OAuth 2.0 (Concept)',
    snippet: `An authorization framework that enables applications to obtain limited access to user accounts on an HTTP service.
Key Roles:
- Resource Owner: The user.
- Client: The application requesting access.
- Authorization Server: The server that authenticates the user and issues access tokens.
- Resource Server: The API server that hosts the user's data.`,
    description: 'OAuth 2.0 allows users to grant third-party applications access to their resources without sharing their credentials. The application receives an access token instead of the user\'s password.',
    tags: ['security', 'oauth', 'authorization', 'api', 'delegation', 'token'],
  },
  {
    id: 'security-17',
    category: 'Security',
    subCategory: 'text',
    title: 'HTTPS/TLS Explained',
    snippet: `HTTPS = HTTP + TLS (Transport Layer Security)
Provides three layers of protection:
1. Encryption: Encrypts the exchanged data to keep it secure from eavesdroppers.
2. Integrity: Data cannot be modified or corrupted during transfer without being detected.
3. Authentication: Proves that you are communicating with the intended website.`,
    description: 'HTTPS is the secure version of HTTP. It uses TLS (formerly SSL) to create a secure, encrypted channel between the client (browser) and the server, protecting against man-in-the-middle attacks.',
    tags: ['security', 'https', 'tls', 'ssl', 'encryption', 'authentication', 'integrity'],
  },
  {
    id: 'security-18',
    category: 'Security',
    subCategory: 'text',
    title: 'Defense in Depth',
    snippet: 'A strategy that uses multiple, layered security measures to protect an asset. No single security measure is perfect, so layers provide redundancy.',
    description: 'If one security layer is breached, other layers are still in place to prevent a full compromise. Examples include having a firewall, intrusion detection system, endpoint protection, and application-level security controls all working together.',
    tags: ['security', 'defense in depth', 'layered security', 'design', 'principle'],
  },
];
