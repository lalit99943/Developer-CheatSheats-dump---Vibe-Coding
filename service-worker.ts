const CACHE_NAME = 'cheatsheats-cache-v1';

self.addEventListener('install', (event: any) => {
  // Activate worker immediately
  (self as any).skipWaiting();
});

self.addEventListener('activate', (event: any) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => (self as any).clients.claim())
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
        return cachedResponse;
      }

      try {
        const networkResponse = await fetch(event.request);
        // Add the new response to the cache.
        if (networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
        console.error('Fetch failed; returning offline page instead.', error);
        // Here you could return a fallback offline page if you had one in the cache
        // For now, we'll just re-throw the error to let the browser handle it.
        throw error;
      }
    })
  );
});
