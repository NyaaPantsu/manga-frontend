module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'manga.sh',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/vue-cookies.js',
    { src: '~/plugins/vue-gallery.js', ssr: false },
    { src: '~/plugins/vue-loading.js', ssr: false },
    { src: '~/plugins/vue-stars.js', ssr: true },
    { src: '~/plugins/vue-timeago.js', ssr: false },
    { src: '~/plugins/flag-icons.js', ssr: false },
    { src: '~/plugins/infinite-loading.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/font-awesome',
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
    baseURL: 'https://api.manga.sh/api/v1/',
    credentials: false
  },
  /*
    ** Build configuration
    */
  build: {
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/vue-cookies.js',
      '~/plugins/vue-gallery.js',
      '~/plugins/vue-loading.js',
      '~/plugins/vue-stars.js',
      '~/plugins/vue-timeago.js',
      '~/plugins/flag-icons.js',
      '~/plugins/infinite-loading.js'
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
