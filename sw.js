const CACHE_NAME = 'bm60-cache-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './js/Master_Orchestrator.js',
  './js/PDF_Raw_Stream.js',
  // 必要に応じて他のエンジニアJSをここに追加、または動的にキャッシュ
];

// インストール時にリソースをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// オフライン時の応答
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
