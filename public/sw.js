importScripts('/scram/scramjet.all.js');

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle http(s)
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return;
  }

  // Hard bypass ads
  if (
    url.hostname.includes("googlesyndication.com") ||
    url.hostname.includes("doubleclick.net") ||
    url.hostname.includes("googleadservices.com") ||
    url.hostname.includes("adtrafficquality.google")
  ) {
    return;
  }

  // TMDB images bypass
  if (url.hostname === "image.tmdb.org") {
    event.respondWith(fetch(req));
    return;
  }

  event.respondWith((async () => {
    try {
      await scramjet.loadConfig();

      if (scramjet.route(event)) {
        return scramjet.fetch(event);
      }

      return fetch(req);
    } catch (err) {
      console.error("[Scramjet SW] Fatal error:", err);
      return fetch(req);
    }
  })());
});
