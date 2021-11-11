<template>
  <div class="hero d-flex align-center">
    <img
      class="hero-img"
      src="~/assets/img/hero1.jpg"
      width="1440px"
      height="700px"
      alt=""
    />
    <div class="hero-img-mask"></div>
    <v-container class="">
      <div
        class="
          hero-main
          d-flex
          flex-column
          align-center align-sm-start
          justify-center
          text-center text-sm-left
        "
      >
        <p class="label text-uppercase">
          <span class="orange-color">{{ $t('span') }}</span>
          <span class="white-color">{{ $t('label') }}</span>
        </p>
        <!-- <p class="label white-color bridge" v-html="$t('label')"></p> -->
        <h1 class="hero-main__title white-color mt-3" v-html="$t('title')"></h1>

        <p class="white-color mt-5" v-html="$t('subtitle')"></p>
        <button class="big-btn-orange mt-9" @click="openRequest">
          {{ $t('gotoapplication') }}
        </button>
      </div>
    </v-container>
  </div>
</template>

<i18n>
  {
    "en": {
      "span":"iBridge",
      "title":"Choose your study program with us in the best educational institutions in the world",
      "label":" - for brighter future",
      "subtitle":"We offer over than 300 educational institutions and programs <br/>  for applicants",
      "gotoapplication":"Send request"
    },
    "ru": {
      "span":"iBridge",
      "title":"Выбери свою программу обучения в лучшие учебные заведения мира вместе c нами",
      "label":" - мост к светлому будущему",
      "subtitle":"Предлагаем 370 учебных заведений для поступления <br/> абитуриентам и магистрантам.",
      "gotoapplication":"Оставить заявку"
    }
  }
</i18n>

<script>
export default {
  methods: {
    openRequest() {
      this.$root.$emit('openRequest')
    },
  },
}
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  height: 80vh;
  z-index: 10;
  &-main {
    width: 100%;
    max-width: 640px;
    transition: 0.3s;
  }
  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    &-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(
        94.74deg,
        rgba(23, 27, 44, 0.8) 4.91%,
        rgba(23, 27, 44, 0.48) 45.1%,
        rgba(23, 27, 44, 0.32) 71.16%,
        rgba(23, 27, 44, 0.16) 88.54%,
        rgba(23, 27, 44, 0) 108.09%
      );
    }
  }
}

@media (max-width: 600px) {
  .big-btn-orange {
    width: 100%;
  }
}
</style>
