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
    "url": "/_nuxt/manifest.7757a23f0a85dc4da7e3.js",
    "revision": "bcb5a0e17e5c1afbee125b0af841128e"
  },
  {
    "url": "/_nuxt/pages/comics/_id.466d8997edb91d84e009.js",
    "revision": "4135f8c25a0885ac4fdd0750d9d054f9"
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
    "url": "/_nuxt/pages/comics/upload.6af93cfd454a27e5d7c6.js",
    "revision": "1cc0aa12cd4e5639b749fa35d2e07370"
  },
  {
    "url": "/_nuxt/pages/groups/_id.e2612363d9a7e203c472.js",
    "revision": "cbae91679ba29528d8e0bd94a48b862b"
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
    "url": "/_nuxt/pages/index.fb5d956f760e45633234.js",
    "revision": "3d16ea3fa24de396350f7c4710f9a6b3"
  },
  {
    "url": "/_nuxt/pages/login/index.f7e4a8f9f28823964ca3.js",
    "revision": "a466e1127befc70d42c929f494a466bf"
  },
  {
    "url": "/_nuxt/pages/reader/_id.436daea895a475b3add1.js",
    "revision": "e7c27ac962cc9e61e81cce331577b3e5"
  },
  {
    "url": "/_nuxt/pages/register/index.90987779ec1398987826.js",
    "revision": "306a4846c227b1194ea1806274c05206"
  },
  {
    "url": "/_nuxt/pages/user/_id.094d520c503272a5c72a.js",
    "revision": "cfeeece45f8af33dc46906eaca933fb7"
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
    "url": "/_nuxt/pages/user/follows/index.9e69fcec0e9c26214e3e.js",
    "revision": "3670313d9f3bb7f831cd68486633ce05"
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

