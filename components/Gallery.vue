<template>
  <div class="white-bg py-16">
    <v-container>
      <p class="text-center text-sm-left label grey-color text-uppercase">
        {{ $t('subtitle') }}
      </p>
      <h2 class="text-center text-sm-left mt-3 black-color m-w-480">
        {{ $t('title') }}
      </h2>

      <div class="gallery mt-14">
        <div
          v-for="(item, index) in gallery"
          :key="index"
          :data-aos="animations[index % animations.length]"
          data-aos-duration="1000"
          :data-aos-delay="100 * index"
          class="gallery-image one"
          @click="openModal(index)"
        >
          <picture>
            <source
              :srcset="item.webp"
              type="image/webp"
              width="352px"
              height="480px"
            />
            <img :src="item.jpg" width="352px" height="480px" loading="lazy" />
          </picture>
          <!-- <img v-if="item" class="" :src="item" alt="" /> -->
        </div>
      </div>
    </v-container>
    <GallerySwiper ref="swiperGallery" :images="gallery" type="gallery" />
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
    animations: ['fade-right', 'fade-down', 'fade-up', 'fade-left'],
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
      {
        jpg: require('@/assets/img/gallery/image0.jpg'),
        webp: require('@/assets/img/gallery/image0.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image1.jpg'),
        webp: require('@/assets/img/gallery/image1.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image3.jpg'),
        webp: require('@/assets/img/gallery/image3.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image4.jpg'),
        webp: require('@/assets/img/gallery/image4.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image5.jpg'),
        webp: require('@/assets/img/gallery/image5.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image6.jpg'),
        webp: require('@/assets/img/gallery/image6.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image7.jpg'),
        webp: require('@/assets/img/gallery/image7.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image8.jpg'),
        webp: require('@/assets/img/gallery/image8.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image9.jpg'),
        webp: require('@/assets/img/gallery/image9.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image10.jpg'),
        webp: require('@/assets/img/gallery/image10.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image11.jpg'),
        webp: require('@/assets/img/gallery/image11.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image12.jpg'),
        webp: require('@/assets/img/gallery/image12.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image13.jpg'),
        webp: require('@/assets/img/gallery/image13.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image14.jpg'),
        webp: require('@/assets/img/gallery/image14.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image15.jpg'),
        webp: require('@/assets/img/gallery/image15.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image16.jpg'),
        webp: require('@/assets/img/gallery/image16.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image17.jpg'),
        webp: require('@/assets/img/gallery/image17.webp'),
      },
      {
        jpg: require('@/assets/img/gallery/image19.jpg'),
        webp: require('@/assets/img/gallery/image19.webp'),
      },
    ],
  }),
  methods: {
    openModal(index) {
      this.$refs.swiperGallery.openModal(index)
    },
  },
}
</script>

<style scoped lang="scss">
.gallery {
  padding-bottom: 38px;

  width: 100%;
  // height: 480px;

  overflow-x: scroll;
  overflow-y: hidden;

  display: grid;
  grid-gap: 24px;
  grid-auto-flow: column;
  // grid-template-column: repeat(2, minmax(200px, auto));
  // grid-template-rows: repeat(2, minmax(228px, auto));
  &-image {
    width: 352px;
    // width: 100%;
    height: 100%;
    max-height: 480px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &::-webkit-scrollbar {
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    background: #ebebeb;
  }
  &::-webkit-scrollbar-thumb {
    border-bottom: 2px solid #d2840d;
  }
}
</style>
