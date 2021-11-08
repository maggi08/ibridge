<template>
  <div
    class="light-white-bg"
    data-aos="fade"
    data-aos-duration="1000"
    data-aos-delay="200"
  >
    <v-container class="pt-10 pb-16">
      <p class="label grey-color text-uppercase">{{ $t('label') }}</p>
      <h2 class="mt-3 blue-color" v-html="$t('title')"></h2>

      <div class="mt-14 services">
        <div
          v-for="(item, index) in services"
          :key="index"
          class="services-item mb-8"
        >
          <div v-html="item.svg"></div>
          <h5 class="mt-6" v-html="$t(item.title)"></h5>
          <p
            class="mt-2 cart-text dark-grey-color"
            v-html="$t(item.subtitle)"
          ></p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<i18n>
{
  "en": {
    "label": "Services",
    "title": "We are here to assist you with every <br/> step of your study:",
    "title1": "Evaluation Service ",
    "subtitle1": "We provide our students <br/> test for their career guidance",
    "title2": "Universities Admission Consulting",
    "subtitle2": "We help students identify academic <br/> programs and universities",
    "title3": "Enrollment and registration",
    "subtitle3": "We provide assistance with collecting <br/> the documents for admission",
    "title4": "Visa support",
    "subtitle4": "We provide a visa <br/> support to our students",
    "title5": "Housing and Travel Assistance",
    "subtitle5": "We assist students with housing, <br/> accommodations and airport pick up.",
    "title6": "Supervising students",
    "subtitle6": "We accompany and supervise <br/> our students during their education period"
  },
  "ru": {
    "label": "Услуги",
    "title": "Помогаем на всех этапах <br/> поступления",
    "title1": "Профориентационный тест",
    "subtitle1": "Проводим тест <br/> на профориентацию",
    "title2": "Консультирование",
    "subtitle2": "Подберем академические <br/> программы и университеты",
    "title3": "Зачисление и оформление",
    "subtitle3": "Соберем пакет <br/> документов для поступления",
    "title4": "Визовая поддержка",
    "subtitle4": "Осуществим визовую <br/> поддержку студенту",
    "title5": "Организация поездки",
    "subtitle5": "Организуем поездку <br/> в учебное заведение",
    "title6": "Курирование студентов",
    "subtitle6": "Сопровождаем и курируем <br/> студента во время обучения"
  }
}

</i18n>

<script>
export default {
  data: () => ({
    services: [
      {
        svg: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0L74.641 20V60L40 80L5.35898 60V20L40 0Z" fill="#D2840D"/>
<circle cx="48" cy="48" r="32" fill="#171B2C"/>
<circle cx="48" cy="48" r="12" stroke="white" stroke-width="1.5"/>
<path d="M42.6668 48L46.6668 52L53.3335 44" stroke="white" stroke-width="1.5"/>
</svg>
`,
        title: 'title1',
        subtitle: 'subtitle1',
      },
      {
        svg: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0L74.641 20V60L40 80L5.35898 60V20L40 0Z" fill="#D2840D"/>
<circle cx="48" cy="48" r="32" fill="#171B2C"/>
<path d="M60 38H36V53V58L41 54.25H60V38Z" stroke="white" stroke-width="1.5"/>
<path d="M43 46.2857H45" stroke="white" stroke-width="1.5"/>
<path d="M47 46.2857H49" stroke="white" stroke-width="1.5"/>
<path d="M51 46.2857H53" stroke="white" stroke-width="1.5"/>
</svg>
`,
        title: 'title2',
        subtitle: 'subtitle2',
      },
      {
        svg: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0L74.641 20V60L40 80L5.35898 60V20L40 0Z" fill="#D2840D"/>
<circle cx="48" cy="48" r="32" fill="#171B2C"/>
<path d="M36 40L37.5 41.5L40 38.5" stroke="white" stroke-width="1.5"/>
<path d="M44 40H60" stroke="white" stroke-width="1.5"/>
<path d="M36 48L37.5 49.5L40 46.5" stroke="white" stroke-width="1.5"/>
<path d="M44 48H60" stroke="white" stroke-width="1.5"/>
<path d="M36 56L37.5 57.5L40 54.5" stroke="white" stroke-width="1.5"/>
<path d="M44 56H60" stroke="white" stroke-width="1.5"/>
</svg>
`,
        title: 'title3',
        subtitle: 'subtitle3',
      },
      {
        svg: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0L74.641 20V60L40 80L5.35898 60V20L40 0Z" fill="#D2840D"/>
<circle cx="48" cy="48" r="32" fill="#171B2C"/>
<path d="M53.1754 39.4286H56.5V60H39.5V39.4286M53.1754 39.4286L53.1 36L39.5 39.4286M53.1754 39.4286H39.5" stroke="white" stroke-width="1.5"/>
<circle cx="48.5" cy="48" r="2" stroke="white" stroke-width="1.5"/>
<path d="M45.5 54H51.5" stroke="white" stroke-width="1.5"/>
</svg>
`,
        title: 'title4',
        subtitle: 'subtitle4',
      },
      {
        svg: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0L74.641 20V60L40 80L5.35898 60V20L40 0Z" fill="#D2840D"/>
<circle cx="48" cy="48" r="32" fill="#171B2C"/>
<path d="M48 60C46.376 58.5638 44.8708 56.9893 43.5 55.293C41.4428 52.7455 39 48.9516 39 45.3364C38.9982 41.5605 41.1912 38.1557 44.5556 36.7107C47.9201 35.2656 51.7929 36.0653 54.3668 38.7364C56.0594 40.4835 57.0075 42.8601 57 45.3364C57 48.9516 54.5571 52.7455 52.4999 55.293C51.1291 56.9893 49.6239 58.5638 48 60ZM48 41.3372C46.6219 41.3372 45.3486 42.0994 44.6596 43.3368C43.9706 44.5741 43.9706 46.0986 44.6596 47.3359C45.3486 48.5733 46.6219 49.3355 48 49.3355C50.1302 49.3355 51.8571 47.545 51.8571 45.3364C51.8571 43.1277 50.1302 41.3372 48 41.3372Z" stroke="white" stroke-width="1.5"/>
</svg>
`,
        title: 'title5',
        subtitle: 'subtitle5',
      },
      {
        svg: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0L74.641 20V60L40 80L5.35898 60V20L40 0Z" fill="#D2840D"/>
<circle cx="48" cy="48" r="32" fill="#171B2C"/>
<path d="M47.9973 42.2431L43.7984 38L36 45.8811L48.0082 58L50.8498 55.1283M47.9973 42.2431L52.2016 38L60 45.8811L55.8992 50.0253M47.9973 42.2431L44.3033 45.8811L47.9973 49.519L51.6912 45.8811L55.8992 50.0253M50.8498 55.1283L48.4146 52.73M50.8498 55.1283L53.1488 52.8049M53.1488 52.8049L50.7543 50.4467M53.1488 52.8049L55.8992 50.0253" stroke="white" stroke-width="1.5"/>
</svg>
`,
        title: 'title6',
        subtitle: 'subtitle6',
      },
    ],
  }),
}
</script>

<style scoped lang="scss">
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 86px;
  &-item {
    width: 100%;
    max-width: 352px;
    @media (max-width: 1240px) {
      max-width: 232px;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);

    &-item {
      max-width: unset;
    }
  }
}

[data-aos='fade'] {
  opacity: 0;
}
[data-aos='fade'].aos-animate {
  opacity: 1;
}
</style>
