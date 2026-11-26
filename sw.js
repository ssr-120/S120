// অ্যাপ ইনস্টল করার জন্য ন্যূনতম service worker। কিছু ক্যাশ করে না, তাই সাইটের আচরণ বদলায় না।
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
