importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "manga.sh",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.69ee0074222a06ca9cba34966d8437b7.css",
    "revision": "69ee0074222a06ca9cba34966d8437b7"
  },
  {
    "url": "/_nuxt/app.ab07029d8e679be5f09e.js",
    "revision": "4f126996eb8f56f2ea9f03b6bd72e40f"
  },
  {
    "url": "/_nuxt/layouts/default.3477b2eac2be7d0db91d.js",
    "revision": "0efa951bba3837e578cedd989c5487a6"
  },
  {
    "url": "/_nuxt/manifest.014c50a6c124a3885ce7.js",
    "revision": "058b564a871c87ddfd7ceaee421c03f8"
  },
  {
    "url": "/_nuxt/pages/comics/_id.dcd6bf708ce55a8174a1.js",
    "revision": "2d19d4405fef4170b31a8399c7c5d6ff"
  },
  {
    "url": "/_nuxt/pages/comics/add.40e7e8047a9779ac0a6a.js",
    "revision": "1994c9f779d30ece8732ca9bef48b9b6"
  },
  {
    "url": "/_nuxt/pages/comics/edit.20ca1295a24776a3f07d.js",
    "revision": "d33998a253ec18a5b28f1bf3b77e49b2"
  },
  {
    "url": "/_nuxt/pages/comics/index.d8669a4e243153aa9d30.js",
    "revision": "650ebc148470de77f5c7603096331b30"
  },
  {
    "url": "/_nuxt/pages/comics/random.a3864a637862c3c5b4ab.js",
    "revision": "a0d553914d31c036254d76b380b5e561"
  },
  {
    "url": "/_nuxt/pages/comics/upload.cd797cfa08749bc2306e.js",
    "revision": "3fa73ea1fff2e9b19a49932e9553e1b7"
  },
  {
    "url": "/_nuxt/pages/groups/_id.397213346efb54699cb9.js",
    "revision": "87cc7f086c6447af3dd0580614f0df64"
  },
  {
    "url": "/_nuxt/pages/groups/add.e82ea37779c7b2ce4ae6.js",
    "revision": "32fb440ede54b395d4730a6527047931"
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
    "url": "/_nuxt/pages/groups/index.a79e448a3cc947b46d6c.js",
    "revision": "0bfd4e9bcd409383d770ca1ca0ace178"
  },
  {
    "url": "/_nuxt/pages/index.162f27af0376bdc5328b.js",
    "revision": "e8d70366ac6b785efe033623c3f118a5"
  },
  {
    "url": "/_nuxt/pages/login/index.8e5b4fa12ca55e30b735.js",
    "revision": "bbbb8f65341e387dcc5d92c9b9662d54"
  },
  {
    "url": "/_nuxt/pages/reader/_id.5d9f52b8be6add2c360d.js",
    "revision": "4a9040d9597541863a20fb86a3cf4011"
  },
  {
    "url": "/_nuxt/pages/register/index.2cb43f1d27ad77e3fc3f.js",
    "revision": "d86e29837a3874dcf360892721996eaa"
  },
  {
    "url": "/_nuxt/pages/user/_id.883568208d277d9d2505.js",
    "revision": "036a0611fb7efc9be9881eddc3e02cd7"
  },
  {
    "url": "/_nuxt/pages/user/delete.f1df1e2cce41d61997b5.js",
    "revision": "49bc8981786d4eb54ba863243514ece6"
  },
  {
    "url": "/_nuxt/pages/user/edit.d779f4e98a53be8e15f8.js",
    "revision": "77f0a3c48253416f50be6b404eeecd7e"
  },
  {
    "url": "/_nuxt/pages/user/follows/import.b9ed1dcc30ac40878779.js",
    "revision": "a469c8eb2fe022aa05dc6d247103e33a"
  },
  {
    "url": "/_nuxt/pages/user/follows/index.f812a68a37664f2aa342.js",
    "revision": "70231205137cc08847396660cf59826f"
  },
  {
    "url": "/_nuxt/pages/user/index.f0ed15d53eaa49151298.js",
    "revision": "c93c95c418c30cf912a2c54b19c1b33c"
  },
  {
    "url": "/_nuxt/vendor.e3e44d3203be9d945c28.js",
    "revision": "e6fb0e2c918301198d8bb17293aede41"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

