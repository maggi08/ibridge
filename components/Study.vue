<template>
  <v-container class="py-16">
    <div
      class="
        d-flex
        flex-column-reverse flex-sm-row
        align-center
        justify-space-between
      "
    >
      <div
        class="
          col-12 col-sm-6 col-lg-5
          d-flex
          flex-column
          align-center align-sm-start
          text-center text-sm-left
        "
      >
        <h2>{{ $t('title') }}</h2>
        <p class="subtitle d-none d-sm-block dark-grey-color mt-6">
          {{ $t('subtitle') }}
        </p>
        <p class="subtitle d-block d-sm-none dark-grey-color mt-6">
          {{ $t('subtitle1') }}
        </p>
        <div class="mt-14 mt-sm-8 d-none d-sm-block">
          <button class="big-btn-orange" @click="openRequest">
            {{ $t('request') }}
          </button>
        </div>
        <div
          class="w-100 d-flex justify-center mt-14 mt-sm-8 d-block d-sm-none"
        >
          <Search />
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-7 d-flex justify-end mb-16 mb-sm-0">
        <picture class="image mx-auto mx-sm-0 ml-sm-auto">
          <source
            class="image mx-auto mx-sm-0 ml-sm-auto"
            srcset="~assets/img/study.webp"
            type="image/webp"
            width="360px"
            height="430px"
          />
          <img
            class="image mx-auto mx-sm-0 ml-sm-auto"
            src="~assets/img/study.jpg"
            width="360px"
            height="430px"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  </v-container>
</template>

<i18n>
{
  "en": {
    "request": "Send request",
    "title": "Ready to study abroad?",
    "subtitle": "We will help you to find answers to questions concerning education abroad, as well as we guiding through all the stages of admission.",
    "subtitle1": "Get more detailed instructions about educational institutions or countries of study below in the search engine."
  },
  "ru": {
    "request": "Оставить заявку",
    "title": "Готовы учиться за рубежом ?",
    "subtitle": "Мы поможем найти ответы на вопросы, касающиеся образования за границей, а так же проведем вас по всем этапам поступления.",
    "subtitle1": "Получите более подробную инструкцию об учебных заведениях или странах обучения ниже в поисковике."
  }
}
</i18n>

<script>
import Search from './Search.vue'
export default {
  methods: {
    openRequest() {
      this.$root.$emit('openRequest', { source: 'Главная' })
    },
  },
  components: { Search },
}
</script>

<style scoped lang="scss">
.image {
  width: 100%;
  max-width: 360px;
  height: 430px;
  @media (max-width: 958px) {
    max-width: 356px;
  }
}

@media (max-width: 600px) {
  .image {
    max-width: 226px;
    height: 270px;
  }
  .big-btn-orange {
    width: 100%;
  }
}
</style>
