<template>
  <div class="search-container">
    <v-autocomplete
      v-model="model"
      :items="partners"
      item-text="partner_name"
      item-value="pk"
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
      partners: [],
    }
  },
  watch: {
    search(value) {
      if (this.isLoading) return

      this.isLoading = true
      this.$axios
        .get(`${this.$i18n.locale}/partners?search=${value}`)
        .then((res) => {
          this.partners = [...res.data, ...this.partners]
        })
        .catch(() => {})
        .finally(() => (this.isLoading = false))
    },
  },
  methods: {
    submitSearch(val) {
      const id = this.partners.findIndex((el) => el.pk === val)
      if (id === -1) return
      const countrySlug = this.partners[id].country.country_slug
      const partnerSlug = this.partners[id].partner_slug
      this.$router.push(`/${countrySlug}/${partnerSlug}`)
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
