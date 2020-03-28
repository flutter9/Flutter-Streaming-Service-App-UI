'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/assets/images/banner.png": "2c8b93f8861de8e6fe1841f3eed06991",
"/assets/assets/images/punisher.jpg": "a2bad8e477897a4c94c14d9b37af3471",
"/assets/assets/images/avengers.jpg": "92a4e195eabe0ac97311d198339127bd",
"/assets/assets/images/runaways.jpg": "1898f02de5d98ad6b6bb0c6475cd1f14",
"/assets/assets/images/blackpanther.jpg": "55e2c99f0219656a758c42337cd43670",
"/assets/assets/fonts/SF-Pro-Display-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"/assets/assets/fonts/back_icon.ttf": "33655d4d4a0ddfb49b6792830d68f7bd",
"/assets/assets/fonts/SF-Pro-Display-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"/assets/assets/fonts/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"/assets/assets/fonts/CustomFont.ttf": "c8a98da5c05f610155daf8fa418889a5",
"/assets/FontManifest.json": "b0059b3d8fc177279952ec200475f544",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "d95199f48e55a5ce98617888155f4674",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "c65bb607d40559a625512d929a63cc54"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
