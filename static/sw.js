importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "manga.sh",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.4eee3a6c8b2f233aea1619579423dc9f.css",
    "revision": "4eee3a6c8b2f233aea1619579423dc9f"
  },
  {
    "url": "/_nuxt/app.6c4f6d117cde110cd26d.js",
    "revision": "1f1d903f02b3a6e869fb6e07c0ae1151"
  },
  {
    "url": "/_nuxt/layouts/default.f2bc0b796e095f0e8684.js",
    "revision": "f1bbd1275a87185c6127ce1e2a7725e9"
  },
  {
    "url": "/_nuxt/manifest.f902ed4d3b13d671c951.js",
    "revision": "26f136b0008b843ae0b6256f26a0f2c9"
  },
  {
    "url": "/_nuxt/pages/comics/_id.5da7eac2f217f7b5fbcf.js",
    "revision": "24a9006fcfb9a4df3274f8a80636f0b8"
  },
  {
    "url": "/_nuxt/pages/comics/add.6f1d70255e774f276181.js",
    "revision": "84b7242c817ef365d10730bef1abe676"
  },
  {
    "url": "/_nuxt/pages/comics/edit.c141985ff3644e0901e3.js",
    "revision": "70f5eef0cc7b8b4d6cd179283adcf99e"
  },
  {
    "url": "/_nuxt/pages/comics/index.ec57fd9d109c2d202932.js",
    "revision": "ac77308a89e2d681de712872334665a7"
  },
  {
    "url": "/_nuxt/pages/comics/random.0413d3cca85900bdc5f3.js",
    "revision": "0b8702ebc87dcf6a2323d3b1409e76e7"
  },
  {
    "url": "/_nuxt/pages/comics/upload.415b4f6e2bf3e8f32cc3.js",
    "revision": "23f66f3a5dc2f2c45f032e2e700f2a20"
  },
  {
    "url": "/_nuxt/pages/groups/_id.3c3e8c8bfa86f1880f12.js",
    "revision": "8a1b1a38692d293c0393fc199848774d"
  },
  {
    "url": "/_nuxt/pages/groups/add.d67fc534785e30c36351.js",
    "revision": "3d50f45d9775d62c118b2acee0a32943"
  },
  {
    "url": "/_nuxt/pages/groups/delete.d1b5c9030ea783b1f5ee.js",
    "revision": "d2531fff82df3ea256d73417b8e9aefb"
  },
  {
    "url": "/_nuxt/pages/groups/edit.6609a4ff7e516ac56cbe.js",
    "revision": "a2c0e3df2bd88e2afa65be6850b3481f"
  },
  {
    "url": "/_nuxt/pages/groups/index.116384ca4de359852a26.js",
    "revision": "1378b0f4d6435413bcd2ef0b44464f87"
  },
  {
    "url": "/_nuxt/pages/index.4c878c81bc59ac6d669a.js",
    "revision": "a67942eeab4759d83cab620cc72d5755"
  },
  {
    "url": "/_nuxt/pages/login/index.f7e4a8f9f28823964ca3.js",
    "revision": "a466e1127befc70d42c929f494a466bf"
  },
  {
    "url": "/_nuxt/pages/reader/_id.9c8cee0e8eaf27aaea03.js",
    "revision": "cc2155e18f0ac010cbb477c73742cefa"
  },
  {
    "url": "/_nuxt/pages/register/index.90987779ec1398987826.js",
    "revision": "306a4846c227b1194ea1806274c05206"
  },
  {
    "url": "/_nuxt/pages/user/_id.e85866737065e4c65cde.js",
    "revision": "b850fdc1fd4f1f68308cb34e2e42f5a8"
  },
  {
    "url": "/_nuxt/pages/user/delete.937812cd85ba502769ae.js",
    "revision": "28b4d98c675e0d6fe7cef4a4e1f4af45"
  },
  {
    "url": "/_nuxt/pages/user/edit.e8f6f87dc49c6be7b816.js",
    "revision": "fb59b70d6f29d7448d4b74b9b400c108"
  },
  {
    "url": "/_nuxt/pages/user/follows/import.a5c82afb05c8dfc3de78.js",
    "revision": "a84888089bb9d3206e564b1ad809ece2"
  },
  {
    "url": "/_nuxt/pages/user/follows/index.5fd4d807056b26f89647.js",
    "revision": "e413d8f1fb7b533bbc541b76cc464092"
  },
  {
    "url": "/_nuxt/pages/user/index.13edbd22f19f5af3d666.js",
    "revision": "71cb8db99f92c3f860ef6438997df022"
  },
  {
    "url": "/_nuxt/vendor.9b0f86d9040618499ab9c478a5d383b6.css",
    "revision": "9b0f86d9040618499ab9c478a5d383b6"
  },
  {
    "url": "/_nuxt/vendor.d68682f97240fe0b7687.js",
    "revision": "2440956f3b5da9d0f50e1d056fdd1bb2"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

