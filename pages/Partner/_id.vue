<template>
  <div class="">
    <Hero :partner="partner" />
    <Achivements :counters="counters" />
    <About :partner="partner" />
    <StudyNew />
    <Universities :partners="partners" />
    <Map notmain />

    <!-- <pre>{{ partner }}</pre> -->
  </div>
</template>

<script>
import lang from '@/mixins/lang'
export default {
  mixins: [lang],
  async asyncData({ $axios, i18n, params }) {
    let partner = null
    let partners = []

    await $axios
      .$get(`${i18n.locale}/partners/${params.id}/`)
      .then((res) => {
        partner = res
      })
      .catch((err) => {
        console.log(err)
      })

    await $axios
      .$get(`${i18n.locale}/partners/`)
      .then((res) => {
        partners = res
      })
      .catch((err) => {
        console.log(err)
      })
    return { partner, partners }
  },
  computed: {
    counters() {
      if (this.partner?.partner_translations) {
        return this.getByLanguage(this.partner.partner_translations).counters
      }
      return []
    },
  },
  async created() {
    await this.$axios.$get(`${this.$i18n.locale}/countries/`).then((res) => {})
  },
}
</script>

<style scoped lang="scss"></style>
