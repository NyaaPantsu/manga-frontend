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
    "url": "/_nuxt/manifest.ebfb57e1eebd9c5443e0.js",
    "revision": "23e85de66dc7b4607954415788310209"
  },
  {
    "url": "/_nuxt/pages/comics/_id.268f9925d240f7f5bca9.js",
    "revision": "c59dcf2e684527ac59b03940a9ea9cb7"
  },
  {
    "url": "/_nuxt/pages/comics/add.93d479a5a4845883bc68.js",
    "revision": "80eb25d77c9ceb73b07c0d638f31d9de"
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
    "url": "/_nuxt/pages/comics/random.821bade13ef54426d740.js",
    "revision": "16f69e622476540ff6dad549caf4e3c4"
  },
  {
    "url": "/_nuxt/pages/comics/upload.a81a1c99d14573010f0f.js",
    "revision": "8a322a904d31a011c29f20aebd71e1eb"
  },
  {
    "url": "/_nuxt/pages/groups/_id.8f798baf945219707a6a.js",
    "revision": "292c98f5bbdf815035dd29a97298c0f6"
  },
  {
    "url": "/_nuxt/pages/groups/add.04b8b1c32464c388b8f9.js",
    "revision": "4867b3b61e70a6f1c0b896f9a35c793d"
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
    "url": "/_nuxt/pages/groups/index.7c22d0aafc6694845222.js",
    "revision": "f4a834088911bb3056d27edc008c2e46"
  },
  {
    "url": "/_nuxt/pages/index.f99e576059a135276eba.js",
    "revision": "e386ab065bddb8660e78efae97149ffb"
  },
  {
    "url": "/_nuxt/pages/login/index.947a92d693d2ade30060.js",
    "revision": "41cab77671d4ebae91abb04cc147f9e6"
  },
  {
    "url": "/_nuxt/pages/reader/_id.eaf25823536299f0e7a9.js",
    "revision": "d4b2ca3788c7dbdf81dce2711bac70c5"
  },
  {
    "url": "/_nuxt/pages/register/index.a0ca6e0f188820ef5bbc.js",
    "revision": "41a2215ec75bcce226dfd9a0ad355f81"
  },
  {
    "url": "/_nuxt/pages/user/_id.84ce1577edbcd7b21c7e.js",
    "revision": "daa2fcd62b39500f98b5a232a3b64153"
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
    "url": "/_nuxt/pages/user/follows/import.d4a86fd51adff0a71162.js",
    "revision": "da1282070b21ed590a5c017f5f5528f0"
  },
  {
    "url": "/_nuxt/pages/user/follows/index.dc3592ef892902f6f1fd.js",
    "revision": "6a5f947f29bf7cce89da4fdde1fefb99"
  },
  {
    "url": "/_nuxt/pages/user/index.13edbd22f19f5af3d666.js",
    "revision": "71cb8db99f92c3f860ef6438997df022"
  },
  {
    "url": "/_nuxt/vendor.270c27c84ff3024cb318.js",
    "revision": "d9d32d4d135e0a5415e133b2000bca09"
  },
  {
    "url": "/_nuxt/vendor.8192d52b1656aecb62f469fa8fe6ce37.css",
    "revision": "8192d52b1656aecb62f469fa8fe6ce37"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

