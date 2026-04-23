// [NUEVA FUNCIÓN: SERVICE_WORKER_CORE] - INICIO
const CACHE_NAME = 'registro-pro-v3.2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
// [NUEVA FUNCIÓN] - FIN