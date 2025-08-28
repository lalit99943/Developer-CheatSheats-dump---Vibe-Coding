import { CheatSheet } from '../../types';

export const securityCheatSheets: CheatSheet[] = [
  {
    id: 'oauth-4',
    category: 'Security',
    subCategory: 'text',
    title: 'Access Token vs. Refresh Token',
    type: 'code',
    snippet: `Access Token: A short-lived credential used by the client to access the protected resource (API). It is sent with every API request.
Refresh Token: A long-lived credential used to obtain a new access token after the old one expires. It is stored securely by the client and sent only to the authorization server.`,
    description: 'This separation allows access tokens to be short-lived, reducing the risk if they are compromised. Refresh tokens can be revoked if a security issue is detected, providing better overall security.',
    tags: ['oauth', 'access token', 'refresh token', 'security', 'jwt'],
  },
  {
    id: 'security-16',
    category: 'Security',
    subCategory: 'text',
    title: 'Authentication vs. Authorization',
    type: 'code',
    snippet: `Authentication (AuthN): Verifies who you are. (e.g., logging in with a password).
Authorization (AuthZ): Determines what you are allowed to do. (e.g., checking if a user has admin rights).`,
    description: 'A fundamental concept in security. Authentication happens first to confirm identity. Authorization happens second to grant or deny access to resources.',
    tags: ['security', 'authentication', 'authorization', 'authn', 'authz', 'access control'],
  },
  {
    id: 'oauth-2',
    category: 'Security',
    subCategory: 'text',
    title: 'Authorization Code Grant (OAuth 2.0)',
    type: 'code',
    snippet: `1. Client redirects User to Authorization Server.
2. User authenticates and grants consent.
3. Authorization Server redirects User back to Client with an "authorization code".
4. Client sends the "authorization code" to the Authorization Server.
5. Authorization Server validates the code and sends back an "access token".
6. Client uses the "access token" to access the Resource Server (API).`,
    description: 'The most common and secure OAuth 2.0 grant type, used for traditional web applications where logic can be kept on a secure server. It avoids exposing the access token directly to the user agent (browser).',
    tags: ['oauth', 'authorization code', 'grant type', 'web app', 'security'],
  },
  {
    id: 'oauth-flow-diagram',
    category: 'Security',
    subCategory: 'svg',
    title: 'Authorization Code Flow Diagram (OAuth 2.0)',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .actor { font-size: 13px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .lifeline { stroke: #475569; stroke-dasharray: 4, 4; }
        .message { stroke: #60a5fa; stroke-width: 1.5; marker-end: url(#oauth-arrow); }
        .message-text { fill: #94a3b8; font-size: 11px; }
        .note { fill: #334155; stroke: #475569; }
        .note-text { fill: #cbd5e1; font-size: 10px; }
      </style>
      <defs>
        <marker id="oauth-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa"/>
        </marker>
      </defs>
      
      <!-- Actors -->
      <text x="70" y="30" class="actor">User's Browser</text><line x1="70" y1="40" x2="70" y2="380" class="lifeline"/>
      <text x="220" y="30" class="actor">Client App</text><line x1="220" y1="40" x2="220" y2="380" class="lifeline"/>
      <text x="380" y="30" class="actor">Auth Server</text><line x1="380" y1="40" x2="380" y2="380" class="lifeline"/>
      <text x="530" y="30" class="actor">Resource Server</text><line x1="530" y1="40" x2="530" y2="380" class="lifeline"/>

      <!-- Flow -->
      <line x1="80" y1="60" x2="210" y2="60" class="message"/><text x="85" y="55" class="message-text">1. Req Access</text>
      <line x1="210" y1="80" x2="80" y2="80" class="message"/><text x="85" y="95" class="message-text">2. Redirect to Auth</text>
      <line x1="80" y1="110" x2="370" y2="110" class="message"/><text x="85" y="105" class="message-text">3. Authenticate & Consent</text>
      <line x1="370" y1="140" x2="80" y2="140" class="message"/><text x="85" y="155" class="message-text">4. Redirect with Auth Code</text>
      <line x1="80" y1="170" x2="210" y2="170" class="message"/><text x="85" y="165" class="message-text">5. Pass Code to Client</text>
      
      <rect x="225" y="190" width="150" height="20" class="note"/><text x="300" y="204" class="note-text" text-anchor="middle">Backend Channel</text>

      <line x1="230" y1="230" x2="370" y2="230" class="message"/><text x="235" y="225" class="message-text">6. Exchange Code</text>
      <line x1="370" y1="260" x2="230" y2="260" class="message"/><text x="235" y="275" class="message-text">7. Receive Access Token</text>
      
      <line x1="230" y1="300" x2="520" y2="300" class="message"/><text x="235" y="295" class="message-text">8. Request Resource</text>
      <line x1="520" y1="330" x2="230" y2="330" class="message"/><text x="235" y="345" class="message-text">9. Return Resource</text>
      
      <line x1="210" y1="360" x2="80" y2="360" class="message"/><text x="85" y="375" class="message-text">10. Display Data</text>
    </svg>`,
    description: 'A sequence diagram showing the interactions between the user, client application, authorization server, and resource server during the OAuth 2.0 Authorization Code flow. This is the standard and most secure flow for web applications.',
    tags: ['oauth', 'sso', 'diagram', 'authorization code', 'sequence', 'svg'],
  },
  {
    id: 'security-8',
    category: 'Security',
    subCategory: 'bash',
    title: 'Basic Port Scan with Nmap',
    type: 'code',
    snippet: 'nmap -sT -p- 192.168.1.1',
    description: 'Uses Nmap to perform a TCP connect scan (`-sT`) across all ports (`-p-`) on a target IP address to see which services are open.',
    tags: ['security', 'nmap', 'scanning', 'network', 'ports'],
  },
  {
    id: 'oauth-3',
    category: 'Security',
    subCategory: 'text',
    title: 'Client Credentials Grant (OAuth 2.0)',
    type: 'code',
    snippet: `1. Client authenticates itself directly with the Authorization Server using its client ID and client secret.
2. Authorization Server validates the credentials and issues an access token.
Use Case: Machine-to-machine (M2M) communication, CLI tools, or services acting on their own behalf.`,
    description: 'A simpler grant type used when an application needs to access its own resources, not on behalf of a user. There is no user interaction or consent in this flow.',
    tags: ['oauth', 'client credentials', 'grant type', 'm2m', 'api'],
  },
  {
    id: 'security-6',
    category: 'Security',
    subCategory: 'http',
    title: 'Content Security Policy (CSP) Header',
    type: 'code',
    snippet: `Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com;`,
    description: 'CSP is an added layer of security that helps to detect and mitigate certain types of attacks, including XSS and data injection. It tells the browser which sources of content (scripts, styles, images) are trusted.',
    tags: ['security', 'csp', 'http', 'header', 'xss', 'web'],
  },
  {
    id: 'security-cors-diagram',
    category: 'Security',
    subCategory: 'svg',
    title: 'CORS Pre-flight Request',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .actor { font-size: 14px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .lifeline { stroke: #475569; stroke-dasharray: 4, 4; }
        .message { stroke: #60a5fa; stroke-width: 2; marker-end: url(#cors-arrow); }
        .message-text { fill: #94a3b8; font-size: 12px; font-family: 'Fira Code', monospace; }
      </style>
      <defs>
        <marker id="cors-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa"/></marker>
      </defs>
      
      <text x="100" y="40" class="actor">Browser</text><line x1="100" y1="50" x2="100" y2="280" class="lifeline"/>
      <text x="350" y="40" class="actor">Server</text><line x1="350" y1="50" x2="350" y2="280" class="lifeline"/>
      
      <line x1="110" y1="80" x2="340" y2="80" class="message"/><text x="115" y="75" class="message-text">1. OPTIONS /api/data</text>
      
      <line x1="340" y1="140" x2="110" y2="140" class="message"/><text x="115" y="135" class="message-text">2. Access-Control-Allow-Origin: *</text>
      <text x="115" y="155" class="message-text">   Access-Control-Allow-Methods: PUT</text>

      <line x1="110" y1="200" x2="340" y2="200" class="message" stroke="#34d399"/><text x="115" y="195" class="message-text" fill="#a7f3d0">3. PUT /api/data (Actual Request)</text>
      
      <line x1="340" y1="250" x2="110" y2="250" class="message" stroke="#34d399"/><text x="115" y="265" class="message-text" fill="#a7f3d0">4. 200 OK</text>
    </svg>`,
    description: 'CORS is a browser security feature. For requests that can modify data (like PUT), the browser first sends a "pre-flight" OPTIONS request to the server. The server must respond with the correct `Access-Control-Allow-*` headers to permit the actual request.',
    tags: ['security', 'cors', 'web', 'browser', 'http', 'header', 'diagram', 'svg'],
  },
  {
    id: 'security-11',
    category: 'Security',
    subCategory: 'text',
    title: 'Cross-Site Request Forgery (CSRF) Prevention',
    type: 'code',
    snippet: `Prevention Method: Anti-CSRF Tokens.
1. Server generates a unique, unpredictable token for a user session.
2. Token is embedded in a hidden form field.
3. On submission, server validates that the token from the form matches the one in the session.`,
    description: 'CSRF tricks a victim\'s browser into making an unwanted request to a web application where they are authenticated. Anti-CSRF tokens ensure that the request was intentionally sent by the user from the application\'s own page.',
    tags: ['security', 'csrf', 'xsrf', 'owasp', 'web', 'vulnerability', 'token'],
  },
  {
    id: 'security-xss-diagram',
    category: 'Security',
    subCategory: 'svg',
    title: 'Cross-Site Scripting (XSS) Prevention',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 220" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .title { font-size: 14px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .label { font-size: 12px; fill: #94a3b8; text-anchor: middle; font-family: 'Fira Code', monospace;}
        .box { fill: #0f172a; stroke: #334155; rx: 5; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#xss-arrow); }
      </style>
      <defs><marker id="xss-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs>
      
      <text x="125" y="30" class="title" fill="#f87171">Vulnerable (No Encoding)</text>
      <rect x="25" y="50" width="200" height="40" class="box"/><text x="125" y="75" class="label">&lt;script&gt;alert('XSS')&lt;/script&gt;</text>
      <path d="M 125 90 V 130" class="arrow"/>
      <rect x="25" y="130" width="200" height="40" class="box" stroke-dasharray="4 4" stroke="#f87171"/>
      <text x="125" y="155" class="label" fill="#fca5a5">Malicious script runs!</text>

      <line x1="250" y1="20" y2="200" stroke="#475569"/>
      
      <text x="375" y="30" class="title" fill="#34d399">Secure (Output Encoding)</text>
      <rect x="275" y="50" width="200" height="40" class="box"/><text x="375" y="75" class="label">&lt;script&gt;alert('XSS')&lt;/script&gt;</text>
      <path d="M 375 90 V 130" class="arrow"/>
      <rect x="275" y="130" width="200" height="40" class="box" stroke-dasharray="4 4" stroke="#34d399"/>
      <text x="375" y="155" class="label" fill="#a7f3d0">Script shown as plain text</text>
    </svg>`,
    description: 'XSS attacks inject malicious scripts into trusted websites. To prevent this, always encode user-provided data before rendering it in HTML. This converts special characters (like `<` and `>`) into their entity equivalents, ensuring the browser treats the input as harmless text instead of executable code.',
    tags: ['security', 'xss', 'owasp', 'web', 'encoding', 'diagram', 'svg'],
  },
  {
    id: 'security-18',
    category: 'Security',
    subCategory: 'text',
    title: 'Defense in Depth',
    type: 'code',
    snippet: 'A strategy that uses multiple, layered security measures to protect an asset. No single security measure is perfect, so layers provide redundancy.',
    description: 'If one security layer is breached, other layers are still in place to prevent a full compromise. Examples include having a firewall, intrusion detection system, endpoint protection, and application-level security controls all working together.',
    tags: ['security', 'defense in depth', 'layered security', 'design', 'principle'],
  },
  {
    id: 'security-15',
    category: 'Security',
    subCategory: 'bash',
    title: 'Dependency Scanning',
    type: 'code',
    snippet: `# For Node.js projects
npm audit

# For Java (Maven) using OWASP Dependency-Check plugin
mvn org.owasp:dependency-check-maven:check`,
    description: 'The practice of scanning your project\'s third-party libraries for known vulnerabilities (CVEs). Modern development heavily relies on open-source packages, which can introduce risks. Tools like npm audit, GitHub\'s Dependabot, or Snyk can automate this process.',
    tags: ['security', 'dependency', 'scanning', 'vulnerability', 'cve', 'npm audit', 'snyk'],
  },
  {
    id: 'security-7',
    category: 'Security',
    subCategory: 'bash',
    title: 'Generate SSH Key Pair',
    type: 'code',
    snippet: 'ssh-keygen -t ed25519 -C "your_email@example.com"',
    description: 'Creates a new SSH key pair for secure, password-less authentication with services like GitHub or remote servers. Ed25519 is a modern and secure algorithm.',
    tags: ['security', 'ssh', 'authentication', 'keys', 'crypto'],
  },
  {
    id: 'security-17',
    category: 'Security',
    subCategory: 'text',
    title: 'HTTPS/TLS Explained',
    type: 'code',
    snippet: `HTTPS = HTTP + TLS (Transport Layer Security)
Provides three layers of protection:
1. Encryption: Encrypts the exchanged data to keep it secure from eavesdroppers.
2. Integrity: Data cannot be modified or corrupted during transfer without being detected.
3. Authentication: Proves that you are communicating with the intended website.`,
    description: 'HTTPS is the secure version of HTTP. It uses TLS (formerly SSL) to create a secure, encrypted channel between the client (browser) and the server, protecting against man-in-the-middle attacks.',
    tags: ['security', 'https', 'tls', 'ssl', 'encryption', 'authentication', 'integrity'],
  },
  {
    id: 'security-14',
    category: 'Security',
    subCategory: 'text',
    title: 'Input Validation (Whitelisting)',
    type: 'code',
    snippet: `Whitelisting (Allowlisting): Define exactly what IS allowed, and reject everything else.
Example: A username field should only allow alphanumeric characters and be between 3-20 characters long. \`^[a-zA-Z0-9]{3,20}$\``,
    description: 'Validating all input from users, APIs, and other sources is critical to prevent injection attacks. Whitelisting is much safer than blacklisting (trying to block known bad input), as it\'s impossible to predict all malicious inputs.',
    tags: ['security', 'input validation', 'whitelisting', 'allowlisting', 'injection', 'best practice'],
  },
  {
    id: 'security-jwt-diagram',
    category: 'Security',
    subCategory: 'svg',
    title: 'JWT Structure',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .title { font-size: 13px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .text { font-size: 11px; fill: #94a3b8; font-family: 'Fira Code', monospace; }
        .dot { font-size: 20px; font-weight: bold; fill: #64748b; text-anchor: middle; }
        .header-box { fill: #be123c; } .payload-box { fill: #7e22ce; } .signature-box { fill: #059669; }
      </style>
      <rect x="20" y="50" width="140" height="40" rx="5" class="header-box"/><text x="90" y="40" class="title">Header</text><text x="30" y="70" class="text">eyJhbGciOi...</text>
      <text x="170" y="75" class="dot">.</text>
      <rect x="180" y="50" width="140" height="40" rx="5" class="payload-box"/><text x="250" y="40" class="title">Payload</text><text x="190" y="70" class="text">eyJzdWIiOi...</text>
      <text x="330" y="75" class="dot">.</text>
      <rect x="340" y="50" width="140" height="40" rx="5" class="signature-box"/><text x="410" y="40" class="title">Signature</text><text x="350" y="70" class="text">TJVA95OrM7...</text>
      <text x="90" y="110" class="text" text-anchor="middle">Algorithm & Token Type</text>
      <text x="250" y="110" class="text" text-anchor="middle">Data (Claims)</text>
      <text x="410" y="110" class="text" text-anchor="middle">Verifies Integrity</text>
    </svg>`,
    description: 'A visual breakdown of a JSON Web Token (JWT). It consists of three Base64Url-encoded parts separated by dots: the Header (metadata), the Payload (claims/data), and the Signature (for verification).',
    tags: ['security', 'jwt', 'diagram', 'authentication', 'token', 'svg'],
  },
  {
    id: 'security-9',
    category: 'Security',
    subCategory: 'text',
    title: 'JWT (JSON Web Token) Structure',
    type: 'code',
    snippet: `A JWT consists of three parts separated by dots: Header, Payload, Signature.
Example: xxxxx.yyyyy.zzzzz

Header: { "alg": "HS256", "typ": "JWT" } (Base64Url encoded)
Payload: { "sub": "123", "name": "John Doe", "iat": 1516239022 } (Base64Url encoded)
Signature: A cryptographic signature to verify the token's integrity.`,
    description: 'JWTs are a compact, URL-safe means of representing claims to be transferred between two parties. The payload contains claims about an entity (typically, the user) and additional data. The signature ensures that the token has not been tampered with.',
    tags: ['security', 'jwt', 'authentication', 'authorization', 'token', 'json'],
  },
  {
    id: 'oauth-1',
    category: 'Security',
    subCategory: 'text',
    title: 'OAuth 2.0 Roles',
    type: 'code',
    snippet: `Resource Owner: The user who owns the data.
Client: The application requesting access to the data.
Authorization Server: The server that authenticates the user and issues access tokens.
Resource Server: The API server that hosts the user's protected data.`,
    description: 'OAuth 2.0 is an authorization framework that defines four key roles to enable third-party applications to obtain limited access to a user\'s resources without exposing their credentials.',
    tags: ['oauth', 'sso', 'roles', 'authorization', 'framework'],
  },
  {
    id: 'oauth-5',
    category: 'Security',
    subCategory: 'text',
    title: 'OAuth Scopes',
    type: 'code',
    snippet: `Scopes are used to limit an application's access to a user's data.
Example: A calendar app might request the 'calendar.read' and 'calendar.write' scopes, but not the 'contacts.read' scope.`,
    description: 'Scopes follow the principle of least privilege. The application should only request the permissions it absolutely needs to function. The user is shown the requested scopes on the consent screen.',
    tags: ['oauth', 'scopes', 'permissions', 'least privilege', 'security'],
  },
  {
    id: 'oauth-7',
    category: 'Security',
    subCategory: 'text',
    title: 'OpenID Connect (OIDC)',
    type: 'code',
    snippet: `An identity layer built on top of the OAuth 2.0 framework.
It allows clients to verify the identity of the end-user based on the authentication performed by an Authorization Server.
Key feature: Introduces the "ID Token" (a JWT).`,
    description: 'While OAuth 2.0 is for authorization (what you can do), OIDC is for authentication (who you are). OIDC provides a standard way to get user profile information, like name and email, in a secure manner.',
    tags: ['oidc', 'openid', 'authentication', 'oauth', 'identity', 'jwt'],
  },
  {
    id: 'security-1',
    category: 'Security',
    subCategory: 'text',
    title: 'OWASP Top 10 (Concept)',
    type: 'code',
    snippet: `1.  **Broken Access Control**
2.  **Cryptographic Failures**
3.  **Injection**
4.  **Insecure Design**
5.  **Security Misconfiguration**
6.  **Vulnerable and Outdated Components**
7.  **Identification and Authentication Failures**
8.  **Software and Data Integrity Failures**
9.  **Security Logging and Monitoring Failures**
10. **Server-Side Request Forgery (SSRF)**`,
    description: 'The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.',
    tags: ['security', 'owasp', 'vulnerability', 'web', 'best practice'],
  },
  {
    id: 'security-hashing-diagram',
    category: 'Security',
    subCategory: 'svg',
    title: 'Password Hashing vs. Encryption',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 220" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .title { font-size: 14px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .label { font-size: 12px; fill: #94a3b8; text-anchor: middle; font-family: 'Fira Code', monospace;}
        .box { fill: #0f172a; stroke: #334155; rx: 5; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#sec-arrow); }
      </style>
      <defs><marker id="sec-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs>
      
      <text x="125" y="30" class="title">Hashing (One-Way)</text>
      <rect x="25" y="50" width="200" height="40" class="box"/><text x="125" y="75" class="label">"password123"</text>
      <path d="M 125 90 V 130" class="arrow"/>
      <text x="125" y="115" class="label">bcrypt()</text>
      <rect x="25" y="130" width="200" height="40" class="box"/><text x="125" y="155" class="label">$2b$12$...longhash...</text>
      <text x="125" y="185" class="label" fill="#f87171">Cannot be reversed</text>

      <line x1="250" y1="20" y2="200" stroke="#475569"/>
      
      <text x="375" y="30" class="title">Encryption (Two-Way)</text>
      <rect x="275" y="50" width="200" height="40" class="box"/><text x="375" y="75" class="label">"secret data"</text>
      <path d="M 375 90 V 130" class="arrow"/>
      <text x="375" y="115" class="label">encrypt(key)</text>
      <rect x="275" y="130" width="200" height="40" class="box"/><text x="375" y="155" class="label">a1b2c3d4e5f6</text>
      <path d="M 325 170 C 290 190, 290 90, 325 70" class="arrow" fill="none"/>
      <text x="290" y="130" class="label" transform="rotate(-90 290 130)">decrypt(key)</text>
    </svg>`,
    description: 'Never store plain-text passwords. **Hashing** is a one-way process used to securely store passwords; the original password cannot be recovered. **Encryption** is a two-way process used to protect data in transit or at rest; the original data can be recovered with the correct key.',
    tags: ['security', 'password', 'hashing', 'encryption', 'bcrypt', 'authentication', 'diagram', 'svg'],
  },
  {
    id: 'security-12',
    category: 'Security',
    subCategory: 'text',
    title: 'Principle of Least Privilege (PoLP)',
    type: 'code',
    snippet: 'Grant only the minimum permissions necessary for a user or system to perform its required task.',
    description: 'A foundational security principle. It limits the damage that can result from an accident, error, or malicious attack. For example, a web server process should not run as the root user.',
    tags: ['security', 'principle', 'least privilege', 'polp', 'access control', 'design'],
  },
  {
    id: 'oauth-8',
    category: 'Security',
    subCategory: 'text',
    title: 'SAML (Security Assertion Markup Language)',
    type: 'code',
    snippet: `An XML-based open standard for exchanging authentication and authorization data between parties.
Key Parties:
- Identity Provider (IdP): The authority that authenticates the user (e.g., Okta, ADFS).
- Service Provider (SP): The application the user wants to access.`,
    description: 'SAML is a widely used protocol for implementing SSO, especially in enterprise environments. The IdP sends a digitally signed SAML Assertion to the SP, confirming the user\'s identity and permissions.',
    tags: ['saml', 'sso', 'authentication', 'enterprise', 'xml', 'idp', 'sp'],
  },
  {
    id: 'security-13',
    category: 'Security',
    subCategory: 'text',
    title: 'Secrets Management Best Practices',
    type: 'code',
    snippet: `1. Never hardcode secrets (API keys, passwords) in source code.
2. Use environment variables for local development.
3. For production, use a dedicated secrets management service (e.g., HashiCorp Vault, AWS Secrets Manager, Azure Key Vault).`,
    description: 'Securely storing and managing sensitive information like API keys, database credentials, and encryption keys. Hardcoding secrets is a major security risk.',
    tags: ['security', 'secrets management', 'api keys', 'credentials', 'vault', 'best practice'],
  },
  {
    id: 'oauth-6',
    category: 'Security',
    subCategory: 'text',
    title: 'Single Sign-On (SSO)',
    type: 'code',
    snippet: 'SSO is an authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems.',
    description: 'SSO improves user experience by reducing password fatigue. For enterprises, it centralizes user management and access control. Technologies like SAML and OpenID Connect are used to implement SSO.',
    tags: ['sso', 'authentication', 'identity', 'enterprise'],
  },
  {
    id: 'security-sqli-diagram',
    category: 'Security',
    subCategory: 'svg',
    title: 'SQL Injection (SQLi) Prevention',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
      <style>
        .title { font-size: 14px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .label { font-size: 12px; fill: #94a3b8; text-anchor: middle; font-family: 'Fira Code', monospace;}
        .box { fill: #0f172a; stroke: #334155; rx: 5; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#sqli-arrow); }
      </style>
      <defs><marker id="sqli-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs>
      
      <text x="125" y="30" class="title" fill="#f87171">Vulnerable (String Concatenation)</text>
      <rect x="25" y="50" width="200" height="40" class="box"/><text x="125" y="75" class="label">userInput = "1' OR '1'='1";</text>
      <path d="M 125 90 V 130" class="arrow"/>
      <rect x="25" y="130" width="200" height="60" class="box" stroke-dasharray="4 4" stroke="#f87171"/>
      <text x="125" y="155" class="label">SELECT * FROM users WHERE</text>
      <text x="125" y="175" class="label" fill="#fca5a5">id = '1' OR '1'='1'</text>

      <line x1="250" y1="20" y2="230" stroke="#475569"/>
      
      <text x="375" y="30" class="title" fill="#34d399">Secure (Parameterized Query)</text>
      <rect x="275" y="50" width="200" height="40" class="box"/><text x="375" y="75" class="label">userInput = "1' OR '1'='1";</text>
      <path d="M 375 90 V 130" class="arrow"/>
      <rect x="275" y="130" width="200" height="60" class="box" stroke-dasharray="4 4" stroke="#34d399"/>
      <text x="375" y="155" class="label">SELECT * FROM users WHERE</text>
      <text x="375" y="175" class="label">id = ?</text>
      <text x="375" y="200" class="label" fill="#a7f3d0">(Input is treated as data)</text>
    </svg>`,
    description: 'SQLi attacks occur when user input is concatenated directly into a SQL query, allowing an attacker to alter the query\'s logic. **Prepared Statements** (parameterized queries) prevent this by strictly separating the SQL code from the user-provided data.',
    tags: ['security', 'sqli', 'injection', 'database', 'owasp', 'diagram', 'svg'],
  },
];