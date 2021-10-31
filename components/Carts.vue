<template>
  <v-container class="carts pb-16">
    <div
      v-for="(item, index) in carts"
      :key="index"
      class="carts-item pointer pa-6 mb-10"
    >
      <div v-html="item.svg"></div>
      <h4 class="carts-item-title mt-4" v-html="$t(item.title)"></h4>
      <p class="mt-2 cart-text grey-color">
        {{ $t(item.subtitle) }}
      </p>
    </div>
  </v-container>
</template>

<i18n>
{
  "en": {
    "title1": "Language <br> programs",
    "subtitle1": "Foreign language courses",
    "title2": "Secondary <br> education",
    "subtitle2": "iGCSE, GCSE, Alevel",
    "title3": "Preparatory <br> programs",
    "subtitle3": "Foundation, IB",
    "title4": "Higher <br> education",
    "subtitle4": "Bachelor's, Master's, MBA"
  },
  "ru": {
    "title1": "Языковые <br> программы",
    "subtitle1": "Курсы иностранных языков",
    "title2": "Среднее <br> образование",
    "subtitle2": "iGCSE, GCSE, Alevel",
    "title3": "Подготовительные <br> программы",
    "subtitle3": "Foundation, IB",
    "title4": "Высшее <br> образование",
    "subtitle4": "Бакалавриат, Магистратура, MBA"
  }
}

</i18n>
<script>
export default {
  data: () => ({
    carts: [
      {
        svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.125 10H28.5V23.5V28L24.125 24.625H7.5V19" stroke="#D2840D" stroke-width="1.5"/>
              <path d="M24.5 4H3.5V17.5V22L7.875 18.625H24.5V4Z" stroke="#D2840D" stroke-width="1.5"/>
              <path d="M9 11H11" stroke="#D2840D" stroke-width="1.5"/>
              <path d="M13 11H15" stroke="#D2840D" stroke-width="1.5"/>
              <path d="M17 11H19" stroke="#D2840D" stroke-width="1.5"/>
              </svg>`,
        title: 'title1',
        subtitle: 'subtitle1',
      },
      {
        svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.1429 17.3333H28.5V28H23.1429M23.1429 17.3333L16 10.2222M23.1429 17.3333V28M16 10.2222V7.55556M16 10.2222L8.85714 17.3333M16 7.55556H21.3571V4H16V7.55556ZM8.85714 17.3333H3.5V28H8.85714M8.85714 17.3333V28M8.85714 28H13.3214M23.1429 28H18.6786M13.3214 28H16H18.6786M13.3214 28V20H18.6786V28" stroke="#D2840D" stroke-width="1.5"/>
              </svg>`,
        title: 'title2',
        subtitle: 'subtitle2',
      },
      {
        svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8.05748C18.118 6.74893 20.5771 6 23.2 6C24.8831 6 26.4987 6.30838 28 6.87511V24.8176C26.4987 24.2509 24.8831 23.9425 23.2 23.9425C20.5771 23.9425 18.118 24.6915 16 26M16 8.05748V26M16 8.05748C13.882 6.74893 11.4229 6 8.8 6C7.11695 6 5.50134 6.30838 4 6.87511V24.8176C5.50134 24.2509 7.11695 23.9425 8.8 23.9425C11.4229 23.9425 13.882 24.6915 16 26" stroke="#D2840D" stroke-width="1.5"/>
              </svg>`,
        title: 'title3',
        subtitle: 'subtitle3',
      },
      {
        svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 12.25L16.0939 6L4 12.25L8.03131 14.3333M28 12.25V22.5364M28 12.25L24.1566 14.3333M24.1566 14.3333L16.0939 18.5L8.03131 14.3333M24.1566 14.3333V21.625L16.0939 26L8.03131 21.625V14.3333" stroke="#D2840D" stroke-width="1.5"/>
              </svg>`,
        title: 'title4',
        subtitle: 'subtitle4',
      },
    ],
  }),
}
</script>

<style scoped lang="scss">
.carts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin-top: -56px;
  justify-content: center;

  &-item {
    margin: 0 auto;
    width: 256px;
    height: 185px;
    background: #ffffff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    z-index: 10;
    &-title {
      color: #171b2c;
    }
    &:hover {
      border-color: #d2840d;
    }
  }
  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    &-item {
      width: 100%;
    }
  }
}
</style>
