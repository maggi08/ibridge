<template>
  <div class="light-white-bg py-16">
    <v-container>
      <p class="label grey-color">{{ $t('subtitle') }}</p>
      <h2 class="mt-3 blue-color m-w-480">{{ $t('title') }}</h2>

      <div :options="swiperOption">
        <div v-for="(item, index) in partners" :key="index">
          <div class="partners d-flex justify-space-between row mt-14 mx-0">
            <div
              v-for="(itemj, indexj) in item"
              :key="indexj"
              class="partners-item mb-8"
            >
              <img :src="itemj.image" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="swiper-pagination my-pagination"></div> -->
    </v-container>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "We cooperate with 300 educational institutions",
    "subtitle": "Our partners"
  },
  "ru": {
    "title": "Сотрудничаем более 300 учебными заведениями",
    "subtitle": "Партнеры"
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
    partners: [
      [
        {
          image: require('../assets/img/partners/1.png'),
        },
        {
          image: require('../assets/img/partners/2.png'),
        },
        {
          image: require('../assets/img/partners/3.png'),
        },
        {
          image: require('../assets/img/partners/4.png'),
        },
        {
          image: require('../assets/img/partners/5.png'),
        },
        {
          image: require('../assets/img/partners/6.png'),
        },
        {
          image: require('../assets/img/partners/7.png'),
        },
        {
          image: require('../assets/img/partners/8.png'),
        },
        {
          image: require('../assets/img/partners/9.png'),
        },
        {
          image: require('../assets/img/partners/10.png'),
        },
        {
          image: require('../assets/img/partners/11.png'),
        },
        {
          image: require('../assets/img/partners/12.png'),
        },
      ],
      // [
      //   {
      //     image: require('../assets/img/partners/1.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/2.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/3.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/4.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/5.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/6.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/7.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/8.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/9.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/10.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/11.png'),
      //   },
      //   {
      //     image: require('../assets/img/partners/12.png'),
      //   },
      // ],
    ],
  }),
}
</script>

<style scoped lang="scss"></style>
