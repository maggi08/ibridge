<template>
  <div class="">
    <Hero :partner="partner" :country-bread="countryBread" />
    <Achivements v-if="counters" :counters="counters" />
    <About v-if="partner && translation" :partner="partner" />
    <What
      v-if="partner && translation"
      :partner="partner"
      :translation="translation"
    />
    <Universities :partners="partners" />
    <StudyNew />
    <PartnerCountries />
    <Gallery />
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

    let countryBread = null

    await $axios
      .$get(`${i18n.locale}/partners/${params.partner}/`)
      .then((res) => {
        partner = res
      })
      .catch(() => {})

    await $axios
      .$get(`${i18n.locale}/countries/${params.country}/`)
      .then((res) => {
        countryBread = res
      })
      .catch(() => {})

    await $axios
      .$get(`${i18n.locale}/partners/`)
      .then((res) => {
        partners = res
      })
      .catch(() => {})
    return { partner, partners, countryBread }
  },
  computed: {
    counters() {
      if (this.partner?.partner_translations) {
        return this.getByLanguage(this.partner.partner_translations).counters
      }
      return []
    },
    translation() {
      if (this.partner?.partner_translations) {
        return this.getByLanguage(this.partner.partner_translations)
      }
      return null
    },
  },
  async created() {
    await this.$axios.$get(`${this.$i18n.locale}/countries/`).then((res) => {})
  },
}
</script>

<style scoped lang="scss"></style>
