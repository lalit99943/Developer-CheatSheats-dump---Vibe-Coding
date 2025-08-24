import { CheatSheet } from '../../types';

export const oauthSsoCheatSheets: CheatSheet[] = [
  {
    id: 'oauth-1',
    category: 'OAuth and SSO',
    subCategory: 'text',
    title: 'OAuth 2.0 Roles',
    snippet: `Resource Owner: The user who owns the data.
Client: The application requesting access to the data.
Authorization Server: The server that authenticates the user and issues access tokens.
Resource Server: The API server that hosts the user's protected data.`,
    description: 'OAuth 2.0 is an authorization framework that defines four key roles to enable third-party applications to obtain limited access to a user\'s resources without exposing their credentials.',
    tags: ['oauth', 'sso', 'roles', 'authorization', 'framework'],
  },
  {
    id: 'oauth-2',
    category: 'OAuth and SSO',
    subCategory: 'text',
    title: 'OAuth 2.0 Grant: Authorization Code Flow',
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
    id: 'oauth-3',
    category: 'OAuth and SSO',
    subCategory: 'text',
    title: 'OAuth 2.0 Grant: Client Credentials Flow',
    snippet: `1. Client authenticates itself directly with the Authorization Server using its client ID and client secret.
2. Authorization Server validates the credentials and issues an access token.
Use Case: Machine-to-machine (M2M) communication, CLI tools, or services acting on their own behalf.`,
    description: 'A simpler grant type used when an application needs to access its own resources, not on behalf of a user. There is no user interaction or consent in this flow.',
    tags: ['oauth', 'client credentials', 'grant type', 'm2m', 'api'],
  },
  {
    id: 'oauth-4',
    category: 'OAuth and SSO',
    subCategory: 'text',
    title: 'Access Token vs. Refresh Token',
    snippet: `Access Token: A short-lived credential used by the client to access the protected resource (API). It is sent with every API request.
Refresh Token: A long-lived credential used to obtain a new access token after the old one expires. It is stored securely by the client and sent only to the authorization server.`,
    description: 'This separation allows access tokens to be short-lived, reducing the risk if they are compromised. Refresh tokens can be revoked if a security issue is detected, providing better overall security.',
    tags: ['oauth', 'access token', 'refresh token', 'security', 'jwt'],
  },
  {
    id: 'oauth-5',
    category: 'OAuth and SSO',
    subCategory: 'text',
    title: 'OAuth Scopes',
    snippet: `Scopes are used to limit an application's access to a user's data.
Example: A calendar app might request the 'calendar.read' and 'calendar.write' scopes, but not the 'contacts.read' scope.`,
    description: 'Scopes follow the principle of least privilege. The application should only request the permissions it absolutely needs to function. The user is shown the requested scopes on the consent screen.',
    tags: ['oauth', 'scopes', 'permissions', 'least privilege', 'security'],
  },
  {
    id: 'oauth-6',
    category: 'OAuth and SSO',
    subCategory: 'text',
    title: 'Single Sign-On (SSO)',
    snippet: 'SSO is an authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems.',
    description: 'SSO improves user experience by reducing password fatigue. For enterprises, it centralizes user management and access control. Technologies like SAML and OpenID Connect are used to implement SSO.',
    tags: ['sso', 'authentication', 'identity', 'enterprise'],
  },
  {
    id: 'oauth-7',
    category: 'OAuth and SSO',
    subCategory: 'text',
    title: 'OpenID Connect (OIDC)',
    snippet: `An identity layer built on top of the OAuth 2.0 framework.
It allows clients to verify the identity of the end-user based on the authentication performed by an Authorization Server.
Key feature: Introduces the "ID Token" (a JWT).`,
    description: 'While OAuth 2.0 is for authorization (what you can do), OIDC is for authentication (who you are). OIDC provides a standard way to get user profile information, like name and email, in a secure manner.',
    tags: ['oidc', 'openid', 'authentication', 'oauth', 'identity', 'jwt'],
  },
  {
    id: 'oauth-8',
    category: 'OAuth and SSO',
    subCategory: 'text',
    title: 'SAML (Security Assertion Markup Language)',
    snippet: `An XML-based open standard for exchanging authentication and authorization data between parties.
Key Parties:
- Identity Provider (IdP): The authority that authenticates the user (e.g., Okta, ADFS).
- Service Provider (SP): The application the user wants to access.`,
    description: 'SAML is a widely used protocol for implementing SSO, especially in enterprise environments. The IdP sends a digitally signed SAML Assertion to the SP, confirming the user\'s identity and permissions.',
    tags: ['saml', 'sso', 'authentication', 'enterprise', 'xml', 'idp', 'sp'],
  },
];
