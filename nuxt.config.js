module.exports = {
    /*
     ** Headers of the page
     */
  head: {
      title: 'manga.sh',
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Frontend for manga.sh, a Batoto replacement by the NyaaPantsu project.' }
      ],
      link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
      ]
  },
  ssr: false,
  plugins: [
    '~/plugins/vuetify.js',
    { src: '~/plugins/vue-gallery.js', ssr: false },
    { src: '~/plugins/vue-timeago.js', ssr: false },
    { src: '~/plugins/vue-cookie.js', ssr: false },
    { src: '~/plugins/flag-icons.js', ssr: false },
    { src: '~/plugins/infinite-loading.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
    ** Customize the progress bar color
    */
  loading: { color: '#3B8070' },
  /*
    ** Axios configuration
    */
  axios: {
    host: 'localhost',
    port: 8080,
    prefix: '/api/v1/',
    baseURL: 'http://api.manga.sh:8080/api/v1/',
    credentials: false
  },
  /*
    ** Build configuration
    */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
