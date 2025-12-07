importScripts('/scram/scramjet.all.js');

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

async function handleRequest(event) {
  await scramjet.loadConfig();
  if (scramjet.route(event)) {
    return scramjet.fetch(event);
  }
  return fetch(event.request);
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // let TMDB images go straight to the network (no proxy)
  if (url.hostname === 'image.tmdb.org') {
    return; // do NOT call respondWith -> browser handles normally
  }

  event.respondWith(handleRequest(event));
});
