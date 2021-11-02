<template>
  <div class="light-white-bg py-16">
    <v-container>
      <p class="label grey-color">{{ $t('subtitle') }}</p>
      <h2 class="mt-3 blue-color m-w-480">{{ $t('title') }}</h2>

      <!-- <div class="swiper-pagination my-pagination"></div> -->
    </v-container>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Our accreditations",
    "subtitle": "Accreditation"
  },
  "ru": {
    "title": "Наши аккредитации",
    "subtitle": "Аккредитация"
  }
}
</i18n>

<script>
// import Swiper, { Pagination, Navigation, Autoplay } from 'swiper'
// Swiper.use([Pagination, Navigation, Autoplay])
export default {
  data: () => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    },
  }),
}
</script>

<style scoped lang="scss"></style>
