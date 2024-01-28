'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b37a7e84ecbeee3df6d156152d2e4b43",
"assets/AssetManifest.bin.json": "7de645e435409efa796269726ac77427",
"assets/AssetManifest.json": "68e860d799ac7285624523b6cacf03cd",
"assets/assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/icons/flutter_logo.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/blaster_cover.png": "7c394c22057443bf57a9d8111a90eee7",
"assets/assets/images/blaster_icon.png": "3ee51a46832895bfc662e917e181c614",
"assets/assets/images/dj_cover.png": "65271518ecbb930d18b72bd88eb4c474",
"assets/assets/images/dj_icon.png": "ba8d1964c8cae25a33ca24dd095b002d",
"assets/assets/images/ig1.png": "75a4bf4e9ac8b552cdd035a73579e485",
"assets/assets/images/ig2.png": "f8448e0b2ab44abc138000fe3402a1cd",
"assets/assets/images/ig3.png": "7512a214b1570254b3ff1c8fa4904c2d",
"assets/assets/images/ig4.png": "80260de7f7024ce379126b589fc99f6c",
"assets/assets/images/ig5.png": "0ffd172de8d52e8f13a93444b1714162",
"assets/assets/images/ig6.png": "02788992110980adcc1d8c549b71a9ec",
"assets/assets/images/ig7.png": "a590994d7ed8c75c6d2a9cb00f25b386",
"assets/assets/images/ig_cover.png": "52e1b49fb76a02e9b2c0e7a8eaa72538",
"assets/assets/images/ig_icon.png": "a66416aa325090b2679a9d810f397509",
"assets/assets/images/jdm1.png": "a577262e784192fa2f43c28308b9bd0a",
"assets/assets/images/jdm2.png": "78c9a4ec8634ea16e86c5a158f377507",
"assets/assets/images/jdm3.png": "ec757971df2ec29f6c126996b1564ccc",
"assets/assets/images/jdm4.png": "0e9c50b5bfd233539dc8615ad0ea7644",
"assets/assets/images/jdm_cover.jpg": "f4536f784cfd67b2ceb2ffccdede5572",
"assets/assets/images/jdm_icon.png": "45f6bd4e5de7fa5892fd0b0cdb9f963a",
"assets/assets/images/med_cover.png": "4fe0f8e69e10095d7128f7edcc350848",
"assets/assets/images/med_icon.png": "cb5d705018b88f5a6a21b718d1dc4fdd",
"assets/assets/images/nizar_avatar.jpg": "3d6e1e6b3af054ffc25e35fb6770f343",
"assets/assets/images/nx_shop_icon.png": "eaa5b89a9257f665782d035bf9cb28f0",
"assets/assets/images/place_holder_img.jpg": "9e3f64ea883c30a596a31cc5f4d98510",
"assets/assets/images/polyTown_cover.png": "bc71cc11dd1e1a133cea13bcc8a490b6",
"assets/assets/images/polyTown_icon.png": "8ff2cf381845d7f3a68a11e98cb6ef26",
"assets/assets/images/qqp1.png": "3c91a63e944da6bf3e15ba1eb3ea407b",
"assets/assets/images/qqp2.png": "9f81d513823debcddcf9b0e69198f168",
"assets/assets/images/qqp3.png": "ed9623be1e0c21b8456ab021df01f01b",
"assets/assets/images/qqp4.png": "7c4fec45906a2bf22d9c55843e437e19",
"assets/assets/images/qqp_cover.png": "897d007369749b2eeffbe441f4c10882",
"assets/assets/images/qqp_icon.png": "0a2da4ffd0f1e76e6de69b45a66feb14",
"assets/assets/images/sa1.png": "1e1fb45448a65a22f497aef87004644b",
"assets/assets/images/sa2.png": "f4f4f245fb2dc12cc65cfc2df9e335e9",
"assets/assets/images/sa3.png": "7e7a6104e1bb187e34bd6d446c638413",
"assets/assets/images/sa4.png": "22a726155b0d71c48c37c1105759f07d",
"assets/assets/images/sa5.png": "cef81c776d8482da91dffd496e6669b0",
"assets/assets/images/sa_cover.png": "fb73072a701188c51f50432246f990e5",
"assets/assets/images/sa_icon.png": "43aa03271f71765ebe51ef978ad8f799",
"assets/assets/images/tiktok_clone_cover.jpeg": "41bcfd8e128d65a5262b83a57b53c3b3",
"assets/assets/images/tiktok_icon.png": "49477941cd4966f5da87934684e68514",
"assets/assets/svgs/email.svg": "566f54e0e16152fd93201b291c48eb88",
"assets/assets/svgs/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/svgs/gitlab.svg": "5e4ce93886940a77acdb69bcbdd3c55a",
"assets/assets/svgs/linkedin.svg": "4e5b77579246865acfe515d8215ddbb2",
"assets/assets/svgs/playstore.svg": "95b1f69bb8c5ac6805e1674280b1e7fa",
"assets/assets/svgs/quote.svg": "a3a56653acb8cd6160dc1179b5a43387",
"assets/assets/svgs/sketchfab.svg": "fa6d9f49127248a53e8150946f44a703",
"assets/FontManifest.json": "0fec34c4cf66c1964853681036c9181e",
"assets/fonts/MaterialIcons-Regular.otf": "9d4b4936f00f2c06016e2931d4dad402",
"assets/NOTICES": "3e208cfe222763b6e398cd2195da19b8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-icon-144x144.png": "4d031116ea1d6077618e1ed09ba21b83",
"icons/android-icon-192x192.png": "a205f565e27d858edb47d137fd45b170",
"icons/android-icon-36x36.png": "ade8bae8840b98191d441a2f6094f38a",
"icons/android-icon-48x48.png": "30f82da6352c879451c1c5534dc5e466",
"icons/android-icon-72x72.png": "dee1ba5ac899281275e5d1e702b52932",
"icons/android-icon-96x96.png": "cc7f0b2d2d9fe0d19ea333fafe5872ae",
"icons/apple-icon-114x114.png": "3825aa3793aef067e63459adcc65953e",
"icons/apple-icon-120x120.png": "fcd34694b038def49afba4d59795f4f9",
"icons/apple-icon-144x144.png": "4d031116ea1d6077618e1ed09ba21b83",
"icons/apple-icon-152x152.png": "c431c94cda55deae4b1259b1853d3dc3",
"icons/apple-icon-180x180.png": "683d309a4c875bdfc28acedb9a2aceeb",
"icons/apple-icon-57x57.png": "ec693b6de0747b28d3008d50a4cb895e",
"icons/apple-icon-60x60.png": "1a87236a46e8acd94f358e4d7bd0f48b",
"icons/apple-icon-72x72.png": "dee1ba5ac899281275e5d1e702b52932",
"icons/apple-icon-76x76.png": "eb763eb03f0f81e16231890d5c900262",
"icons/apple-icon-precomposed.png": "983ba70cb6eb6ead298294c23ef75d04",
"icons/apple-icon.png": "983ba70cb6eb6ead298294c23ef75d04",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "e3343fb808309066031d248c16e6a0a6",
"icons/favicon-32x32.png": "46acc85fbe3280f63f516eccfc876033",
"icons/favicon-96x96.png": "cc7f0b2d2d9fe0d19ea333fafe5872ae",
"icons/favicon.ico": "0017e9fd3fb549f8729472e5101e76dc",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "4d031116ea1d6077618e1ed09ba21b83",
"icons/ms-icon-150x150.png": "2316087a57fcc723bc4216bcc2701803",
"icons/ms-icon-310x310.png": "bf54e6ddcb280c1a3c99675b27586bcd",
"icons/ms-icon-70x70.png": "db57234ef266d55398c8864d688d01fd",
"index.html": "3112a56681033339f294886d8e214186",
"/": "3112a56681033339f294886d8e214186",
"main.dart.js": "0d1c8432043ec817c1b90c29864efd51",
"manifest.json": "a630f86aaa86066eba9a22082f7fe7a1",
"version.json": "1e655e58160a195d09568d39bdfc473c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
