<template>
  <div class="">
    <Hero />
    <Carts id="programs" />
    <Services id="services" />
    <Achivements />
    <Study />
    <Partners id="partners" :partners="partners" />
    <Accreditations />
    <Gallery />
    <Map />
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KHP4ZK2"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
  </div>
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
export default {
  async asyncData({ $axios, i18n }) {
    let partners = []
    function splitArrayIntoChunksOfLen(arr, len) {
      const chunks = []
      let i = 0
      const n = arr.length
      while (i < n) {
        chunks.push(arr.slice(i, (i += len)))
      }
      return chunks
    }
    await $axios.$get(`${i18n.locale}/app/logos/`).then((res) => {
      partners = splitArrayIntoChunksOfLen(res, 12)
    })
    return { partners }
  },
}
</script>

<style scoped lang="scss"></style>
