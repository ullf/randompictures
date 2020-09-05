const CACHE_NAME = "version-1";
var urlsToCache = [
    '/',
    '/index.html'
  ];
  
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Cache opened');
          return cache.addAll(urlsToCache);
        })
    );
  });
  
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });