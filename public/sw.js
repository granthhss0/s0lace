importScripts("/scram/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

  // If it's already scramjet, leave it alone
  if (url.pathname.startsWith("/scramjet/")) {
    event.respondWith(fetch(req));
    return;
  }

  // Only proxy real navigations
  if (req.mode === "navigate" && url.protocol === "https:") {
    const proxied = "/scramjet/" + encodeURIComponent(url.href);
    event.respondWith(fetch(proxied));
    return;
  }

  event.respondWith(fetch(req));
});


self.addEventListener("install", event => {
  event.waitUntil(
    indexedDB.deleteDatabase("scramjet")
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  let url;
  try {
    url = new URL(event.request.url);
  } catch {
    return;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  if (
    url.hostname.includes("googlesyndication.com") ||
    url.hostname.includes("doubleclick.net") ||
    url.hostname.includes("googleadservices.com") ||
    url.hostname.includes("adtrafficquality.google")
  ) {
    return;
  }

  if (url.hostname === "image.tmdb.org") {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith((async () => {
    try {
      await scramjet.loadConfig();

      if (scramjet.route(event)) {
        return scramjet.fetch(event);
      }

      return fetch(event.request);
    } catch (e) {
      console.error("[Scramjet SW] Fatal:", e);
      return fetch(event.request);
    }
  })());
});
