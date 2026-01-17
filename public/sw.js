importScripts('/scram/scramjet.all.js');

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Let TMDB images bypass Scramjet cleanly
  if (url.hostname === 'image.tmdb.org') {
    event.respondWith(fetch(event.request));
    return;
  }

  self.addEventListener("install", (event) => {
  event.waitUntil(
    indexedDB.deleteDatabase("scramjet")
  );
});


  event.respondWith((async () => {
    try {
      await scramjet.loadConfig();

      if (scramjet.route(event)) {
        return scramjet.fetch(event);
      }

      return fetch(event.request);
    } catch (err) {
      console.error('[Scramjet SW] Fatal error, resetting:', err);

      // HARD fallback — don't partially proxy
      return fetch(event.request);
    }
  })());
});
