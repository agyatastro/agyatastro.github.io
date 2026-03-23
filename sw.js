const CACHE_NAME = 'agyat-astrology-v1';
const OFFLINE_URL = '/offline.html';

// Assets to cache immediately on install
const ASSETS_TO_CACHE = [
  '/',
  OFFLINE_URL,
  '/css/style.css', // Update with your actual CSS path
  '/js/main.js',    // Update with your actual JS path
  '/images/logo.png',
  '/manifest.json'
];

// 1. Installation: Pre-cache the critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. Activation: Clean up old caches if you update the version
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// 3. Fetch Strategy: Network First, falling back to Cache
// This is best for Astrology sites so users always see the latest Panchang/Blogs
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL);
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});