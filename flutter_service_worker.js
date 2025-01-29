'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a4618a5d2a9fceeb88a7f43ed5a59596",
"version.json": "d80330b1dd93388ea7661abbf93ef180",
"index.html": "32382fba5bfdb139a21c6bda8bf5bce2",
"/": "32382fba5bfdb139a21c6bda8bf5bce2",
"main.dart.js": "198ed83367009f89e10a7bbe5168ecaa",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c34ae22266d41157e9a7cd6d61b374b6",
"assets/AssetManifest.json": "9401cdc05373e0ed090aabbf43ff450c",
"assets/NOTICES": "3d56bc5d14d986c413a2bc76c7004e59",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8927b20adb791c23061662893b67058c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "01294bb5c09ec50668ece47b5192c6f8",
"assets/fonts/MaterialIcons-Regular.otf": "a9d22929a71cc3b693701a3d49502576",
"assets/assets/images/CompletedBadge.png": "bd2379b5464408901820d1d345340c4e",
"assets/assets/images/errorlottie.json": "93be19a200d0f5696f94f926b9f8b83a",
"assets/assets/images/70242-man-working.json": "99d61cd95a8eda6c1ecd71262bc45a37",
"assets/assets/images/gym_pro.jpg": "82a3fbb30ed75b768b7b054c0e6d7475",
"assets/assets/images/24393-online-work.json": "b35181376b1cd01fb214816b7b88c6c9",
"assets/assets/images/propic.jpg": "64a9224cbb9777b4705712657dc7ed0e",
"assets/assets/images/105761-verification-code-otp-v2.json": "d9f6b2f9d41ea590e8a7edfc0039444c",
"assets/assets/images/8541611_calendar_schedule_event_date_icon.png": "3d0c6dd0e7f5e41a2f4e3f44d9aab8cf",
"assets/assets/images/93121-no-data-preview.json": "07c79f666a101f44d10200d28c6bd8ab",
"assets/assets/images/85795-man-and-woman-say-hi.json": "9d098a5339f80799826915ad1f0e8db0",
"assets/assets/images/96051-tta-certificate.json": "3fa15a044b7e856ecac09e7a197b98ed",
"assets/assets/images/135475-profile-created.json": "64066750805b6bcb3b13d036a659a9c2",
"assets/assets/images/14496-medal.json": "0d8416966ec98a925a71e6bfe1670206",
"assets/assets/images/85835-call-center-support.json": "ce6ef70fc68a3db2da65a909da18151b",
"assets/assets/images/75663-call-center-support-lottie-animation.json": "a541a63bf7d6ab08ba8b3cf7946277cf",
"assets/assets/images/99318-hms-loading.json": "996844d3a6c8df65193df95d75eb7613",
"assets/assets/images/Animation%2520-%25201703063359017.json": "02aa1c1e555a5388f29e9a217f7c5c97",
"assets/assets/images/97952-loading-animation-blue.json": "fbf8da3d6b7b1ec42c001d1257455310",
"assets/assets/images/mandumballs.jpg": "9f0e64b986af6f308c69e09e650282b0",
"assets/assets/images/Icon%2520akar-phone@3x.png": "9ad6f90efa12ae8c05fda8b15573c6a4",
"assets/assets/images/4829870_arrow_back_left_icon.png": "de30d23f758340fe76658e0a5b1910b0",
"assets/assets/images/person_pro.jpg": "ebe1b60e2b2d77f360b705b0577dea4f",
"assets/assets/images/Icon%2520akar-star.png": "aa7d8f7786afc5fac8114a78656f5e0d",
"assets/assets/images/No%2520data-cuate.png": "b9f1c3936522b3513dbbd62128f113a6",
"assets/assets/images/8665991_trophy_icon.png": "9dba275cb53f177319ddc600257649f9",
"assets/assets/images/clipart1804182.png": "9315cf0eef576dde9d29337b7d6b6e37",
"assets/assets/images/%25E2%2580%2594Pngtree%25E2%2580%2594customer%2520service%2520call%2520center%2520scenario_4825817.png": "f66e681973a5705398464c152ba9d3ed",
"assets/assets/images/GYmSplash.png": "5699a50bbf5228948f551e5448d3e38b",
"assets/assets/images/11185802_networking_connect_organization_marketing_business_icon.png": "026cbdce6dcaa109adb9bca0e0baf2b8",
"assets/assets/images/Icon%2520akar-location.png": "18391d434406ddfea95d928368f48987",
"assets/assets/images/17922-empty-list.json": "c9d49712d150a86b5c950b0c25d5749e",
"assets/assets/images/9073723_certificate_icon.png": "b38e49bedaf9f05ada5a9ae985e7b2a2",
"assets/assets/images/75214-verified.json": "445487ee834c6eb4a498f01329e73158",
"assets/assets/images/gymx.jpg": "59c2c43fbc4591341e76b3e83ba121a5",
"assets/assets/images/99951-verification.json": "e946ce8862e94333e4aae3640f6e48ca",
"assets/assets/images/clipart2083996.png": "7a959ca25e0bec45e198c172738122e2",
"assets/assets/images/enter-otp.jpg": "cd0a5655d5ff49f20c0853f2d018579f",
"assets/assets/images/8541611_calendar_schedule_event_date_icon@3x.png": "b85683021c805574af2bc81480885bb9",
"assets/assets/images/sign-up.jpg": "8d9c5b046127031259c57af9e24492e7",
"assets/assets/images/blank-profile.jpg": "a5369809569edc4e18ad64c495326f6e",
"assets/assets/images/abcd.png": "a80a5d55aa006ff4c2abf283412674f5",
"assets/assets/images/LuncherIcon.png": "bd8dfde997a82081fc08ea025674d4eb",
"assets/assets/images/123372-user-verified.json": "fa714d81025f7a011e736d8a833f757b",
"assets/assets/images/gym_splash_screen.png": "1a5f768ba4f6dd2fafbd375f3deed630",
"assets/assets/images/Icon%2520ion-email@3x.png": "644a691dec3efa416993e842bb56c2c6",
"assets/assets/images/EmptyBox.json": "980858c20962339f1951a377ec2a6e9c",
"assets/assets/images/Dumbel.png": "e8c2659e9b95e4a7c754dee1f47d8210",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
