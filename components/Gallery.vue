<template>
  <div class="light-white-bg py-16">
    <v-container>
      <p class="label grey-color">{{ $t('subtitle') }}</p>
      <h2 class="mt-3 blue-color m-w-480">{{ $t('title') }}</h2>

      <div class="gallery mt-14">
        <div
          v-for="(item, index) in gallery"
          :key="index"
          class="gallery-image"
          @click="openModal(index)"
        >
          <img v-if="item" class="" :src="item" alt="" />
        </div>
      </div>

      <h2
        v-if="gallery && gallery.length < 1"
        class="blue-color m-w-480 text-center my-16 mx-auto"
      >
        {{ $t('nothing') }}
      </h2>
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
        <swiper class="gallery-swiper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in gallery" :key="index" class="r">
            <div class="img">
              <img :src="item" alt="" />
            </div>
          </swiper-slide>
        </swiper>

        <div class="swiper-button-prev gallery-prev"></div>
        <div class="swiper-button-next gallery-next"></div>
        <div
          class="swiper-pagination gallery-pagination photo-pagination"
        ></div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Photos of our students",
    "subtitle": "Photos",
    "nothing": "Nothing found"
  },
  "ru": {
    "title": "Фотографии наших студентов",
    "subtitle": "Фотогалерея",
    "nothing": "Ничего не найдено"
  }
}
</i18n>

<script>
import Swiper, { Pagination, Navigation, Autoplay } from 'swiper'
Swiper.use([Pagination, Navigation, Autoplay])
export default {
  data: () => ({
    gallery_modal: false,
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.photo-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },
    },
    gallery: [
      require('../assets/img/gallery/1.jpg'),
      require('../assets/img/gallery/2.jpg'),
      require('../assets/img/gallery/3.jpg'),
      require('../assets/img/gallery/4.jpg'),
      require('../assets/img/gallery/5.jpg'),
      require('../assets/img/gallery/1.jpg'),
      require('../assets/img/gallery/2.jpg'),
      require('../assets/img/gallery/3.jpg'),
      require('../assets/img/gallery/4.jpg'),
      require('../assets/img/gallery/5.jpg'),
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
.gallery {
  width: 100%;
  height: 480px;

  overflow-x: scroll;
  overflow-y: hidden;

  display: flex;
  grid-gap: 24px;
  // grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(8, 5vw);
  // grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  // grid-template-rows: repeat(2, 226px);
  // grid-auto-flow: dense;

  &-image {
    position: relative;
    object-fit: cover;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    height: 40px;
  }
  &::-webkit-scrollbar-thumb {
    border-bottom: 2px solid #d2840d;
  }
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

// .gallery-pagination {
//   bottom: -64px;
//   color: #fff;
// }
// .my-modal .gallery-pagination {
//   span {
//     color: #fff !important;
//   }
//   color: #fff !important;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
// }
</style>
