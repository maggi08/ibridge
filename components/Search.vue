<template>
  <div class="search-container">
    <v-autocomplete
      v-model="model"
      :items="searchResults"
      item-text="name"
      item-value="id"
      :loading="isLoading"
      :search-input.sync="search"
      class="my-input search-input"
      outlined
      hide-details
      hide-no-data
      :no-data-text="$t('noData')"
      append-icon=""
      prepend-inner-icon=""
      :placeholder="$t('placeholder')"
      @change="submitSearch"
    >
      <template #append>
        <svg
          class="d-none d-sm-block pointer"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="submitSearch"
        >
          <rect width="64" height="64" fill="#D2840D" />
          <path
            d="M31 39C35.4183 39 39 35.4183 39 31C39 26.5817 35.4183 23 31 23C26.5817 23 23 26.5817 23 31C23 35.4183 26.5817 39 31 39Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M41 41.0004L36.65 36.6504"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </v-autocomplete>

    <button class="d-flex d-sm-none btn-orange align-center mt-2 w-100">
      <svg
        style="margin-right: 10px"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="submitSearch"
      >
        <path
          d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38782 10.2789 2 7.33333 2C4.38781 2 2 4.38782 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 13.9996L11.1 11.0996"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {{ $t('search') }}
    </button>
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
export default {
  data() {
    return {
      model: '',
      search: '',
      isLoading: false,
      searchResults: [],
    }
  },
  async mounted() {
    this.isLoading = true
    const partners = await this.fetchPartners()
    const countries = await this.fetchCountries()
    const formatedPartners = partners.map((e) => {
      let name = 'partner'
      if (
        e.partner_translations &&
        e.partner_translations[0] &&
        e.partner_translations[0].partner_name
      ) {
        name = e.partner_translations[0].location
          ? `${e.partner_translations[0].partner_name} - ${e.partner_translations[0].location}`
          : `${e.partner_translations[0].partner_name}`
      } else if (e.partner_name) {
        name = `${e.partner_name}`
      }
      return {
        id: `${e.country.pk}_${e.pk}`,
        type: 'partner',
        name,
        country_slug: e.country.country_slug,
        country_id: e.country.pk,
        partner_slug: e.partner_slug,
        partner_id: e.pk,
      }
    })
    const formatedCountries = countries.map((e) => {
      const name =
        e.country_translations &&
        e.country_translations[0] &&
        e.country_translations[0].country_name
          ? e.country_translations[0].country_name
          : 'country'

      return {
        id: `${e.pk}_${0}`,
        type: 'country',
        name,
        country_slug: e.country_slug,
        country_id: e.pk,
      }
    })
    this.searchResults = [...formatedCountries, ...formatedPartners]
    this.isLoading = false
  },
  methods: {
    fetchCountries() {
      return this.$axios
        .get(`${this.$i18n.locale}/countries`)
        .then(({ data }) => data)
    },
    fetchPartners() {
      return this.$axios
        .get(`${this.$i18n.locale}/partners`)
        .then(({ data }) => data)
    },
    submitSearch(val) {
      const result = this.searchResults.find((el) => el.id === val)
      if (!result) return
      if (result.type === 'country') {
        this.$router.push(`/${result.country_slug}`)
      } else {
        this.$router.push(`/${result.country_slug}/${result.partner_slug}`)
      }
    },
  },
}
</script>

<style>
.search-container {
  width: 100%;
  max-width: 448px;
}
</style>
