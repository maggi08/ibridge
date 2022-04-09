<template>
  <div v-if="country || partner" class="about light-white-bg py-16">
    <v-container
      class="d-flex flex-column-reverse flex-md-row pt-md-4 pb-md-11"
    >
      <div class="col-12 col-md-6 pa-0 pt-16 pt-md-0">
        <div class="titleee">
          {{ country ? $t('title1') : $t('title2') }}
        </div>
        <div
          class="text mt-6"
          style="text-align: justify"
          v-html="aboutText"
        ></div>

        <button v-if="partner" class="big-btn-orange mt-8" @click="openRequest">
          {{ $t('button') }}
        </button>
      </div>
      <div class="col-12 col-md-6 pa-0 d-flex flex-column">
        <div v-if="partner" class="media">
          <iframe
            height="100%"
            width="100%"
            :src="partner.about_video_url"
            title="partner video"
          ></iframe>
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

<i18n>
{
  "en": {
    "title1": "About country",
    "title2": "About university",
    "button": "Send request"
  },
  "ru": {
    "title1": "О стране",
    "title2": "Об университете",
    "button": "Оставить заявку"
  }
}
</i18n>

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
        const res = info.about_text.replace(/\r?\n/g, '<br/>')
        return res
      }
      if (this.partner?.partner_translations) {
        const info = this.getByLanguage(this.partner.partner_translations)
        const res = info.about_text.replace(/\r?\n/g, '<br>')
        return res
      }
      return ''
    },
  },
  methods: {
    openRequest() {
      let res = 'about'
      if (this.country?.country_translations) {
        const info = this.getByLanguage(this.country.country_translations)
        res = info.country_name
      }
      if (this.partner?.partner_translations) {
        const info = this.getByLanguage(this.partner.partner_translations)
        res = info.partner_name
      }
      this.$root.$emit('openRequest', { source: res })
    },
  },
}
</script>

<style scoped lang="scss">
.titleee {
  font-weight: normal;
  font-size: 30px;
  line-height: 120%;
  @media (max-width: 600px) {
    font-size: 22px;
  }
}

.text {
  max-width: 448px;
  font-size: 18px;
  line-height: 140%;

  @media (max-width: 600px) {
    font-size: 16px;
  }
}
.about {
  // margin-top: 80px;
  // margin-bottom: 106px;
}
.media {
  width: 100%;
  height: 100%;
  max-width: 544px;
  max-height: 336px;
  // overflow: auto;
  iframe {
    width: 100%;
    height: 100%;

    @media (max-width: 400px) {
      width: 320px;
    }
  }
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
