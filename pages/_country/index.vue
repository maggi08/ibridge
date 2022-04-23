<template>
  <div class="">
    <Hero :country="country" />
    <Carts />
    <About :country="country" />
    <Services :country="country" :translation="translation" />
    <!-- <Universities
      id="universities"
      :partners="partners"
      :country-translation="translation"
    /> -->
    <UniversitiesV2 id="universities" :country-translation="translation" />
    <StudyNew />
    <Map notmain />
  </div>
</template>

<script>
import lang from '@/mixins/lang'
export default {
  mixins: [lang],
  async asyncData({ $axios, i18n, params }) {
    let country = null
    // let partners = []
    await $axios
      .$get(`${i18n.locale}/countries/${params.country}/`)
      .then((res) => {
        country = res
      })
      .catch(() => {})

    // await $axios
    //   .$get(`${i18n.locale}/partners/`)
    //   .then((res) => {
    //     partners = res
    //   })
    //   .catch(() => {})

    return { country }
  },

  computed: {
    translation() {
      if (this.country?.country_translations)
        return this.getByLanguage(this.country.country_translations)
      return {}
    },
  },
}
</script>

<style scoped lang="scss"></style>
