'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "9b5dedee800dd9fde30a2a6d11553b22",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cb29fb7cf935e23e904c95f2a217f1cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "747fc628cd892cf027f47d1dbd431a3f",
".git/logs/refs/heads/main": "1d3a0dca4b074d1e6ca7230d99c5b36c",
".git/logs/refs/remotes/origin/main": "b2f8e7e1f1f4ed81d83859828b2eae59",
".git/objects/02/14f94e2b0bdec73502be2d0fce4919f1094435": "957b165e28f1755cc3e0ab72005dac6e",
".git/objects/02/bc1f3c42417a59b6fbbdf6cf9a985c414ac738": "4673e15983a14fc80b0cd6342b43413c",
".git/objects/05/eabafb73360c682d586b9f48088a961775ee19": "64a0f3e0daadab75f45c1d4baf7a59e1",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/8cd2eb981778f80864d99051cc38275ba7eef2": "6dbe6a1101d7571589127ed627e1100c",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/8b803d61f1893e35f253bcd46f31f9e5817f2a": "5385ac0b50bfb358de64a6a68f89ab23",
".git/objects/21/ba26e5e9e544ba2eeebd6a157b85e80ae03a4e": "a9217a13134086199751ec93bac13928",
".git/objects/23/8a284b959cb9479caae80f374ce077c5e717da": "c173eca53598899ee92bec8d6cd68cc7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/f1a02e9f9ac9a8d375a84b31eb413c2c36b82f": "500ae9a4817115fea15ef6dbd693a34c",
".git/objects/2b/87dbce2981a2265080d2d2a1140168ed6442fa": "843d2be6f21213e872d05d330c2b5985",
".git/objects/2f/d9505a9a7d4232ccc22c1d4be97942e0d7d91d": "ef555d933b33c6dcf89f2cd2405b9322",
".git/objects/3b/a0758316b250722abed74f77eab61e28379f44": "2698426469555f809842f8e52070a7ba",
".git/objects/3d/1374c31be2b2cf0c29c4877885541b79e01fa0": "669b4a46e9caa7340a4d257833124667",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/818b92c0fadc82e2435267cb5f0ab4fdcfbdca": "a4d05980bcff2e571d60c883a27f0ad1",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/b448e3da6944b4da9ea5fb5f1b4dede5d69335": "4d9e1985eb64e8d9dedf46b276860241",
".git/objects/50/23b35c0a8ab51c1747a0e9f6951fb6a19c47f3": "34a66eec284feb1f4181047f1ebb3d2c",
".git/objects/51/d7fab7ee67e68049aecd121c9b2f6aa85bc316": "f9321076e43d0c80908bd265a8b342de",
".git/objects/53/7b0f87f8130b1be6082e38bb4e2e736f16085f": "936dab066475d3635272160dcfb1fa98",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/408fc1356eeb5ca14ed66eea99c83cdff11d8c": "e69bdd0013e51cc2980648df9e0daa67",
".git/objects/5f/8363d71f30b129aa46010e7b21a552d8676ac4": "d40f01aa71a413a7bcb314df1d1b852e",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6b/b672f1e5ae33434ee0508c934c904dad19cd33": "9038b52d4b64ad11992007009e5b3138",
".git/objects/6e/32110076b3468a1542ac6d319869dd886697b3": "145e9f50676ab5ac5383ca355502924e",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/84/75cc7ecf813f163294fb912ed91cc19e46cde6": "b9adb6df0ccc8cd8e5e8c8dbb9db39cd",
".git/objects/84/c6d741025d627187f7e388e7695f9fdf9a6de3": "3a111d4a16c625a0bc42b1ed677df0ce",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3f246c5f854a2bc0d9ac3066626cd31f79e017": "88a27852dc2800fc5caf14aeb6b315d0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/99/b5c6e486c965d03d94d2f7fccb8bf686a021a4": "53e1627d80ac06a23314d40f39357053",
".git/objects/9a/0c4af1e4ef2bf4d324923f6199048d26a97f64": "c52fb1ffa284d8dda619a5c9d79bb1b4",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/ab/d3956c3a25d7cc72131a8a5a9ab86a9c496ed9": "32f36c6b67b8ea68213aa5d657b74bac",
".git/objects/b2/8d0798767dbe69c1ded0fcd8ca13a77540502e": "aa74a0d32af149bc6c4ed4d6f1610cc8",
".git/objects/b2/a99a02b90f6bf43e1e4812a98702d60b723cbd": "f329121f8f522db90c90bb5044afcebd",
".git/objects/b2/d0d39214c65e539e56dd9f5448148a1e149c98": "5c43531b5effc1a86e97067ad6e49229",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/a1442deb907c4492751e32b4a30bb8e3d5ce34": "c6d4a684589ddcd849584257ed08dbb7",
".git/objects/c2/ca5849e2e028ea99cf37a50bedb02a3e4a4672": "d9eb21d187676f0a640208b38586a7f5",
".git/objects/c2/e72b653e2d3c2b042e7df144354618c6bb6997": "554d5a6a608963b784daf5de2308e839",
".git/objects/c5/f179770fce5120b15fc703a1c06256052d78cf": "a82204a40f09006ffdf9d1ba4ba0c94b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/23045af6fb253b4a0e228b83579839622fe523": "0f1bdb12d9b7516eaae622cb5a5f64ba",
".git/objects/d3/303ea48bc67c33fd199f656d94c77e0b49bd02": "6bae849da80b7c723600ec25b58057b6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/bb29ac89c7b91bee1a1ccf46b1e25ab5a12c33": "d11539903586444d1bbf232d43411a52",
".git/objects/e0/172d37b325c6f4a2b0c605fd3a57f7a71f4bcf": "a73147a738f92d08b93bad1200469de9",
".git/objects/e8/4b81ede4eb499b28554e8a15d6a2f328f617a0": "2412b04a445cfea3a4fbbef68a67284d",
".git/objects/e8/844161a657ad15dd7f526f58908c9c781fe15d": "388f7737414f5582946337a00e8a80d5",
".git/objects/ea/42f3304ec924ba7ff7215223114c0067e09021": "b589d13d3c6678d703298e08b2919a20",
".git/objects/ea/b181ebb0543ef39a6ffb5bf83beda27c0e9847": "069df14041e2cf90ed8ace4e5580c88e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/642baead626ea67c0413ef48797747e5801ccd": "88a8db2244e2a659ea47f79179e2e7df",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/c9a5d09feac6e09bfae60db952bd9e3e5a06db": "cbb920f81cf251b63e4fd3f681acb02f",
".git/refs/heads/main": "de4626333a0d9bd4b7586d4538aa34e1",
".git/refs/remotes/origin/main": "de4626333a0d9bd4b7586d4538aa34e1",
"assets/AssetManifest.bin": "d4c9c43a7ed767672624ec8ebfb1cffc",
"assets/AssetManifest.bin.json": "088042b87250ccf695970f74da9edffc",
"assets/AssetManifest.json": "d6f9422b011e820bd71b93b0a0f13466",
"assets/assets/icons/briefcase.png": "54e57a8970e799c4eb43affefaffb76e",
"assets/assets/icons/Coffee.png": "9676a1b1c4e8262fbf44136e024aaf80",
"assets/assets/icons/design.png": "a1c9a8202641d6ee72acbb5be8fa7d4b",
"assets/assets/icons/fiverr.png": "5b4ba4aa97e96aac5ff88180a1dc3a1e",
"assets/assets/icons/freelancer.png": "cf6cf4d5c4b2c07bee62987b8e88ee85",
"assets/assets/icons/github.png": "5a5b3cd92843071e229e4f42210ee405",
"assets/assets/icons/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/icons/happy.png": "59c41b9c86a181513e83549f55108bff",
"assets/assets/icons/instagram.png": "dd75520d426afb6920bd2415288fe7d2",
"assets/assets/icons/launch.png": "4880b0d64ee2a28de40728dfd2959204",
"assets/assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/icons/maintenance.png": "a086936f69661eb6a4e2f9c3bc64e37d",
"assets/assets/icons/menus.png": "0d66e635c3bcd7ac359c13e6a075fc42",
"assets/assets/icons/phone.png": "6e6cf353f0d25ecc4fe384aa93456968",
"assets/assets/icons/placeholder.png": "cfc4da7810da241e0e6b2d8f3772ef84",
"assets/assets/icons/planning.png": "fe15b80af216b488484d5481fa37e440",
"assets/assets/icons/profile.webp": "c5ee29aa533c26eb3e90a9ee823bb69a",
"assets/assets/icons/programming.png": "4e5c41a92eacf041faee8a03b42674db",
"assets/assets/icons/service.png": "f4a336544deb03aeec0b1c9ba49db27b",
"assets/assets/icons/sewabharti.webp": "2b929b1eb8fcd47beef884cce33ba9ad",
"assets/assets/icons/tenderDetail.webp": "628a62eb6f7b9b3c0dde66978d8f810d",
"assets/assets/icons/testing.png": "f22ee4d65de614a749e16843a7f1121a",
"assets/assets/icons/twitter.png": "6352d995b0c2a0f882503daa1d99a2e7",
"assets/assets/icons/upwork.png": "54ba6f7c1cb5f6370f771a5dba384884",
"assets/assets/icons/weather_info.webp": "02892fd8119131d0597a2c250ecedc45",
"assets/assets/icons/welding_worksA.webp": "a9a7734291d5541a5be2d1e255953460",
"assets/assets/icons/whatsapp.png": "1aa80beced508dbc8357acd5c5a85b08",
"assets/assets/icons/workout.webp": "2859e3f7e3250c38a7534b557a0f316b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ce7df52903317f3b6035991ccfecfdca",
"assets/NOTICES": "9b81cf339f32888c3ec643f86146f436",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b0b323d0965c0227ddb2b080e8ea9b3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0eaf24f7e6283741681b5362c5783d44",
"/": "0eaf24f7e6283741681b5362c5783d44",
"main.dart.js": "b4edb57b7937971741394eb72eea6b87",
"manifest.json": "8836bc035984c10a2b3625e8bfe2a287",
"version.json": "1e98a4f7390d2e9d9ad60c99fb0aff05"};
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
