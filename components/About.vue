<template>
  <div class="about">
    <v-container class="d-flex flex-column flex-md-row">
      <div class="col-12 col-md-6">
        <div class="titleee">О стране</div>
        <div class="text mt-6" v-html="aboutText"></div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column">
        <div v-if="partner" class="media">
          <iframe :src="partner.about_video_url" title="partner video"></iframe>
        </div>
        <div v-else-if="country" class="media">
          <swiper :options="swiperOption" class="mySwiper">
            <swiper-slide
              v-for="(item, index) in country.about_images"
              :key="index"
            >
              <picture>
                <!-- <source
                  class="hero-img"
                  :srcset="item.webp"
                  type="image/webp"
                  width="1440px"
                  height="700px"
                /> -->
                <img
                  class="hero-img"
                  :src="item.about_image_url"
                  width="1440px"
                  height="700px"
                />
                <!-- <div class="hero-img-mask"></div> -->
              </picture>
            </swiper-slide>
          </swiper>
        </div>
        <div v-if="country" class="swiper-pagination mt-4"></div>
      </div>
    </v-container>
  </div>
</template>

<script>
import lang from '@/mixins/lang'
export default {
  mixins: [lang],
  props: {
    country: {
      type: Object,
      default: null,
    },
    partner: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    swiperOption: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
  }),
  computed: {
    aboutText() {
      if (this.country?.country_translations) {
        const info = this.getByLanguage(this.country.country_translations)
        return info.about_text
      }
      if (this.partner?.partner_translations) {
        const info = this.getByLanguage(this.partner.partner_translations)
        return info.about_text
      }
      return ''
    },
  },
}
</script>

<style scoped lang="scss">
.titleee {
  font-weight: normal;
  font-size: 30px;
  line-height: 120%;
}

.text {
  max-width: 448px;
  font-size: 18px;
  line-height: 140%;
}
.about {
  margin-top: 80px;
  margin-bottom: 106px;
}
.media {
  width: 100%;
  height: 100%;
  max-width: 544px;
  max-height: 336px;
}
.mySwiper {
  width: 100%;
  height: 100%;
}
img,
iframe {
  width: 100%;
  height: 100%;
  min-height: 336px;
  object-fit: cover;
}
.swiper-pagination {
  position: relative;
}
</style>
