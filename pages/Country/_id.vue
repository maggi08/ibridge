<template>
  <div class="">
    <Hero :country="country" />
    <Carts id="programs" />
    <About :country="country" />
    <StudyNew />
    <Map notmain />

    <!-- <pre>{{ country }}</pre> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, i18n, params }) {
    let country = null
    await $axios
      .$get(`${i18n.locale}/countries/${params.id}/`)
      .then((res) => {
        country = res
      })
      .catch((err) => {
        console.log(err)
      })

    return { country }
  },

  async created() {
    await this.$axios.$get(`${this.$i18n.locale}/countries/`).then((res) => {})
  },
}
</script>

<style scoped lang="scss"></style>
