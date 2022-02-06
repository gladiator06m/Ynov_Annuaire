const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/ynov.png",
  "/images/ynov-2d-illustration.png",
  "/images/ynov-creation-design.png",
  "/images/ynov-informatique.png",
  "/images/ynov-architecture-interieur.png",
  "/images/ynov-marketing-communication.png",
  "/images/ynov-audiovisuel.png",
  "/images/ynov-web-management.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
