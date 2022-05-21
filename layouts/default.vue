<template>
  <v-app>
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import aos from '~/mixins/aos'

export default {
  mixins: [aos],
  data: () => ({}),
  mounted() {
    this.$cookies.removeAll()
    const utmQuery = decodeURIComponent(window.location.search.substring(1))
    const utmVariables = utmQuery.split('&')
    let ParameterName

    const getUTMValue = (inputParameter) => {
      for (let i = 0; i < utmVariables.length; i++) {
        ParameterName = utmVariables[i].split('=')
        if (ParameterName[0] === inputParameter) {
          return ParameterName[1] === null ? null : ParameterName[1]
        }
      }
    }

    const valueExists = (value) => {
      return value !== null && value !== '' && value !== undefined
    }

    const utmParams = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
    ]
    utmParams.forEach((param) => {
      const pValue = getUTMValue(param)
      if (valueExists(pValue)) {
        this.$cookies.set(param, pValue, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        })
      }
    })
  },

  methods: {},
}
</script>

<style lang="scss" scoped></style>
