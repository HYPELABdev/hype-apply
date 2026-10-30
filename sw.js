const CACHE = "hype-apply-v1";
const ASSETS = ["./","./index.html","./app.html","./manifest.json","./icon/icon.png","./icon/bg.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
