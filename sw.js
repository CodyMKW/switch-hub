// Switch Hub service worker.
// Goal: make the app installable and let the shell open offline (so you can
// still browse a locally loaded SD card without a connection). Strategy is
// network-first with a cache fallback, so you always get the newest version
// when online and never get stuck on a stale copy.
const CACHE = 'switch-hub-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'game_ids.json'];
// The one cross-origin script the app needs to start (PeerJS).
const CDN_ALLOW = ['https://unpkg.com/peerjs@'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => Promise.allSettled(SHELL.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const allowedCdn = CDN_ALLOW.some((p) => req.url.startsWith(p));
  if (!sameOrigin && !allowedCdn) return; // presence APIs, Discord, fonts etc. always go straight to the network

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || (req.mode === 'navigate' ? caches.match('index.html') : Response.error())))
  );
});
