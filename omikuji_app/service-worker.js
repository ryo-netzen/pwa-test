self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('omikuji-cache').then((cache) => {
            return cache.addAll([
                '/',
                'index.html',
                'style.css',
                'app.js',
                'sounds/omikuji.mp3',
                'icon.png'
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
