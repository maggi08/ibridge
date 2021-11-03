<template>
  <div class="light-white-bg py-16">
    <v-container>
      <p class="text-center text-sm-left label grey-color">
        {{ $t('subtitle') }}
      </p>
      <h2 class="text-center text-sm-left mt-3 blue-color m-w-480">
        {{ $t('title') }}
      </h2>
      <div class="= relative mt-10" @click="openModal(0)">slide1</div>
    </v-container>

    <div v-show="gallery_modal" class="my-modal" @click="gallery_modal = false">
      <div class="gallery-modal" @click.stop>
        <svg
          class="close"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="gallery_modal = false"
        >
          <path
            d="M21 7L7 21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M7 7L21 21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
        <swiper class="gallery-swiper" :options="gallerySwiper">
          <swiper-slide v-for="(item, index) in gallery" :key="index" class="r">
            <div class="img">
              <img :src="item" alt="" />
            </div>
          </swiper-slide>
        </swiper>

        <div class="swiper-button-prev acc-prev"></div>
        <div class="swiper-button-next acc-next"></div>
        <div class="swiper-pagination gallery-pagination acc-pagination"></div>
      </div>
    </div>
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
      // slidesPerView: 5,
      // spaceBetween: 0,

      centeredSlides: true,
      slidesPerView: 'auto',
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
    gallery_modal: false,
    gallerySwiper: {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.acc-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.acc-next',
        prevEl: '.acc-prev',
      },
    },
    gallery: [
      require('@/assets/img/gallery/1.jpg'),
      require('@/assets/img/gallery/2.jpg'),
      require('@/assets/img/gallery/3.jpg'),
      require('@/assets/img/gallery/4.jpg'),
      require('@/assets/img/gallery/5.jpg'),
      require('@/assets/img/gallery/1.jpg'),
      require('@/assets/img/gallery/2.jpg'),
      require('@/assets/img/gallery/3.jpg'),
      require('@/assets/img/gallery/4.jpg'),
      require('@/assets/img/gallery/5.jpg'),
    ],
  }),
  methods: {
    openModal(index) {
      const swiper = document.querySelector('.gallery-swiper')
      if (swiper?.swiper) {
        swiper.swiper.slideTo(index)
      }
      this.gallery_modal = true
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

.my-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  .gallery-modal {
    position: relative;
    width: 100%;
    max-width: 728px;
    height: 480px;

    .img {
      width: 100%;
      height: 100%;
      max-width: 728px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 100%;
        max-height: 100%;
        margin: auto;
      }
    }
  }
  .close {
    position: absolute;
    top: -28px;
    right: -28px;
    cursor: pointer;
  }
}
</style>
