<template>
  <div class="light-white-bg py-16">
    <v-container>
      <p class="text-center text-sm-left label grey-color text-uppercase">
        {{ $t('subtitle') }}
      </p>
      <h2
        class="text-center text-sm-left mt-3 black-color m-w-480"
        v-html="$t('title')"
      ></h2>
      <div class="relative">
        <swiper :options="swiperOption">
          <swiper-slide
            v-for="(item, index) in partners"
            :key="index"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <div class="partners mt-14 mx-0">
              <div
                v-for="(itemj, indexj) in item"
                :key="indexj"
                class="partners-item mb-8"
              >
                <!-- <img :src="itemj.logo_url" alt="" /> -->
                <picture>
                  <source class="" :srcset="itemj.logo_url" type="image/webp" />
                  <img class="" :src="itemj.logo_url" loading="lazy" />
                </picture>
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
    "title": "We cooperate with 300 <br/> educational institutions",
    "subtitle": "Our partners"
  },
  "ru": {
    "title": "Сотрудничаем более c 300 <br/> учебными заведениями",
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
      loop: true,
      speed: 600,
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: '.my-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
  }),
}
</script>

<style scoped lang="scss">
.swiper-pagination {
  position: static;
  margin: 0 auto;
  margin-top: 8px;
  left: 0;
  right: 0;
  bottom: -40px;
}
.light-white-bg {
  color: #fbfbfb;
}
.partners {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  &-item {
    width: 100%;
    max-width: 168px;
    height: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 450px) {
      max-width: 120px;
    }

    img,
    source {
      max-width: 100%;
      max-height: 100%;
      margin: auto;
    }
  }
}
@media (max-width: 950px) {
  .partners {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .partners {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
}
</style>
