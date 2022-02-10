<template>
  <div
    class="relative"
    :class="{ 'light-white-bg': !country }"
    data-aos="fade"
    data-aos-duration="1000"
    data-aos-delay="200"
  >
    <v-container class="pt-10 pb-16">
      <p
        v-if="!country"
        class="label text-center text-sm-left grey-color text-uppercase"
      >
        {{ $t('label') }}
      </p>
      <h2
        class="mt-3 text-center text-sm-left black-color"
        v-html="country ? $t('country_title') : $t('title')"
      ></h2>

      <div v-if="country" class="mt-14 services services-country">
        <div
          v-for="(item, index) in advantages"
          :key="index"
          class="services-item mb-8"
        >
          <div class="icon" v-html="country_images[index]"></div>
          <div class="">
            <!-- <h5 class="mt-6" v-html="item"></h5> -->
            <p
              class="d-inline mt-2 cart-text dark-grey-color"
              style="max-width: 220px"
              v-html="item"
            ></p>
            <!--  <p
              class="d-sm-none mt-2 cart-text dark-grey-color"
              style="max-width: 220px"
              v-html="$t(item.sm_subtitle)"
            ></p> -->
          </div>
        </div>
      </div>
      <div v-else class="mt-14 services">
        <div
          v-for="(item, index) in services"
          :key="index"
          class="services-item mb-8"
        >
          <div class="icon" v-html="item.svg"></div>
          <div class="">
            <h5 class="mt-6" v-html="$t(item.title)"></h5>
            <p
              class="d-none d-sm-inline mt-2 cart-text dark-grey-color"
              style="max-width: 220px"
              v-html="$t(item.subtitle)"
            ></p>
            <p
              class="d-sm-none mt-2 cart-text dark-grey-color"
              style="max-width: 220px"
              v-html="$t(item.sm_subtitle)"
            ></p>
          </div>
        </div>
      </div>
    </v-container>

    <svg
      v-if="country"
      class="absolute"
      style="top: 0; right: 0"
      width="72"
      height="153"
      viewBox="0 0 72 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect
        opacity="0.5"
        width="72"
        height="152.49"
        fill="url(#pattern0)"
        fill-opacity="0.2"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="0.357778"
          height="0.168929"
        >
          <use
            xlink:href="#image0_2229_15103"
            transform="scale(0.00222222 0.00104925)"
          />
        </pattern>
        <image
          id="image0_2229_15103"
          width="161"
          height="161"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  </div>
</template>

<i18n>
{
  "en": {
    "label": "Services",
    "title": "We are here to assist you with every <br/> step of your study:",
    "title1": "Evaluation Service ",
    "subtitle1": "We provide our students <br/> test for their career guidance", 
    "sm_subtitle1": "We provide our students test for their career guidance",
    "title2": "Universities Admission Consulting",
    "subtitle2": "We help students identify academic <br/> programs and universities", 
    "sm_subtitle2": "We help students identify academic programs and universities",
    "title3": "Enrollment and registration",
    "subtitle3": "We provide assistance with collecting <br/> the documents for admission", 
    "sm_subtitle3": "We provide assistance with collecting the documents for admission",
    "title4": "Visa support",
    "subtitle4": "We provide a visa <br/> support to our students", 
    "sm_subtitle4": "We provide a visa support to our students",
    "title5": "Housing and Travel Assistance",
    "subtitle5": "We assist students with housing, <br/> accommodations and airport pick up", 
    "sm_subtitle5": "We assist students with housing, accommodations and airport pick up",
    "title6": "Supervising students",
    "subtitle6": "We accompany and supervise <br/> our students during their education period",
    "sm_subtitle6": "We accompany and supervise our students during their education period",
    "country_title": "Advantages"

  },
  "ru": {
    "label": "Услуги",
    "title": "Помогаем на всех этапах <br/> поступления",
    "title1": "Профориентационный тест",
    "subtitle1": "Проводим тест <br/> на профориентацию", 
    "sm_subtitle1": "Проводим тест на профориентацию",
    "title2": "Консультирование",
    "subtitle2": "Подберем академические <br/> программы и университеты", 
    "sm_subtitle2": "Подберем академические программы и университеты",
    "title3": "Зачисление и оформление",
    "subtitle3": "Соберем пакет <br/> документов для поступления", 
    "sm_subtitle3": "Соберем пакет документов для поступления",
    "title4": "Визовая поддержка",
    "subtitle4": "Осуществим визовую <br/> поддержку студенту", 
    "sm_subtitle4": "Осуществим визовую поддержку студенту",
    "title5": "Организация поездки",
    "subtitle5": "Организуем поездку <br/> в учебное заведение", 
    "sm_subtitle5": "Организуем поездку в учебное заведение",
    "title6": "Курирование студентов",
    "subtitle6": "Сопровождаем и курируем <br/> студента во время обучения",
    "sm_subtitle6": "Сопровождаем и курируем студента во время обучения",
    "country_title": "Преимущества"
  }
}

