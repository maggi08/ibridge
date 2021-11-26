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
      ><img
        height="1"
        width="1"
        style="display: none"
        src="https://www.facebook.com/tr?id=362285389031053&ev=PageView&noscript=1"
    /></noscript>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-expressions
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  }
  if (!f._fbq) f._fbq = n
  n.push = n
  n.loaded = !0
  n.version = '2.0'
  n.queue = []
  t = b.createElement(e)
  t.async = !0
  t.src = v
  s = b.getElementsByTagName(e)[0]
  s.parentNode.insertBefore(t, s)
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
// eslint-disable-next-line no-undef
fbq('init', '362285389031053')
// eslint-disable-next-line no-undef
fbq('track', 'PageView')
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

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },
}
</script>

<style scoped lang="scss"></style>
