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
          @click="goToCountry"
        >
          <!-- <img class="mr-4" :src="item.img" alt="" /> -->
          <svg
            class="mr-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 5H21.9895V18.9984H2V5Z" fill="white" />
            <path
              d="M10.9952 13.3948V18.9984H12.9944V13.3948H21.9896V10.5963H12.9944V5H10.9952V10.5963H2V13.3948H10.9952Z"
              fill="#CF142B"
            />
            <path
              d="M13.6609 9.53124V5H20.1329L13.6609 9.53124ZM13.6609 14.4671V18.9984H20.1329L13.6609 14.4671ZM10.3285 14.4671V18.9984H3.85653L10.3285 14.4671ZM10.3285 9.53124V5H3.85653L10.3285 9.53124ZM2 6.30125V9.66601H6.8058L2 6.30125ZM21.9895 6.30125V9.66601H17.1837L21.9895 6.30125ZM21.9895 17.6972V14.3324H17.1837L21.9895 17.6972ZM2 17.6972V14.3324H6.8058L2 17.6972Z"
              fill="#00247D"
            />
            <path
              d="M21.9895 5H20.8793L14.2267 9.66601H15.3369L22 5H21.9895ZM9.76287 14.3321H8.6526L2 18.9981H3.11027L9.77333 14.3321H9.76287ZM7.5512 9.66965H8.6614L2 5V5.7826L7.5512 9.66965ZM16.4349 14.3303H15.3246L21.986 19V18.2174L16.4349 14.3303Z"
              fill="#CF142B"
            />
          </svg>

          Великобритания

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
export default {
  data: () => ({
    countries: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  }),
  methods: {
    goToCountry(id = 1) {
      console.log(123)
      this.$router.push(`/Country/${id}`)
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
  flex-wrap: wrap;
  gap: 32px;
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
  }
}
</style>
