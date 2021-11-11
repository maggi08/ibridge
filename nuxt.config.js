import colors from 'vuetify/es5/util/colors'
import shrinkRay from 'shrink-ray-current'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    templateTitle: '%name% - %title%',
    name: 'iBridge',
    title: 'Консалтинговое агенство по образованию зарубежом',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#603cba' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@400;500;700&display=swap',
        rel: 'stylesheet',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swiper.js', ssr: true },
    { src: '~/plugins/v-mask.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'nuxt-seo',
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
  ],

  axios: {
    baseUrl: 'https://ibridge.kz/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#D2840D',
          accent: colors.grey.darken3,
          secondary: '#171B2C',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    vueI18nLoader: true,
    // localeDetection: false,
    // vueI18n: {
    //   fallbackLocale: 'ru',
    //   silentTranslationWarn: true,
    //   silentFallbackWarn: true,
    // },
    // strategy: 'prefix',
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   alwaysRedirect: false,
    // },
  },

  optimizedImages: {
    optimizeImages: true,
  },

  render: {
    compressor: shrinkRay(),
  },

  seo: {
    baseUrl: 'https://ibridge.kz/',
    templateTitle: '%name% - %title%',
    name: 'iBridge',
    title: 'Консалтинговое агенство по образованию зарубежом',
    keywords: 'iBridge',
    description: 'iBridge - Консалтинговое агенство по образованию зарубежом',
    canonical: 'auto',
    isForcedTrailingSlash: false,
    lang: 'ru',
    language: 'Russian',
    url: 'https://ibridge.kz/',
    image: {
      width: '200',
      height: '200',
      url: '/favicon-16x16.png',
    },
    openGraph: {
      keywords: 'iBridge',
      description: 'iBridge - Консалтинговое агенство по образованию зарубежом',
      title: 'Консалтинговое агенство по образованию зарубежом',
      image: {
        url: '/favicon-16x16.png',
        width: '200',
        height: '200',
      },
      type: 'website',
      url: 'https://ibridge.kz/',
      article: {
        author: 'iBridge',
        publishedTime: '2021-01-01',
        image: '/favicon-16x16.png',
      },
    },
  },
}
