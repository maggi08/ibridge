<template>
  <div class="blue-bg relative">
    <v-container
      class="
        d-flex
        flex-column flex-column-reverse flex-md-row
        align-center
        pa-0
      "
    >
      <div class="image image-left mt-16 mt-md-0 pa-0">
        <picture>
          <!-- <source
              class="hero-img"
              srcset="~assets/img/ready-to-study-new.webp"
              type="image/webp"
              width="704px"
              height="354px"
            /> -->
          <img
            class="hero-img"
            src="~assets/img/ready-to-study-new.jpg"
            width="704px"
            height="354px"
          />
        </picture>
      </div>
      <div class="col-12 col-md-6 ml-auto pa-3 pb-0 pb-md-16 py-16 pl-md-16">
        <h2
          class="white-color text-center text-sm-left"
          style="max-width: 480px"
          v-html="$t('title')"
        ></h2>

        <p
          class="subtitle white-color text-center text-sm-left mt-3 mt-sm-4"
          v-html="$t('subtitle')"
        ></p>

        <Calculator />
      </div>
    </v-container>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Ready to study abroad?",
    "subtitle": "We will help you to find answers to questions<br/>concerning education abroad, as well as we <br/>guiding through all the stages of admission.",
    "calculate": "Send request"
  },
  "ru": {
    "title": "Готовы учиться за рубежом ?",
    "subtitle": "Мы поможем найти ответы на вопросы, касающиеся образования за границей, а так же проведем вас по всем этапам поступления.",
    "calculate": "Оставить заявку"
  }
}
</i18n>

<script>
export default {}
</script>

<style scoped lang="scss">
.blue-bg {
  position: relative;
}
.big-btn-black {
  width: 100%;
  background: $orange-color;
}
.image {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 50%;

  &-left {
    right: unset;
    left: 0;
  }
  img,
  source {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 960px) {
    position: static;
    width: 100%;
    height: 354px;
  }
}
</style>
