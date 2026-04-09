const CACHE_NAME = 'bm60-core-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './js/Master_Orchestrator.js',
  './js/Security_Obfuscator.js',
  // 以降、必要に応じて追加するJSファイルをここにリストアップします
];

// インストール時に全モジュールを隔離キャッシュに保存
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('BM-60: Secure Cache Initialized');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 起動時のリクエストをキャッシュから優先的に返す（高速化と秘匿）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
