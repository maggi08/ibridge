<template>
  <div class="">
    <Hero />
    <Carts id="programs" />
    <Services id="services" />
    <Achivements />
    <Study />
    <!-- <Partners id="partners" :patners="partners" /> -->
    <Accreditations />
    <Gallery />
    <Map />
  </div>
</template>

<script>
export default {
  // async asyncData({ $axios, i18n }) {
  //   let partners = []
  //   function splitArrayIntoChunksOfLen(arr, len) {
  //     const chunks = []
  //     let i = 0
  //     const n = arr.length
  //     while (i < n) {
  //       chunks.push(arr.slice(i, (i += len)))
  //     }
  //     return chunks
  //   }
  //   try {
  //     await $axios.$get(`/${i18n.locale}/app/logos/`).then((res) => {
  //       partners = splitArrayIntoChunksOfLen(res, 2)
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }

  //   return { partners }
  // },
  data: () => ({}),
  async created() {
    await this.$axios
      .$get(`${this.$i18n.locale}/app/logos/`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

<style scoped lang="scss"></style>
