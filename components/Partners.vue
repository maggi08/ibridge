<template>
  <div class="light-white-bg py-16">
    <v-container>
      <p class="text-center text-sm-left label grey-color text-uppercase">
        {{ $t('subtitle') }}
      </p>
      <h2 class="text-center text-sm-left mt-10 black-color m-w-480">
        {{ $t('title') }}
      </h2>
      <div class="relative">
        <swiper :options="swiperOption">
          <swiper-slide
            v-for="(item, index) in partners"
            :key="index"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <div class="partners d-flex justify-space-between row mt-14 mx-0">
              <div
                v-for="(itemj, indexj) in item"
                :key="indexj"
                class="partners-item mb-8"
              >
                <img :src="itemj.logo_url" alt="" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination my-pagination"></div>
      </div>
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
export default {
  props: {
    partners: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data: () => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.my-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
    // partners: [
    //   [
    //     {
    //       image: require('../assets/img/partners/1.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/2.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/3.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/4.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/5.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/6.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/7.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/8.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/9.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/10.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/11.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/12.png'),
    //     },
    //   ],
    //   [
    //     {
    //       image: require('../assets/img/partners/1.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/2.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/3.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/4.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/5.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/6.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/7.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/8.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/9.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/10.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/11.png'),
    //     },
    //     {
    //       image: require('../assets/img/partners/12.png'),
    //     },
    //   ],
    // ],
  }),
  created() {
    console.log(this.partners)
  },
}
</script>

<style scoped lang="scss">
.swiper-pagination {
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
}

.partners {
  &-item {
    width: 100%;
    max-width: 168px;
    height: 76px;

    @media (max-width: 350px) {
      max-width: 120px;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      margin: auto;
    }
  }
}
</style>
