<template>
  <div class="orange-bg">
    <v-container class="d-md-flex align-center pa-0 pt-16 pb-0 pb-md-16">
      <div class="col-12 col-md-6 pa-0 px-3">
        <h2 class="white-color text-center text-sm-left">
          {{ $t('title') }}
        </h2>

        <p class="subtitle white-color text-center text-sm-left mt-3 mt-sm-4">
          {{ $t('subtitle') }}
        </p>

        <button class="big-btn-black mt-8">{{ $t('calculate') }}</button>
      </div>
      <div class="image mt-16 mt-md-0 pa-0">
        <img class="" src="../assets/img/map_bg.jpg" alt="" />
      </div>
    </v-container>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Have you already chosen your educational program?",
    "subtitle": "You can calculate the cost of your education according to your chosen program.",
    "calculate": "Calculate the cost"
  },
  "ru": {
    "title": "А вы уже выбрали учебное заведение?",
    "subtitle": "Вы можете посчитать стоимость обучения по выбранной вами программе. ",
    "calculate": "Посчитать стоимость"
  }
}
</i18n>

<script>
export default {
  data: () => ({}),
}
</script>

<style scoped lang="scss">
.orange-bg {
  transition: 0.3s;
  position: relative;
}
.image {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  max-width: 704px;
  // width: 100%;
  img {
    height: 100%;
    width: 100%;
    // height: 356px;
    // width: 100%;
    // height: 100%;
    object-fit: cover;
  }
}
@media (max-width: 600px) {
  .image {
    height: 354px;
  }
  .orange-bg {
    background: $blue;
  }
  .big-btn-black {
    width: 100%;
    background: $orange;
    &:hover,
    &-hover {
      background: #c1790c;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
    }
    &:active,
    &-active {
      background: #bb750b;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
    }
    &:disabled,
    &-disabled {
      background: #aeaeae;
    }
  }
}
</style>
