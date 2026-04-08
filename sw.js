const CACHE_NAME = 'bm40-v1';
const urlsToCache = [
  'index.html',
  'js/Main_Controller.js',
  'js/PDF_Java_Parser.js',
  // ... 全てのJSファイルをここにリストアップ
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
