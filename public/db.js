export function openS0laceDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("s0lace-db", 3); // bump version

    request.onupgradeneeded = (e) => {
      const db = e.target.result;

      if (!db.objectStoreNames.contains("continueWatching")) {
        db.createObjectStore("continueWatching", { keyPath: "id" });
      }

      if (!db.objectStoreNames.contains("stats")) {
        db.createObjectStore("stats", { keyPath: "key" });
      }

      if (!db.objectStoreNames.contains("geo")) {
        db.createObjectStore("geo", { keyPath: "key" });
      }

      if (!db.objectStoreNames.contains("settings")) {
        db.createObjectStore("settings", { keyPath: "key" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
