<template>
  <div class="light-white-bg py-16">
    <v-container>
      <p class="text-center text-sm-left label grey-color">
        {{ $t('subtitle') }}
      </p>
      <h2 class="text-center text-sm-left mt-3 blue-color m-w-480">
        {{ $t('title') }}
      </h2>
      <div class="mt-14">
        <swiper :options="swiperOption" class="mySwiper">
          <swiper-slide v-for="(item, index) in 10" :key="index">
            <div class="relative mt-10" @click="openModal(index)">
              <img
                src="../assets/img/acc/1.png"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </v-container>
    <GallerySwiper ref="swiper" />
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
export default {
  data: () => ({
    swiperOption: {
      effect: 'coverflow',
      grabCursor: 'true',
      centeredSlides: 'true',
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.accreditation-pagination',
        type: 'bullets',
        clickable: true,
      },
      // breakpoints: {
      //   576: {
      //     slidesPerView: 2,
      //     spaceBetween: 16,
      //   },
      //   900: {
      //     slidesPerView: 3,
      //     spaceBetween: 16,
      //   },
      //   1200: {
      //     slidesPerView: 4,
      //     spaceBetween: 16,
      //   },
      // },
    },
  }),
  methods: {
    openModal(index) {
      this.$refs.swiper.openModal(index)
    },
  },
}
</script>

<style scoped lang="scss">
.item {
  width: 420px;
  height: 320px;
  background: #ccc;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
