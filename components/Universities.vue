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
      <div class="w-100 d-flex justify-space-between align-start mt-6">
        <p class="subtitle2" v-html="$t('subtitle2')"></p>
        <div class="search-container">
          <v-autocomplete
            v-model="search"
            :items="partners"
            class="my-input"
            outlined
            hide-details
            append-icon=""
            prepend-inner-icon=""
            :placeholder="$t('placeholder')"
          >
            <template #prepend-inner class="d-flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6504 3C6.87291 3 3 6.78737 3 11.4593C3 16.1313 6.87291 19.9187 11.6504 19.9187C13.6939 19.9187 15.5718 19.2258 17.052 18.0671L19.8633 20.8092L19.9381 20.8722C20.1992 21.0611 20.5693 21.0396 20.8055 20.808C21.0653 20.5532 21.0648 20.1407 20.8043 19.8866L18.026 17.1768C19.4386 15.6712 20.3008 13.6637 20.3008 11.4593C20.3008 6.78737 16.4279 3 11.6504 3ZM11.6504 4.30254C15.692 4.30254 18.9684 7.50655 18.9684 11.4589C18.9684 15.4113 15.692 18.6153 11.6504 18.6153C7.60877 18.6153 4.33239 15.4113 4.33239 11.4589C4.33239 7.50655 7.60877 4.30254 11.6504 4.30254Z"
                  fill="#7C7C7C"
                />
              </svg>
            </template>
          </v-autocomplete>
        </div>
      </div>
    </v-container>
    <v-container class="mt-16">
      <div class="tabs d-flex justify-space-between">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          class="tab"
          :class="{ 'tab-active': tab === item.value }"
          @click="toggleTab(item)"
        >
          {{ $t(item.title) }}
        </div>
      </div>

      <div class="mt-10 partners">
        <div
          v-for="(item, index) in test"
          :key="index"
          class="partner-item d-flex flex-column"
        >
          <div class="partner-item-img">
            <img :src="partners[0].partner_image" alt="" />
          </div>
          <div class="pa-6">
            <p class="partner-item-title">
              {{ getInfo(partners[0]).partner_name }}
            </p>
            <p class="partner-item-location mt-6">
              {{ getInfo(partners[0]).location }}
            </p>
            <p class="partner-item-price mt-2">
              {{ getInfo(partners[0]).payment }}
            </p>
          </div>
          <div class="px-6 pb-6 mt-auto">
            <button
              class="w-100 big-btn-outline"
              @click="goToPartner(partners[0].pk)"
            >
              {{ $t('more') }}
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="pageSize - test.length < 0"
        class="mx-auto"
        style="max-width: 203px"
      >
        <button class="w-100 big-btn-orange mt-10" @click="showMore">
          {{ $t('show') }}
        </button>
      </div>
    </v-container>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Educational institutions",
    "subtitle": "Our partners",
    "subtitle2":"Check out information about educational institutions <br/> and average tuition fees",
    "placeholder":"Enter the name of the university",
    "tab1":"Schools",
    "tab2":"High schools",
    "tab3":"Language classes",
    "tab4":"Preparing for admission",
    "tab5":"Summer online programs",
    "show": "Load more",
    "more": "See more"
  },
  "ru": {
    "title": "Учебные заведения ",
    "subtitle": "партнеры",
    "subtitle2":"Ознакомьтесь с информацией об учебных <br /> заведениях и средней стоимостью обучения",
    "placeholder":"Введите название университета",
    "tab1":"Университеты",
    "tab2":"Средние школы",
    "tab3":"Языковые курсы",
    "tab4":"Подготовка к поступлению",
    "tab5":"Летние онлайн программы",
    "show": "Показать больше",
    "more":"Подробнее"
  }
}
</i18n>

<script>
import lang from '@/mixins/lang.js'
export default {
  mixins: [lang],
  props: {
    partners: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    test: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    search: '',
    pageSize: 3,
    tab: 1,
    tabs: [
      { title: 'tab1', value: 1 },
      { title: 'tab2', value: 2 },
      { title: 'tab3', value: 3 },
      { title: 'tab4', value: 4 },
      { title: 'tab5', value: 5 },
    ],
  }),
  created() {
    this.test = [...this.partners].splice(0, this.pageSize)
  },
  methods: {
    showMore() {
      this.pageSize += 3
      this.test = [...this.partners].splice(0, this.pageSize)
    },
    toggleTab(value) {
      this.tab = value
    },
    goToPartner(id) {
      this.$router.push(`/Partner/${id}`)
    },
    getInfo(item) {
      if (item.partner_translations)
        return this.getByLanguage(item.partner_translations)
      return {}
    },
  },
}
</script>

<style scoped lang="scss">
.subtitle2 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  color: #474747;
}
.search-container {
  max-width: 228px;
}

.tab {
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 120%;
  color: #202124;

  width: 100%;
  padding-bottom: 16px;
  border-bottom: 2px solid #f2f2f2;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  &:after {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: #d2840d;
    transition: 0.3s;
  }
  &-active,
  &:hover {
    color: #d2840d;
    // border-color: #d2840d;
    &:after {
      width: 70%;
    }
  }
}
.partners {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
}
.partner-item {
  width: 100%;
  max-width: 352px;
  min-height: 435px;
  background: #fff;
  filter: drop-shadow(0px 40px 80px rgba(0, 0, 0, 0.04));

  &-img {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-title {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 120%;
    color: #171b2c;
  }

  &-location {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #171b2c;
  }

  &-price {
    font-family: 'Inter';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #7c7c7c;
  }
}
</style>