</i18n>

<script>
export default {
  props: {
    country: {
      type: Object,
      default: null,
    },
    translation: {
      type: Object,
      default: null,
    },
  },
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
        sm_subtitle: 'sm_subtitle1',
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
        sm_subtitle: 'sm_subtitle2',
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
        sm_subtitle: 'sm_subtitle3',
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
        sm_subtitle: 'sm_subtitle4',
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
        sm_subtitle: 'sm_subtitle5',
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
        sm_subtitle: 'sm_subtitle6',
      },
    ],
    country_images: [
      `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0L74.641 20V60L40 80L5.35898 60V20L40 0Z" fill="#D2840D"/>
<path d="M80 48C80 65.6731 65.6731 80 48 80C30.3269 80 16 65.6731 16 48C16 30.3269 30.3269 16 48 16C65.6731 16 80 30.3269 80 48Z" fill="#171B2C"/>
<path d="M51.5742 34.2891V59.0742C51.5742 60.3112 51.7695 61.1315 52.1602 61.5352C52.5508 61.9388 53.319 62.1536 54.4648 62.1797V63C52.668 62.9089 50.7734 62.8633 48.7812 62.8633C46.4505 62.8633 44.1589 62.9089 41.9062 63V62.1797C43.4297 62.1536 44.4583 61.8867 44.9922 61.3789C45.5391 60.8711 45.8125 59.862 45.8125 58.3516V40.6758C45.8125 39.9727 45.7474 39.4258 45.6172 39.0352C45.5 38.6315 45.2526 38.319 44.875 38.0977C44.5104 37.8633 44.0742 37.7135 43.5664 37.6484C43.0586 37.5833 42.3424 37.5508 41.418 37.5508V36.7109C45.4805 36.2292 48.8659 35.4219 51.5742 34.2891Z" fill="white"/>
</svg>

`,
      `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0L74.641 20V60L40 80L5.35898 60V20L40 0Z" fill="#D2840D"/>
<path d="M80 48C80 65.6731 65.6731 80 48 80C30.3269 80 16 65.6731 16 48C16 30.3269 30.3269 16 48 16C65.6731 16 80 30.3269 80 48Z" fill="#171B2C"/>
<path d="M47.5117 34.1133C50.0768 34.1133 52.1667 34.7188 53.7812 35.9297C55.3958 37.1276 56.2031 38.8138 56.2031 40.9883C56.2031 42.069 55.9818 43.1367 55.5391 44.1914C55.1094 45.2461 54.4388 46.3398 53.5273 47.4727C52.6159 48.6055 51.6979 49.6536 50.7734 50.6172C49.862 51.5677 48.6576 52.8047 47.1602 54.3281C45.6758 55.8516 44.3997 57.2122 43.332 58.4102H53.0977C54.6732 58.4102 55.5781 57.4922 55.8125 55.6562H56.7305C56.6523 56.2422 56.6133 56.9974 56.6133 57.9219C56.6133 59.5234 56.7044 61.2161 56.8867 63H45.8906C45.0312 63 44.0156 62.9935 42.8438 62.9805C41.6849 62.9674 40.9036 62.9609 40.5 62.9609C40.0443 62.9609 39.3477 62.974 38.4102 63V62.1992C39.6081 61.1445 40.7409 60.0573 41.8086 58.9375C42.8763 57.8047 43.931 56.5417 44.9727 55.1484C46.0273 53.7422 46.9258 52.3359 47.668 50.9297C48.4102 49.5104 49.0091 47.987 49.4648 46.3594C49.9336 44.7188 50.168 43.1107 50.168 41.5352C50.168 40.3372 50.0443 39.3021 49.7969 38.4297C49.5495 37.5573 49.2044 36.8867 48.7617 36.418C48.332 35.9362 47.8633 35.5911 47.3555 35.3828C46.8477 35.1615 46.2878 35.0508 45.6758 35.0508C44.9596 35.0508 44.2956 35.1875 43.6836 35.4609C43.0716 35.7214 42.6224 36.099 42.3359 36.5938C43.1432 36.8021 43.7747 37.1797 44.2305 37.7266C44.6862 38.2734 44.9141 38.9115 44.9141 39.6406C44.9141 40.526 44.6081 41.2357 43.9961 41.7695C43.3971 42.2904 42.668 42.5508 41.8086 42.5508C40.9232 42.5508 40.2201 42.2708 39.6992 41.7109C39.1784 41.138 38.918 40.4479 38.918 39.6406C38.918 38.4167 39.6016 37.2513 40.9688 36.1445C42.5833 34.7904 44.7643 34.1133 47.5117 34.1133Z" fill="white"/>
</svg>
`,
      `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0L74.641 20V60L40 80L5.35898 60V20L40 0Z" fill="#D2840D"/>
<path d="M80 48C80 65.6731 65.6731 80 48 80C30.3269 80 16 65.6731 16 48C16 30.3269 30.3269 16 48 16C65.6731 16 80 30.3269 80 48Z" fill="#171B2C"/>
<path d="M47.707 34.1133C50.2331 34.1133 52.2578 34.6341 53.7812 35.6758C55.3047 36.7174 56.0664 38.1432 56.0664 39.9531C56.0664 41.7891 55.2396 43.3776 53.5859 44.7188C51.9453 46.0599 49.8555 47.0169 47.3164 47.5898C49.2174 47.668 50.9232 48 52.4336 48.5859C53.957 49.1589 55.194 50.0182 56.1445 51.1641C57.1081 52.3099 57.5898 53.6641 57.5898 55.2266C57.5898 56.9323 57.0365 58.4297 55.9297 59.7188C54.8229 61.0078 53.3971 61.9714 51.6523 62.6094C49.9076 63.2474 48.0065 63.5664 45.9492 63.5664C43.6445 63.5664 41.7305 63.1302 40.207 62.2578C38.8789 61.4375 38.2148 60.4023 38.2148 59.1523C38.2148 58.332 38.4883 57.6615 39.0352 57.1406C39.582 56.6068 40.3307 56.3398 41.2812 56.3398C42.2057 56.3398 42.9609 56.6003 43.5469 57.1211C44.1458 57.6289 44.4453 58.306 44.4453 59.1523C44.4453 59.8685 44.224 60.474 43.7812 60.9688C43.3385 61.4635 42.7591 61.8021 42.043 61.9844C42.3034 62.1927 42.7135 62.375 43.2734 62.5312C43.8333 62.6875 44.4648 62.7656 45.168 62.7656C47.2253 62.7656 48.8138 62.056 49.9336 60.6367C51.0664 59.2174 51.6328 57.388 51.6328 55.1484C51.6328 53.1042 51.1771 51.444 50.2656 50.168C49.3542 48.8789 48.1172 48.1628 46.5547 48.0195C46.5156 48.0456 46.4375 48.0911 46.3203 48.1562C46.2161 48.2214 46.138 48.2669 46.0859 48.293C46.0469 48.319 45.9818 48.3581 45.8906 48.4102C45.7995 48.4622 45.7279 48.5013 45.6758 48.5273C45.6237 48.5534 45.5586 48.5859 45.4805 48.625C45.4023 48.651 45.3307 48.6706 45.2656 48.6836C45.2135 48.6966 45.1484 48.7096 45.0703 48.7227C45.0052 48.7357 44.9336 48.7422 44.8555 48.7422C44.6211 48.7422 44.4258 48.6901 44.2695 48.5859C44.1133 48.4688 44.0352 48.3125 44.0352 48.1172C44.0352 47.6484 44.4258 47.4141 45.207 47.4141C45.3372 47.4141 45.526 47.4336 45.7734 47.4727C46.0339 47.5117 46.1966 47.5312 46.2617 47.5312C48.7747 46.3464 50.0312 44.0938 50.0312 40.7734C50.0312 38.9245 49.6667 37.4987 48.9375 36.4961C48.2214 35.4805 47.2188 34.9727 45.9297 34.9727C45.2396 34.9727 44.5885 35.0898 43.9766 35.3242C43.3776 35.5586 42.9154 35.9036 42.5898 36.3594C43.3971 36.6068 44.0286 37.0039 44.4844 37.5508C44.9401 38.0846 45.168 38.7031 45.168 39.4062C45.168 40.2786 44.862 40.9818 44.25 41.5156C43.651 42.0365 42.9219 42.2969 42.0625 42.2969C41.1641 42.2969 40.4544 42.0169 39.9336 41.457C39.4258 40.8971 39.1719 40.2005 39.1719 39.3672C39.1719 38.0391 39.8555 36.8867 41.2227 35.9102C42.7721 34.7122 44.9336 34.1133 47.707 34.1133Z" fill="white"/>
</svg>

`,
      `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0L74.641 20V60L40 80L5.35898 60V20L40 0Z" fill="#D2840D"/>
<path d="M80 48C80 65.6731 65.6731 80 48 80C30.3269 80 16 65.6731 16 48C16 30.3269 30.3269 16 48 16C65.6731 16 80 30.3269 80 48Z" fill="#171B2C"/>
<path d="M52.9248 34.12L52.8448 35.4L38.1648 56L39.9648 52.92H57.8848V56.8H37.2848V55.96L52.9248 34.12ZM53.5648 34.12V58.76C53.5648 59.72 53.6315 60.44 53.7648 60.92C53.8982 61.4 54.1648 61.72 54.5648 61.88C54.9648 62.04 55.5515 62.1467 56.3248 62.2V63C55.7115 62.9467 54.8848 62.92 53.8448 62.92C52.8048 62.8933 51.6848 62.88 50.4848 62.88C49.4715 62.88 48.4582 62.8933 47.4448 62.92C46.4582 62.92 45.6315 62.9467 44.9648 63V62.2C45.9515 62.1467 46.6982 62.04 47.2048 61.88C47.7382 61.72 48.0848 61.4 48.2448 60.92C48.4315 60.44 48.5248 59.72 48.5248 58.76V41L52.9248 34.12H53.5648Z" fill="white"/>
</svg>
`,
    ],
  }),
  computed: {
    advantages() {
      if (!this.translation) return []
      // eslint-disable-next-line camelcase
      const { advantage_1, advantage_2, advantage_3, advantage_4 } =
        this.translation

      // eslint-disable-next-line camelcase
      return [advantage_1, advantage_2, advantage_3, advantage_4]
    },
  },
}
</script>

<style scoped lang="scss">
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 86px;
  &-country {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 48px;
  }
  &-item {
    width: 100%;
    max-width: 352px;
    @media (max-width: 1240px) {
      max-width: 232px;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    &-country {
      grid-template-columns: repeat(2, 1fr);
    }
    &-item {
      max-width: unset;
    }
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);

    &-item {
      display: flex;
      align-items: center;

      h5 {
        margin-top: 0 !important;
      }
      .icon {
        margin-right: 24px;
      }
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
