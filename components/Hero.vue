<template>
  <div class="hero d-flex align-center">
    <swiper :options="swiperOption" class="mySwiper hero-img">
      <swiper-slide v-for="(item, index) in images" :key="index">
        <picture>
          <source
            class="hero-img"
            :srcset="item.webp"
            type="image/webp"
            width="1440px"
            height="700px"
          />
          <img
            class="hero-img"
            :src="item.jpg"
            width="1440px"
            height="700px"
            loading="lazy"
          />
          <div class="hero-img-mask"></div>
        </picture>
      </swiper-slide>
    </swiper>

    <v-container class="">
      <div
        class="
          hero-main
          d-flex
          flex-column
          align-center align-sm-start
          justify-center
          text-center text-sm-left
        "
      >
        <div v-if="isCountry || isPartner" class="bread d-flex mb-16">
          <div class="bread-item mr-1" @click="$router.push('/')">
            {{ $t('home') }} >
          </div>
          <div
            v-if="countryBread && isPartner"
            class="bread-item"
            @click="$router.push(`/${countryBread.country_slug}`)"
          >
            {{ getByLanguage(countryBread.country_translations).country_name }}
            >
          </div>
          <div class="bread-item">
            {{
              isCountry ? countryInfo.country_name : partnerInfo.partner_name
            }}
          </div>
        </div>
        <p class="label text-uppercase">
          <span class="orange-color">{{ $t('span') }}</span>
          <span class="white-color">{{ $t('label') }}</span>
        </p>
        <!-- <p class="label white-color bridge" v-html="$t('label')"></p> -->
        <h1 class="hero-main__title white-color mt-2 mt-sm-3">
          {{ title }}
        </h1>
        <p
          class="white-color mt-6 mt-sm-5"
          style="max-width: 500px"
          v-html="subtitle"
        ></p>

        <button
          v-if="isCountry"
          v-scroll-to="'#universities'"
          class="big-btn-orange mt-10"
        >
          {{ buttonName }}
        </button>
        <!-- -if="isPartner" -->
        <button
          v-if="isPartner"
          class="big-btn-orange mt-10"
          @click="openRequest"
        >
          {{ $t('gotoapplication') }}
        </button>
        <div v-else-if="!isCountry" class="mt-10 w-100">
          <div class="btn-block">
            <button class="big-btn-orange" @click="openRequest">
              {{ $t('gotoapplication') }}
            </button>
          </div>
          <div class="search-block">
            <Search class="search-block" />
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<i18n>
  {
    "en": {
      "search":"Search",
      "noData":"Nothing found",
      "placeholder":"Enter name of country or university...",
      "home":"Home",
      "span":"iBridge",
      "title":"Choose your study program with us in the best educational institutions in the world",
      "label":" - for brighter future",
      "subtitle":"We offer over than 300 educational institutions and programs for applicants",
      "gotoapplication":"Send request",
      "studyPlaces":"See our partners"
    },
    "ru": {
      "search":"Поиск",
      "noData":"Ничего не найдено",
      "placeholder":"Введите название страны, университета...",
      "home":"Главная",
      "span":"iBridge",
      "title":"Выбери свою программу обучения в лучшие учебные заведения мира вместе c нами",
      "label":" - мост к светлому будущему",
      "subtitle":"Предлагаем 370 учебных заведений для поступления абитуриентам и магистрантам.",
      "gotoapplication":"Оставить заявку",
      "studyPlaces":"Учебные заведения"
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
    countryBread: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    swiperOption: {
      effect: 'fade',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1500,
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 8000,
      },
    },
  }),
  computed: {
    isCountry() {
      if (this.country?.pk) return true
      return false
    },
    isPartner() {
      if (this.partner?.pk) return true
      return false
    },
    partnerInfo() {
      let info = {}
      if (this.isPartner) {
        info = this.getByLanguage(this.partner.partner_translations)
      }
      return info
    },
    countryInfo() {
      let info = {}
      if (this.isCountry) {
        info = this.getByLanguage(this.country.country_translations)
      }
      return info
    },
    title() {
      if (this.isCountry && this.countryInfo.banner_title)
        return this.countryInfo.banner_title
      if (this.isPartner && this.partnerInfo.partner_name)
        return this.partnerInfo.partner_name
      return this.$t('title')
    },
    subtitle() {
      if (this.isCountry && this.countryInfo.banner_sub_title)
        return this.countryInfo.banner_sub_title
      if (this.isPartner) {
        let message = `<strong>Год основания: </strong> ${
          this.partnerInfo.foundation_year
        } <br/>
        <strong>Место расположения: </strong> ${this.partnerInfo.location} <br/>
        <strong>Плата за обучение + сборы: </strong> ${
          this.partnerInfo.payment
        } <br/>
        <strong>Программа обучения:</strong> ${this.arrToString(
          this.partnerInfo.programs
        )}`
        if (this.$i18n.locale === 'en')
          message = `<strong>Year of foundation: </strong> ${
            this.partnerInfo.foundation_year
          } <br/>
        <strong>Location: </strong> ${this.partnerInfo.location} <br/>
        <strong>Tuition fee + fees: </strong> ${this.partnerInfo.payment} <br/>
        <strong>Education programs: </strong> ${this.arrToString(
          this.partnerInfo.programs
        )}`
        return message
      }
      return this.$t('subtitle')
    },
    buttonName() {
      if (this.isCountry) return this.$t('studyPlaces')
      return this.$t('gotoapplication')
    },
    images() {
      const arr = [
        {
          webp: require('@/assets/img/main/photo1.webp'),
          jpg: require('@/assets/img/main/photo1.jpg'),
        },
        {
          webp: require('@/assets/img/main/photo2.webp'),
          jpg: require('@/assets/img/main/photo2.jpg'),
        },
        {
          webp: require('@/assets/img/main/photo3.webp'),
          jpg: require('@/assets/img/main/photo3.jpg'),
        },
      ]

      if (this.isCountry && this.country.banner_image) {
        return [{ webp: null, jpg: this.country.banner_image }]
      }
      if (this.isPartner && this.partner.partner_image) {
        return [{ webp: null, jpg: this.partner.partner_image }]
      }

      return arr
    },
  },
  methods: {
    arrToString(arr) {
      let res = ''
      arr.forEach(
        (el, index) =>
          (res += el.title + (arr.length - 1 === index ? '' : ', '))
      )
      return res
    },
    openRequest() {
      let res = 'Главная'
      if (this.isCountry && this.countryInfo?.country_name)
        res = this.countryInfo.country_name
      if (this.isPartner && this.partnerInfo?.partner_name)
        res = this.partnerInfo.partner_name
      this.$root.$emit('openRequest', { source: res })
    },
  },
}
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  height: 80vh;
  z-index: 10;

  @media (max-width: 600px) {
    height: 87vh;
  }
  &-main {
    width: 100%;
    max-width: 640px;
    transition: 0.3s;
  }
  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    &-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(
        94.74deg,
        rgba(23, 27, 44, 0.8) 4.91%,
        rgba(23, 27, 44, 0.48) 45.1%,
        rgba(23, 27, 44, 0.32) 71.16%,
        rgba(23, 27, 44, 0.16) 88.54%,
        rgba(23, 27, 44, 0) 108.09%
      );
    }
  }
}
.bread {
  &-item {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;
    color: #aeaeae;
    cursor: pointer;
    &:hover,
    &:last-child {
      color: #fff;
    }
  }
}

.search-container {
  width: 100%;
  max-width: 448px;
  height: 64px;
}
.search-block {
  display: block;
}
.btn-block {
  display: none;
}
@media (max-width: 600px) {
  .big-btn-orange {
    width: 100%;
  }
  .search-block {
    display: none;
  }
  .btn-block {
    display: block;
  }
}
</style>
