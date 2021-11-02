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
export default {
  data: () => ({}),
  methods: {
    openModal() {
      console.log(123)
    },
  },
}
</script>

<style lang="scss" scoped></style>
