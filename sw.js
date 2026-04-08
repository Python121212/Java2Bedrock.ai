const CACHE_NAME = 'bm40-android-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './js/Main_Controller.js',
    // ... 他のJSファイル
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
