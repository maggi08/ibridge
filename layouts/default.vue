<template>
  <v-app>
    <Header @openModal="openModal" />
    <v-main>
      <Nuxt @openModal="openModal" />
    </v-main>
    <Footer />
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KHP4ZK2"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe>
    </noscript>
  </v-app>
</template>

<script>
;(function (w, d, s, l, i) {
  w[l] = w[l] || []
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : ''
  j.async = true
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
  f.parentNode.insertBefore(j, f)
})(window, document, 'script', 'dataLayer', 'GTM-KHP4ZK2')
</script>

<script>
import aos from '~/mixins/aos'

export default {
  mixins: [aos],
  data: () => ({}),
  methods: {
    openModal() {
      console.log(123)
    },
  },
}
</script>

<style lang="scss" scoped></style>
