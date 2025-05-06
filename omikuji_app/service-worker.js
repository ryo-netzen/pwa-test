self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('omikuji-cache').then((cache) => {
            return cache.addAll([
                '/pwa-test/',
                '/pwa-test/index.html',
                '/pwa-test/style.css',
                '/pwa-test/app.js',
                '/pwa-test/sounds/omikuji.mp3',
                '/pwa-test/images/apple-touch-icon.png'
            ]);
        })
    );
});


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
