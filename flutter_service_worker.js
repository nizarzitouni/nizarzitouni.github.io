'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f0c78b198611e629a1f0116de23c4077",
"assets/AssetManifest.bin.json": "39b1d3a23e7e15687906d4501b7eacde",
"assets/AssetManifest.json": "85f3db64992b19acf93fd1f42a525cf1",
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
"assets/assets/images/blaster_pranks/bp1.png": "82dd1a13b61a8aa1986660c9b07f09c8",
"assets/assets/images/blaster_pranks/bp2.png": "23cbb9373c326bccf8802bdd91a8273a",
"assets/assets/images/blaster_pranks/bp3.png": "f8293b95206b17eb790b14d392c46503",
"assets/assets/images/blaster_pranks/bp4.png": "12a5362f7362d677cacd31e74c6dfdff",
"assets/assets/images/blaster_pranks/bp5.png": "72a034ad9f6276dcfa74f4d6f5ad78a9",
"assets/assets/images/blaster_pranks/bp6.png": "9e11461e3ec18b371c5ae03c62f186aa",
"assets/assets/images/blaster_pranks/bp7.png": "899047122d040a288393efebc16c80c2",
"assets/assets/images/dj_cover.png": "65271518ecbb930d18b72bd88eb4c474",
"assets/assets/images/dj_icon.png": "ba8d1964c8cae25a33ca24dd095b002d",
"assets/assets/images/double_jump/dj1.png": "f5bd2488409bef21e410e7596abfe794",
"assets/assets/images/double_jump/dj10.png": "dfbef131511525193eb223da4d915c93",
"assets/assets/images/double_jump/dj2.png": "99eb737db8e5f6ff198e014ad5b324d6",
"assets/assets/images/double_jump/dj3.png": "69374ed64b20fce0495dbc2e87d33790",
"assets/assets/images/double_jump/dj4.png": "68cc0f5434dc62a0e10f5f32030b960e",
"assets/assets/images/double_jump/dj5.png": "f43a2727ed66e0360ae6474ecf204ae5",
"assets/assets/images/double_jump/dj6.png": "edcb77740bd2affd8310b0b0ce9b94f2",
"assets/assets/images/double_jump/dj7.png": "f77a0e3db2da6ef4e7cb30921edcf0f1",
"assets/assets/images/double_jump/dj8.png": "a3fb075168938836ad0b7247285d20cb",
"assets/assets/images/double_jump/dj9.png": "6dcab9bc7f4226ed571e24faabb91ca3",
"assets/assets/images/foodapp1.jpg": "318e53775997e80b14d7b9106d02b30d",
"assets/assets/images/foodapp2.jpg": "64f5ec509aba1ec84f0be9150cede445",
"assets/assets/images/foodapp_cover.png": "6744c5f67ffa027923068c35a9c569ae",
"assets/assets/images/foodapp_icon.png": "ea073af60a3baa5a556038d024902997",
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
"assets/assets/images/medieval_pack/mp1.png": "bd533106c76818b03ca5a4fdae457b09",
"assets/assets/images/medieval_pack/mp2.png": "0d95ada31f640b496bce912a522b12c8",
"assets/assets/images/medieval_pack/mp3.png": "c143b9d11c6df76e4c023f3468730d4a",
"assets/assets/images/medieval_pack/mp4.png": "7b5ba93d536b620e3540a09af40624c7",
"assets/assets/images/med_cover.png": "4fe0f8e69e10095d7128f7edcc350848",
"assets/assets/images/med_icon.png": "cb5d705018b88f5a6a21b718d1dc4fdd",
"assets/assets/images/nizar_avatar.jpg": "3d6e1e6b3af054ffc25e35fb6770f343",
"assets/assets/images/nx1.png": "d5d1246ad15819f80ae45550c443055c",
"assets/assets/images/nx2.png": "9004c8db4282a2480565ef6d3acac5ae",
"assets/assets/images/nx3.png": "8747d9f9173f19c7f31e8e58bf90d0f6",
"assets/assets/images/nx4.png": "863c63e2aa29e18342418e2337adc04a",
"assets/assets/images/nx5.png": "6d94a3e6bed9aa9b1223ce507aeb03da",
"assets/assets/images/nx6.png": "cbd9c6850b5b16b31f71673aef849d40",
"assets/assets/images/nx_cover.png": "a9ed8d97b120dd22a46773bd6e433da7",
"assets/assets/images/nx_icon.png": "c476fda558118f410141c09d2e819d24",
"assets/assets/images/nx_shop_icon.png": "eaa5b89a9257f665782d035bf9cb28f0",
"assets/assets/images/place_holder_img.jpg": "9e3f64ea883c30a596a31cc5f4d98510",
"assets/assets/images/polyTown_cover.png": "bc71cc11dd1e1a133cea13bcc8a490b6",
"assets/assets/images/polyTown_icon.png": "8ff2cf381845d7f3a68a11e98cb6ef26",
"assets/assets/images/poly_town/pt1.png": "167d37f9595831899f9395a5ac6b87d3",
"assets/assets/images/poly_town/pt2.png": "530fc82db5cc78ac0b6000e2e7bda831",
"assets/assets/images/ps.jpg": "04a1d6ab7f8a8e9d058a896d399a86e8",
"assets/assets/images/ps2.jpg": "63fb7667a406f8cef0dcb4f04a16f89c",
"assets/assets/images/ps3.jpg": "6f1fe4000673ab8ba4954a6f6458f28d",
"assets/assets/images/ps4.jpg": "7bd89feece876e3851f330d0d4e47f61",
"assets/assets/images/ps_cover.png": "e351794b6c35b921fc9814e5e41d86b1",
"assets/assets/images/ps_icon.png": "7df3ee1fbe58c4f092ea0b28fc77ece0",
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
"assets/assets/images/tune_hub/th1.jpg": "6c084a74c2789f7560b0f6692330b6cd",
"assets/assets/images/tune_hub/th2.jpg": "24af9aaa9e06a0f332718739a75b471b",
"assets/assets/images/tune_hub/th3.jpg": "d33d84d386c1cf19fb1b89bc9eb256bf",
"assets/assets/images/tune_hub/th4.jpg": "4c3e63873125623b3a73b0701ba2cd7e",
"assets/assets/images/tune_hub/th5.jpg": "fb60328ee449419e87686ee7e25b927e",
"assets/assets/images/tune_hub/th_cover.png": "995d7b3cd5d5fdac693801e6549eb767",
"assets/assets/images/tune_hub/th_icon.png": "756b6d018d73c8f598256124bacbd574",
"assets/assets/svgs/download.svg": "6fe94fbf200a3bcbaf7a68d7adbc6ecc",
"assets/assets/svgs/email.svg": "566f54e0e16152fd93201b291c48eb88",
"assets/assets/svgs/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/svgs/gitlab.svg": "55f85cba6ef6468db316e360bd631e22",
"assets/assets/svgs/linkedin.svg": "4e5b77579246865acfe515d8215ddbb2",
"assets/assets/svgs/playstore.svg": "95b1f69bb8c5ac6805e1674280b1e7fa",
"assets/assets/svgs/quote.svg": "a3a56653acb8cd6160dc1179b5a43387",
"assets/assets/svgs/sketchfab.svg": "fa6d9f49127248a53e8150946f44a703",
"assets/FontManifest.json": "0fec34c4cf66c1964853681036c9181e",
"assets/fonts/MaterialIcons-Regular.otf": "cba2dd0c15ba2020ed7b6741c09d05d8",
"assets/NOTICES": "0908438dfa86b9d1719faae59fefe79f",
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
"index.html": "bddfaab0361e8c233805840a78527800",
"/": "bddfaab0361e8c233805840a78527800",
"main.dart.js": "c0a17ae0ec544f843c31fd8f75a82030",
"manifest.json": "a630f86aaa86066eba9a22082f7fe7a1",
"version.json": "008f8bcfd07de9edc75e4a6bf4c565c4"};
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
