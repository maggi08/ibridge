<template>
  <div class="light-white-bg py-16">
    <v-container class="pb-3">
      <p class="text-center text-sm-left label grey-color text-uppercase">
        {{ $t('subtitle') }}
      </p>
      <h2
        class="text-center text-sm-left mt-3 black-color m-w-480"
        v-html="$t('title')"
      ></h2>
      <p class="subtitle2 mt-6" v-html="$t('subtitle2')"></p>

      <div class="mt-14 countries">
        <div
          v-for="(item, index) in countries"
          :key="index"
          class="country-item"
          :class="{ 'country-item-little': countries.length > 3 }"
          @click="goToCountry(item)"
        >
          <img class="mr-4" :src="item.country_logo" alt="" />
          {{ getByLanguage(item.country_translations).country_name }}
          <svg
            class="ml-auto"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 12L15.7071 11.2929L16.4142 12L15.7071 12.7071L15 12ZM9.70711 5.29289L15.7071 11.2929L14.2929 12.7071L8.29289 6.70711L9.70711 5.29289ZM15.7071 12.7071L9.70711 18.7071L8.29289 17.2929L14.2929 11.2929L15.7071 12.7071Z"
              fill="#7C7C7C"
            />
          </svg>
        </div>
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
    "title": "Страны обучения",
    "subtitle": "партнеры",
    "subtitle2":"Узнайте подробнее о странах, в которых хотели бы обучаться",
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
import lang from '@/mixins/lang'
export default {
  mixins: [lang],

  data: () => ({
    countries: [],
  }),
  mounted() {
    this.$axios
      .get(`${this.$i18n.locale}/countries/`)
      .then((res) => {
        this.countries = res.data
      })
      .catch(() => {})
  },
  methods: {
    goToCountry(item) {
      this.$router.push(`/${item.country_slug}`)
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
  max-width: 400px;
}

.countries {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
.country-item {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 352px;
  height: 72px;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.04);
  padding: 0 24px;
  cursor: pointer;
  &-little {
    max-width: 252px;
    @media (max-width: 580px) {
      max-width: unset;
    }
  }

  @media (max-width: 580px) {
    max-width: unset;
  }
}
</style>
