<template>
  <div class="light-white-bg py-16">
    <v-container>
      <p class="text-center text-sm-left label grey-color">
        {{ $t('subtitle') }}
      </p>
      <h2 class="text-center text-sm-left mt-3 blue-color m-w-480">
        {{ $t('title') }}
      </h2>
      <div class="mt-14 mb-10">
        <swiper :options="swiperOption" class="mySwiper">
          <swiper-slide v-for="(item, index) in 10" :key="index">
            <div class="box" @click="openModal(index)">
              <img src="../assets/img/acc/1.png" alt="" />
              <div class="hover"></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </v-container>
    <GallerySwiper ref="swiper" :images="images" />
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
    images: [require('../assets/img/acc/1.png')],
    swiperOption: {
      effect: 'coverflow',
      grabCursor: 'true',
      centeredSlides: 'true',
      slidesPerView: 'auto',
      coverflowEffect: {
        slideShadows: false,
        rotate: 0,
        depth: 200,
        stretch: 0,
        modifier: 2,
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
  width: 400px;
  height: 320px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
.box {
  position: relative;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  border: 4px solid #202124;
  z-index: 1;
  .hover {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16));
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.swiper-wrapper {
  padding-bottom: 10px !important;
}
.swiper-slide-active {
  .box {
    .hover {
      display: none;
    }
  }
}
</style>
