<template>
  <v-app>
    <Header @openModal="openModal" />
    <v-main>
      <Nuxt @openModal="openModal" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import aos from '~/mixins/aos'

export default {
  mixins: [aos],
  data: () => ({}),
  methods: {
    openModal() {
      console.log(123)
    },
  },
}
</script>

<style lang="scss" scoped></style>
