const cacheName = "pwa-cache-v1";
const filesToCache = [
  "/reminder_app/",
  "/reminder_app/index.html",
  "/reminder_app/styles.css",
];

// インストール時にキャッシュする
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache).catch((err) => {
        console.error("Failed to cache files:", err);
      });
    })
  );
});

// リクエスト時にキャッシュを確認する
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
