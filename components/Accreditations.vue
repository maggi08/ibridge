<template>
  <div class="white-bg py-16">
    <v-container>
      <p class="text-center text-sm-left label grey-color text-uppercase">
        {{ $t('subtitle') }}
      </p>
      <h2 class="text-center text-sm-left mt-3 black-color m-w-480">
        {{ $t('title') }}
      </h2>
      <div class="mt-14 mb-10 relative w-90">
        <swiper :options="swiperOption" class="mySwiper">
          <swiper-slide v-for="(item, index) in images" :key="index">
            <div class="box" @click="openModal(index)">
              <picture>
                <source
                  :srcset="item.webp"
                  type="image/webp"
                  width="400px"
                  height="320px"
                />
                <img
                  :src="item.jpg"
                  width="400px"
                  height="320px"
                  loading="lazy"
                />
              </picture>
              <div class="hover"></div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </v-container>
    <GallerySwiper ref="swiper" :images="images" type="accreditation" />
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
    images: [
      {
        webp: require('@/assets/img/acc/1.webp'),
        jpg: require('@/assets/img/acc/1.jpg'),
      },
      {
        webp: require('@/assets/img/acc/2.webp'),
        jpg: require('@/assets/img/acc/2.jpg'),
      },
      {
        webp: require('@/assets/img/acc/3.webp'),
        jpg: require('@/assets/img/acc/3.jpg'),
      },
      {
        webp: require('@/assets/img/acc/4.webp'),
        jpg: require('@/assets/img/acc/4.jpg'),
      },
      {
        webp: require('@/assets/img/acc/5.webp'),
        jpg: require('@/assets/img/acc/5.jpg'),
      },
      {
        webp: require('@/assets/img/acc/6.webp'),
        jpg: require('@/assets/img/acc/6.jpg'),
      },
      {
        webp: require('@/assets/img/acc/7.webp'),
        jpg: require('@/assets/img/acc/7.jpg'),
      },
      {
        webp: require('@/assets/img/acc/8.webp'),
        jpg: require('@/assets/img/acc/8.jpg'),
      },
      {
        webp: require('@/assets/img/acc/9.webp'),
        jpg: require('@/assets/img/acc/9.jpg'),
      },
      {
        webp: require('@/assets/img/acc/9.webp'),
        jpg: require('@/assets/img/acc/9.jpg'),
      },
      {
        webp: require('@/assets/img/acc/10.webp'),
        jpg: require('@/assets/img/acc/10.jpg'),
      },
    ],
    swiperOption: {
      effect: 'coverflow',
      grabCursor: 'true',
      centeredSlides: 'true',
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        slideShadows: false,
        rotate: 0,
        depth: 100,
        stretch: 2,
        modifier: 2,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.accreditation-pagination',
        type: 'bullets',
        clickable: true,
      },
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

  @media (max-width: 600px) {
    width: 271px;
    height: 216px;
  }
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
  img,
  source {
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
.w-90 {
  width: 90%;
  margin: 0 auto;
}

.swiper-button-prev {
  left: -6%;
  &:after {
    width: 24px;
    height: 24px;
    content: ' ';
    background: url('@/assets/img/prev-black.svg') no-repeat center center;
  }
}
.swiper-button-next {
  right: -6%;
  &:after {
    width: 24px;
    height: 24px;
    content: ' ';
    background: url('@/assets/img/next-black.svg') no-repeat center center;
  }
}
</style>
