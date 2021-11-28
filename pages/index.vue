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
  </div>
</template>

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
