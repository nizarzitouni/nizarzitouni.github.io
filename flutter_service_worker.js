'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e1fec1658e1303e5478a35e164541697",
"assets/AssetManifest.bin.json": "8579e0d9bcd0ddfd433500dbb14d932f",
"assets/AssetManifest.json": "6c1c4a4020097933d911e7b5da377604",
"assets/assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/icons/flutter_logo.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/game_design/blaster_pranks/blaster_cover.png": "7c394c22057443bf57a9d8111a90eee7",
"assets/assets/images/game_design/blaster_pranks/blaster_icon.png": "3ee51a46832895bfc662e917e181c614",
"assets/assets/images/game_design/blaster_pranks/bp1.png": "82dd1a13b61a8aa1986660c9b07f09c8",
"assets/assets/images/game_design/blaster_pranks/bp2.png": "23cbb9373c326bccf8802bdd91a8273a",
"assets/assets/images/game_design/blaster_pranks/bp3.png": "f8293b95206b17eb790b14d392c46503",
"assets/assets/images/game_design/blaster_pranks/bp4.png": "12a5362f7362d677cacd31e74c6dfdff",
"assets/assets/images/game_design/blaster_pranks/bp5.png": "72a034ad9f6276dcfa74f4d6f5ad78a9",
"assets/assets/images/game_design/blaster_pranks/bp6.png": "9e11461e3ec18b371c5ae03c62f186aa",
"assets/assets/images/game_design/blaster_pranks/bp7.png": "899047122d040a288393efebc16c80c2",
"assets/assets/images/game_design/double_jump/dj1.png": "f5bd2488409bef21e410e7596abfe794",
"assets/assets/images/game_design/double_jump/dj10.png": "dfbef131511525193eb223da4d915c93",
"assets/assets/images/game_design/double_jump/dj2.png": "99eb737db8e5f6ff198e014ad5b324d6",
"assets/assets/images/game_design/double_jump/dj3.png": "69374ed64b20fce0495dbc2e87d33790",
"assets/assets/images/game_design/double_jump/dj4.png": "68cc0f5434dc62a0e10f5f32030b960e",
"assets/assets/images/game_design/double_jump/dj5.png": "f43a2727ed66e0360ae6474ecf204ae5",
"assets/assets/images/game_design/double_jump/dj6.png": "edcb77740bd2affd8310b0b0ce9b94f2",
"assets/assets/images/game_design/double_jump/dj7.png": "f77a0e3db2da6ef4e7cb30921edcf0f1",
"assets/assets/images/game_design/double_jump/dj8.png": "a3fb075168938836ad0b7247285d20cb",
"assets/assets/images/game_design/double_jump/dj9.png": "6dcab9bc7f4226ed571e24faabb91ca3",
"assets/assets/images/game_design/double_jump/dj_cover.png": "65271518ecbb930d18b72bd88eb4c474",
"assets/assets/images/game_design/double_jump/dj_icon.png": "ba8d1964c8cae25a33ca24dd095b002d",
"assets/assets/images/game_design/medieval_pack/med_cover.png": "4fe0f8e69e10095d7128f7edcc350848",
"assets/assets/images/game_design/medieval_pack/med_icon.png": "cb5d705018b88f5a6a21b718d1dc4fdd",
"assets/assets/images/game_design/medieval_pack/mp1.png": "bd533106c76818b03ca5a4fdae457b09",
"assets/assets/images/game_design/medieval_pack/mp2.png": "0d95ada31f640b496bce912a522b12c8",
"assets/assets/images/game_design/medieval_pack/mp3.png": "c143b9d11c6df76e4c023f3468730d4a",
"assets/assets/images/game_design/medieval_pack/mp4.png": "7b5ba93d536b620e3540a09af40624c7",
"assets/assets/images/game_design/poly_town/polyTown_cover.png": "bc71cc11dd1e1a133cea13bcc8a490b6",
"assets/assets/images/game_design/poly_town/polyTown_icon.png": "8ff2cf381845d7f3a68a11e98cb6ef26",
"assets/assets/images/game_design/poly_town/pt1.png": "167d37f9595831899f9395a5ac6b87d3",
"assets/assets/images/game_design/poly_town/pt2.png": "530fc82db5cc78ac0b6000e2e7bda831",
"assets/assets/images/mob/audio_libro/audio_libro_1.png": "7ae04ae9acac7d01b436071ea5ff0a75",
"assets/assets/images/mob/audio_libro/audio_libro_2.png": "3ee1e676b688761d5ca8ec64754a585c",
"assets/assets/images/mob/audio_libro/audio_libro_3.png": "f5e84cf29f56cd314632716d2f8034b3",
"assets/assets/images/mob/audio_libro/audio_libro_4.png": "7caba5412ec0b5e1cc181524423a1608",
"assets/assets/images/mob/audio_libro/audio_libro_5.png": "a1039ee75765c27cf003381c0c0d834a",
"assets/assets/images/mob/audio_libro/audio_libro_cover.png": "6084fac2119e95e99313705f87739aaa",
"assets/assets/images/mob/audio_libro/audio_libro_icon.png": "a6f0c1b3741dcf3dbe563107ce8e5cd3",
"assets/assets/images/mob/food_app/foodapp1.jpg": "318e53775997e80b14d7b9106d02b30d",
"assets/assets/images/mob/food_app/foodapp2.jpg": "64f5ec509aba1ec84f0be9150cede445",
"assets/assets/images/mob/food_app/foodapp_cover.png": "6744c5f67ffa027923068c35a9c569ae",
"assets/assets/images/mob/food_app/foodapp_icon.png": "ea073af60a3baa5a556038d024902997",
"assets/assets/images/mob/ig/ig1.png": "75a4bf4e9ac8b552cdd035a73579e485",
"assets/assets/images/mob/ig/ig2.png": "f8448e0b2ab44abc138000fe3402a1cd",
"assets/assets/images/mob/ig/ig3.png": "7512a214b1570254b3ff1c8fa4904c2d",
"assets/assets/images/mob/ig/ig4.png": "80260de7f7024ce379126b589fc99f6c",
"assets/assets/images/mob/ig/ig5.png": "0ffd172de8d52e8f13a93444b1714162",
"assets/assets/images/mob/ig/ig6.png": "02788992110980adcc1d8c549b71a9ec",
"assets/assets/images/mob/ig/ig7.png": "a590994d7ed8c75c6d2a9cb00f25b386",
"assets/assets/images/mob/ig/ig_cover.png": "52e1b49fb76a02e9b2c0e7a8eaa72538",
"assets/assets/images/mob/ig/ig_icon.png": "a66416aa325090b2679a9d810f397509",
"assets/assets/images/mob/jdm/jdm1.png": "a577262e784192fa2f43c28308b9bd0a",
"assets/assets/images/mob/jdm/jdm2.png": "78c9a4ec8634ea16e86c5a158f377507",
"assets/assets/images/mob/jdm/jdm3.png": "ec757971df2ec29f6c126996b1564ccc",
"assets/assets/images/mob/jdm/jdm4.png": "0e9c50b5bfd233539dc8615ad0ea7644",
"assets/assets/images/mob/jdm/jdm_cover.jpg": "f4536f784cfd67b2ceb2ffccdede5572",
"assets/assets/images/mob/jdm/jdm_icon.png": "45f6bd4e5de7fa5892fd0b0cdb9f963a",
"assets/assets/images/mob/live_stream_simulator/lss1.png": "142d53b90c0cdceae6006f11064fc833",
"assets/assets/images/mob/live_stream_simulator/lss2.png": "461122ae0583cf60d6c444303933ee53",
"assets/assets/images/mob/live_stream_simulator/lss3.png": "0c0ecb9ef7ca3d656a623ee4b971dc0b",
"assets/assets/images/mob/live_stream_simulator/lss4.png": "68bc648a7ae68f74854394f6c53b8c30",
"assets/assets/images/mob/live_stream_simulator/lss5.png": "d64c1363c1d50f232f2d314c03f9a8d6",
"assets/assets/images/mob/live_stream_simulator/lss_cover.png": "f90806b7438a416f0acd6b92bfb6909e",
"assets/assets/images/mob/live_stream_simulator/lss_icon.png": "8790089525a5d32bc9c6e20a5c06b8e8",
"assets/assets/images/mob/nx_shop/nx1.png": "d5d1246ad15819f80ae45550c443055c",
"assets/assets/images/mob/nx_shop/nx2.png": "9004c8db4282a2480565ef6d3acac5ae",
"assets/assets/images/mob/nx_shop/nx3.png": "8747d9f9173f19c7f31e8e58bf90d0f6",
"assets/assets/images/mob/nx_shop/nx4.png": "863c63e2aa29e18342418e2337adc04a",
"assets/assets/images/mob/nx_shop/nx5.png": "6d94a3e6bed9aa9b1223ce507aeb03da",
"assets/assets/images/mob/nx_shop/nx6.png": "cbd9c6850b5b16b31f71673aef849d40",
"assets/assets/images/mob/nx_shop/nx_cover.png": "a9ed8d97b120dd22a46773bd6e433da7",
"assets/assets/images/mob/nx_shop/nx_icon.png": "c476fda558118f410141c09d2e819d24",
"assets/assets/images/mob/nx_shop/nx_shop_icon.png": "eaa5b89a9257f665782d035bf9cb28f0",
"assets/assets/images/mob/peak_store/ps_1.png": "6fe477d892e685ad5e11bf9645f8d222",
"assets/assets/images/mob/peak_store/ps_2.png": "49d100cd997444ea500f3fd515071591",
"assets/assets/images/mob/peak_store/ps_3.png": "765448c6b3f4f0438313933dd3a42039",
"assets/assets/images/mob/peak_store/ps_4.png": "fd01b9a9028ecfda92c5876b33435c74",
"assets/assets/images/mob/peak_store/ps_cover.png": "da36c95974efe010d7830c5bd28756cb",
"assets/assets/images/mob/peak_store/ps_icon.png": "7df3ee1fbe58c4f092ea0b28fc77ece0",
"assets/assets/images/mob/quick_qr_pro/qqp1.png": "3c91a63e944da6bf3e15ba1eb3ea407b",
"assets/assets/images/mob/quick_qr_pro/qqp2.png": "9f81d513823debcddcf9b0e69198f168",
"assets/assets/images/mob/quick_qr_pro/qqp3.png": "ed9623be1e0c21b8456ab021df01f01b",
"assets/assets/images/mob/quick_qr_pro/qqp4.png": "7c4fec45906a2bf22d9c55843e437e19",
"assets/assets/images/mob/quick_qr_pro/qqp_cover.png": "897d007369749b2eeffbe441f4c10882",
"assets/assets/images/mob/quick_qr_pro/qqp_icon.png": "0a2da4ffd0f1e76e6de69b45a66feb14",
"assets/assets/images/mob/sa3arli/sa1.png": "1e1fb45448a65a22f497aef87004644b",
"assets/assets/images/mob/sa3arli/sa2.png": "f4f4f245fb2dc12cc65cfc2df9e335e9",
"assets/assets/images/mob/sa3arli/sa3.png": "7e7a6104e1bb187e34bd6d446c638413",
"assets/assets/images/mob/sa3arli/sa4.png": "22a726155b0d71c48c37c1105759f07d",
"assets/assets/images/mob/sa3arli/sa5.png": "cef81c776d8482da91dffd496e6669b0",
"assets/assets/images/mob/sa3arli/sa_cover.png": "fb73072a701188c51f50432246f990e5",
"assets/assets/images/mob/sa3arli/sa_icon.png": "43aa03271f71765ebe51ef978ad8f799",
"assets/assets/images/mob/tiktok/tiktok_clone_cover.jpeg": "41bcfd8e128d65a5262b83a57b53c3b3",
"assets/assets/images/mob/tiktok/tiktok_icon.png": "49477941cd4966f5da87934684e68514",
"assets/assets/images/mob/tune_hub/th1.png": "6894a267e02f1443ecf0c9fa0d7e2514",
"assets/assets/images/mob/tune_hub/th2.png": "0105f8a7d3de0a597f23d860f4b1a3f4",
"assets/assets/images/mob/tune_hub/th3.png": "dde7351b72ce02ffa26611d321145d8d",
"assets/assets/images/mob/tune_hub/th4.png": "a10c9d8d233d2685cb282470e46febc3",
"assets/assets/images/mob/tune_hub/th5.png": "bce192bb701a1dc51b8bba41afe85575",
"assets/assets/images/mob/tune_hub/th_cover.png": "80dc88ca570bbe83f7bfa20436215c50",
"assets/assets/images/mob/tune_hub/th_coverrrr.png": "995d7b3cd5d5fdac693801e6549eb767",
"assets/assets/images/mob/tune_hub/th_icon.png": "756b6d018d73c8f598256124bacbd574",
"assets/assets/images/nizar_avatar.jpg": "3d6e1e6b3af054ffc25e35fb6770f343",
"assets/assets/images/place_holder_img.jpg": "9e3f64ea883c30a596a31cc5f4d98510",
"assets/assets/svgs/download.svg": "6fe94fbf200a3bcbaf7a68d7adbc6ecc",
"assets/assets/svgs/email.svg": "566f54e0e16152fd93201b291c48eb88",
"assets/assets/svgs/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/svgs/gitlab.svg": "55f85cba6ef6468db316e360bd631e22",
"assets/assets/svgs/linkedin.svg": "4e5b77579246865acfe515d8215ddbb2",
"assets/assets/svgs/playstore.svg": "95b1f69bb8c5ac6805e1674280b1e7fa",
"assets/assets/svgs/quote.svg": "a3a56653acb8cd6160dc1179b5a43387",
"assets/assets/svgs/sketchfab.svg": "fa6d9f49127248a53e8150946f44a703",
"assets/FontManifest.json": "0fec34c4cf66c1964853681036c9181e",
"assets/fonts/MaterialIcons-Regular.otf": "c2fa5561ae379531bdc1dee9c0dadab3",
"assets/NOTICES": "673bc05b4642f1200c2ce752502a85b7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
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
"index.html": "dc95e032d113cdae1766448a611bf0a8",
"/": "dc95e032d113cdae1766448a611bf0a8",
"main.dart.js": "e1453e53932f1d693ad85e363a457ae9",
"manifest.json": "a630f86aaa86066eba9a22082f7fe7a1",
"version.json": "dce101697c25724a97cef6582465827b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
