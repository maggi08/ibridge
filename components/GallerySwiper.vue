<template>
  <div class="">
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
        <swiper
          class="gallery-swiper"
          :class="`gallery-swiper-${type}`"
          :options="gallerySwiper"
        >
          <swiper-slide v-for="(item, index) in images" :key="index" class="r">
            <div class="img d-flex align-center justify-center">
              <picture>
                <source :srcset="item.webp" type="image/webp" />
                <img :src="item.jpg" loading="lazy" />
              </picture>
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

<script>
export default {
  props: {
    images: {
      type: Array,
      default() {
        return []
      },
    },
    type: {
      type: String,
      required: true,
    },
  },
  data: () => ({
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
  }),
  methods: {
    openModal(index) {
      const swiper = document.querySelector(`.gallery-swiper-${this.type}`)
      if (swiper?.swiper) {
        swiper.swiper.slideTo(index)
      }
      this.gallery_modal = true
    },
  },
}
</script>

<style scoped lang="scss">
.my-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
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
    display: flex;
    align-items: center;

    .img {
      width: 100%;
      height: 640px;

      picture {
        max-width: 80%;
        max-height: 80%;
        margin: auto;
      }
      img,
      source {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .close {
    position: absolute;
    top: -28px;
    right: 10px;
    cursor: pointer;
  }
}
</style>
