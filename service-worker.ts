const CACHE_NAME = 'cheatsheats-cache-v2'; // Version bumped to invalidate old cache

// App shell and core assets that are critical for the app to work offline
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/services/db.ts',
  '/services/geminiService.ts',
];

// All component files to ensure UI renders offline
const COMPONENTS = [
  '/components/CheatSheetCard.tsx',
  '/components/FormattedDescription.tsx',
  '/components/FullscreenModal.tsx',
  '/components/IconComponents.tsx',
  '/components/InfiniteScrollLoader.tsx',
  '/components/SearchBar.tsx',
  '/components/Sidebar.tsx',
  '/components/SnippetRenderer.tsx',
  '/components/TagFilter.tsx',
];

// All data files to ensure content is available offline
const DATA_FILES = [
  '/data/initialData.ts',
  '/data/cheatsheets/ai.ts',
  '/data/cheatsheets/algorithms.ts',
  '/data/cheatsheets/angular.ts',
  '/data/cheatsheets/aws.ts',
  '/data/cheatsheets/cicd.ts',
  '/data/cheatsheets/css.ts',
  '/data/cheatsheets/datastructures.ts',
  '/data/cheatsheets/designpatterns.ts',
  '/data/cheatsheets/docker.ts',
  '/data/cheatsheets/git.ts',
  '/data/cheatsheets/go.ts',
  '/data/cheatsheets/gcp.ts',
  '/data/cheatsheets/java.ts',
  '/data/cheatsheets/javascript.ts',
  '/data/cheatsheets/jest.ts',
  '/data/cheatsheets/junit.ts',
  '/data/cheatsheets/kubernetes.ts',
  '/data/cheatsheets/management.ts',
  '/data/cheatsheets/maven.ts',
  '/data/cheatsheets/mongodb.ts',
  '/data/cheatsheets/networking.ts',
  '/data/cheatsheets/nodejs.ts',
  '/data/cheatsheets/npm.ts',
  '/data/cheatsheets/pip.ts',
  '/data/cheatsheets/python.ts',
  '/data/cheatsheets/react.ts',
  '/data/cheatsheets/redis.ts',
  '/data/cheatsheets/regex.ts',
  '/data/cheatsheets/rest.ts',
  '/data/cheatsheets/security.ts',
  '/data/cheatsheets/servers.ts',
  '/data/cheatsheets/shell.ts',
  '/data/cheatsheets/spring.ts',
  '/data/cheatsheets/sql.ts',
  '/data/cheatsheets/systemarchitecture.ts',
  '/data/cheatsheets/terraform.ts',
];

// External CDN dependencies
const VENDOR_ASSETS = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap',
  'https://esm.sh/react@^19.1.1',
  'https://esm.sh/react-dom@^19.1.1/client',
  'https://esm.sh/react-syntax-highlighter@^15.6.1',
  'https://esm.sh/react-syntax-highlighter@^15.6.1/dist/esm/styles/hljs/atom-one-dark',
  'https://esm.sh/recharts@^2.12.7',
  'https://esm.sh/@google/genai@^1.14.0'
];

const PRECACHE_ASSETS = [
  ...APP_SHELL,
  ...COMPONENTS,
  ...DATA_FILES,
  ...VENDOR_ASSETS
];

self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Pre-caching offline assets.');
        return cache.addAll(PRECACHE_ASSETS.map(url => new Request(url, { cache: 'reload' })));
      })
      .then(() => {
        console.log('[Service Worker] Pre-caching complete. Activating now.');
        (self as any).skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Pre-caching failed:', error);
      })
  );
});

self.addEventListener('activate', (event: any) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Claiming clients.');
      return (self as any).clients.claim();
    })
  );
});

self.addEventListener('fetch', (event: any) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  const url = new URL(event.request.url);
  // Skip browser-sync URLs used in development
  if (url.pathname.includes('browser-sync')) {
      return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse; // Return from cache if available
      }

      // If not in cache, fetch from network
      try {
        const networkResponse = await fetch(event.request);
        // Add the new response to the cache if it's a valid response
        if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            cache.put(event.request, responseToCache);
        }
        return networkResponse;
      } catch (error) {
        console.error('Fetch failed; the resource is not in cache and network is unavailable.', error);
        // Return a generic error response for failed fetches when offline
        return new Response('Network error. You are likely offline and this resource was not cached.', {
          status: 408,
          headers: { 'Content-Type': 'text/plain' }
        });
      }
    })
  );
});
