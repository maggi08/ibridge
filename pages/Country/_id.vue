<template>
  <div class="">
    <Hero :country="country" />
    <Carts />
    <About :country="country" />
    <Services :country="country" :translation="translation" />
    <Universities
      id="universities"
      :partners="partners"
      :country-translation="translation"
    />
    <StudyNew />
    <Map notmain />

    <!-- <pre>{{ country }}</pre> -->
  </div>
</template>

<script>
import lang from '@/mixins/lang'
export default {
  mixins: [lang],
  async asyncData({ $axios, i18n, params }) {
    let country = null
    let partners = []
    await $axios
      .$get(`${i18n.locale}/countries/${params.id}/`)
      .then((res) => {
        country = res
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

    return { country, partners }
  },

  computed: {
    translation() {
      if (this.country?.country_translations)
        return this.getByLanguage(this.country.country_translations)
      return {}
    },
  },
  async created() {
    await this.$axios.$get(`${this.$i18n.locale}/countries/`).then((res) => {})
  },
}
</script>

<style scoped lang="scss"></style>
