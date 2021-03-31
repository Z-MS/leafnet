self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/*self.addEventListener('fetch', (event) => {
	console.log(event.request)
	event.respondWith(
		caches.match(event.request).then((response) => response || fetch(event.request))
	)
})*/

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute('index.html');