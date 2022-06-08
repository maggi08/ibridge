<template>
  <div class="">
    <Hero />
    <Carts id="programs" />
    <Services id="services" />
    <Achivements />
    <Study />
    <Partners v-if="partners" id="partners" :partners="partners" />
    <Accreditations />
    <Gallery />
    <Map />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, i18n }) {},
  data: () => ({
    partners: null,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
    this.getPartners()
  },
  methods: {
    getPartners() {
      function splitArrayIntoChunksOfLen(arr, len) {
        const chunks = []
        let i = 0
        const n = arr.length
        while (i < n) {
          chunks.push(arr.slice(i, (i += len)))
        }
        return chunks
      }
      this.$axios.$get(`${this.$i18n.locale}/app/logos/`).then((res) => {
        this.partners = splitArrayIntoChunksOfLen(res, 12)
      })
    },
  },
}
</script>

<style scoped lang="scss"></style>
