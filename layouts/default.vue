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
  methods: {},
}
</script>

<style lang="scss" scoped></style>
