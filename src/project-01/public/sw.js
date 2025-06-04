
const isDevelopment =
  location.hostname === 'localhost' ||
  location.hostname.startsWith('192.168.') ||
  location.hostname === '127.0.0.1';


self.addEventListener("install", function (event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
  return self.clients.claim();
});
