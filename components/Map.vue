<template>
  <div class="">
    <div class="blue-bg relative">
      <v-container class="d-md-flex align-center pa-0 pt-16 pb-0 pb-md-16">
        <div class="col-12 col-md-6 pa-0 px-3">
          <h2
            class="white-color text-center text-sm-left"
            v-html="$t('title')"
          ></h2>

          <p
            class="subtitle white-color text-center text-sm-left mt-3 mt-sm-4"
            v-html="$t('subtitle')"
          ></p>

          <Calculator />
        </div>
        <div class="image mt-16 mt-md-0 pa-0">
          <img class="" src="../assets/img/map_bg.jpg" alt="" />
        </div>
      </v-container>
    </div>
    <div id="contacts" class="map-container">
      <v-container class="py-0">
        <div class="address">
          <h3>
            {{ $t('contacts') }}
          </h3>
          <div class="d-flex align-center mt-6">
            <div class="svg mr-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 13L17.5303 12.4697L17 11.9393L16.4697 12.4697L17 13ZM11 7L11.5303 7.53033L12.0607 7L11.5303 6.46967L11 7ZM9 9L8.46967 8.46967L7.93934 9L8.46967 9.53033L9 9ZM15 15L14.4697 15.5303L15 16.0607L15.5303 15.5303L15 15ZM9.39485 14L8.86254 14.5283L9.39485 14ZM19.9463 15.9463L20.4766 15.416L19.9463 15.9463ZM20.4766 15.416L17.5303 12.4697L16.4697 13.5303L19.416 16.4766L20.4766 15.416ZM11.5303 6.46967L8.58507 3.52441L7.52441 4.58507L10.4697 7.53033L11.5303 6.46967ZM9.53033 9.53033L11.5303 7.53033L10.4697 6.46967L8.46967 8.46967L9.53033 9.53033ZM16.4697 12.4697L14.4697 14.4697L15.5303 15.5303L17.5303 13.5303L16.4697 12.4697ZM15.5303 14.4697L12.5303 11.4697L11.4697 12.5303L14.4697 15.5303L15.5303 14.4697ZM12.5303 11.4697L9.53033 8.46967L8.46967 9.53033L11.4697 12.5303L12.5303 11.4697ZM5.20427 10.6199C6.37133 11.9138 7.72483 13.3821 8.86254 14.5283L9.92716 13.4717C8.81518 12.3513 7.48081 10.9043 6.31812 9.61528L5.20427 10.6199ZM8.86254 14.5283C10.1851 15.8608 11.9109 17.4582 13.3827 18.7895L14.3889 17.677C12.9218 16.35 11.2204 14.7746 9.92716 13.4717L8.86254 14.5283ZM20.4766 18.584C21.3515 17.7092 21.3515 16.2908 20.4766 15.416L19.416 16.4766C19.705 16.7657 19.705 17.2343 19.416 17.5234L20.4766 18.584ZM19.416 17.5234C18.0327 18.9067 15.8267 18.9776 14.3889 17.677L13.3827 18.7895C15.4262 20.6379 18.5406 20.52 20.4766 18.584L19.416 17.5234ZM5.41493 3.52441C3.47924 5.4601 3.35898 8.57408 5.20427 10.6199L6.31812 9.61528C5.01936 8.17536 5.09196 5.9687 6.47559 4.58507L5.41493 3.52441ZM6.47559 4.58507C6.76521 4.29545 7.23479 4.29545 7.52441 4.58507L8.58507 3.52441C7.70966 2.649 6.29034 2.649 5.41493 3.52441L6.47559 4.58507Z"
                  fill="#D2840D"
                />
              </svg>
            </div>
            <div class="content">
              <p class="cart-text grey-color mb-2">{{ $t('phone') }}</p>
              <p class="subtitle">+7 (708) 888 27 22</p>
              <p class="subtitle">+7 (705) 888 82 96</p>
            </div>
          </div>
          <div class="d-flex align-center mt-6">
            <div class="svg mr-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 13L17.5303 12.4697L17 11.9393L16.4697 12.4697L17 13ZM11 7L11.5303 7.53033L12.0607 7L11.5303 6.46967L11 7ZM9 9L8.46967 8.46967L7.93934 9L8.46967 9.53033L9 9ZM15 15L14.4697 15.5303L15 16.0607L15.5303 15.5303L15 15ZM9.39485 14L8.86254 14.5283L9.39485 14ZM19.9463 15.9463L20.4766 15.416L19.9463 15.9463ZM20.4766 15.416L17.5303 12.4697L16.4697 13.5303L19.416 16.4766L20.4766 15.416ZM11.5303 6.46967L8.58507 3.52441L7.52441 4.58507L10.4697 7.53033L11.5303 6.46967ZM9.53033 9.53033L11.5303 7.53033L10.4697 6.46967L8.46967 8.46967L9.53033 9.53033ZM16.4697 12.4697L14.4697 14.4697L15.5303 15.5303L17.5303 13.5303L16.4697 12.4697ZM15.5303 14.4697L12.5303 11.4697L11.4697 12.5303L14.4697 15.5303L15.5303 14.4697ZM12.5303 11.4697L9.53033 8.46967L8.46967 9.53033L11.4697 12.5303L12.5303 11.4697ZM5.20427 10.6199C6.37133 11.9138 7.72483 13.3821 8.86254 14.5283L9.92716 13.4717C8.81518 12.3513 7.48081 10.9043 6.31812 9.61528L5.20427 10.6199ZM8.86254 14.5283C10.1851 15.8608 11.9109 17.4582 13.3827 18.7895L14.3889 17.677C12.9218 16.35 11.2204 14.7746 9.92716 13.4717L8.86254 14.5283ZM20.4766 18.584C21.3515 17.7092 21.3515 16.2908 20.4766 15.416L19.416 16.4766C19.705 16.7657 19.705 17.2343 19.416 17.5234L20.4766 18.584ZM19.416 17.5234C18.0327 18.9067 15.8267 18.9776 14.3889 17.677L13.3827 18.7895C15.4262 20.6379 18.5406 20.52 20.4766 18.584L19.416 17.5234ZM5.41493 3.52441C3.47924 5.4601 3.35898 8.57408 5.20427 10.6199L6.31812 9.61528C5.01936 8.17536 5.09196 5.9687 6.47559 4.58507L5.41493 3.52441ZM6.47559 4.58507C6.76521 4.29545 7.23479 4.29545 7.52441 4.58507L8.58507 3.52441C7.70966 2.649 6.29034 2.649 5.41493 3.52441L6.47559 4.58507Z"
                  fill="#D2840D"
                />
              </svg>
            </div>
            <div class="content">
              <p class="cart-text grey-color mb-2">{{ $t('address') }}</p>
              <p class="subtitle">{{ $t('address1') }}</p>
            </div>
          </div>
          <div class="d-flex align-center mt-6">
            <div class="svg mr-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 13L17.5303 12.4697L17 11.9393L16.4697 12.4697L17 13ZM11 7L11.5303 7.53033L12.0607 7L11.5303 6.46967L11 7ZM9 9L8.46967 8.46967L7.93934 9L8.46967 9.53033L9 9ZM15 15L14.4697 15.5303L15 16.0607L15.5303 15.5303L15 15ZM9.39485 14L8.86254 14.5283L9.39485 14ZM19.9463 15.9463L20.4766 15.416L19.9463 15.9463ZM20.4766 15.416L17.5303 12.4697L16.4697 13.5303L19.416 16.4766L20.4766 15.416ZM11.5303 6.46967L8.58507 3.52441L7.52441 4.58507L10.4697 7.53033L11.5303 6.46967ZM9.53033 9.53033L11.5303 7.53033L10.4697 6.46967L8.46967 8.46967L9.53033 9.53033ZM16.4697 12.4697L14.4697 14.4697L15.5303 15.5303L17.5303 13.5303L16.4697 12.4697ZM15.5303 14.4697L12.5303 11.4697L11.4697 12.5303L14.4697 15.5303L15.5303 14.4697ZM12.5303 11.4697L9.53033 8.46967L8.46967 9.53033L11.4697 12.5303L12.5303 11.4697ZM5.20427 10.6199C6.37133 11.9138 7.72483 13.3821 8.86254 14.5283L9.92716 13.4717C8.81518 12.3513 7.48081 10.9043 6.31812 9.61528L5.20427 10.6199ZM8.86254 14.5283C10.1851 15.8608 11.9109 17.4582 13.3827 18.7895L14.3889 17.677C12.9218 16.35 11.2204 14.7746 9.92716 13.4717L8.86254 14.5283ZM20.4766 18.584C21.3515 17.7092 21.3515 16.2908 20.4766 15.416L19.416 16.4766C19.705 16.7657 19.705 17.2343 19.416 17.5234L20.4766 18.584ZM19.416 17.5234C18.0327 18.9067 15.8267 18.9776 14.3889 17.677L13.3827 18.7895C15.4262 20.6379 18.5406 20.52 20.4766 18.584L19.416 17.5234ZM5.41493 3.52441C3.47924 5.4601 3.35898 8.57408 5.20427 10.6199L6.31812 9.61528C5.01936 8.17536 5.09196 5.9687 6.47559 4.58507L5.41493 3.52441ZM6.47559 4.58507C6.76521 4.29545 7.23479 4.29545 7.52441 4.58507L8.58507 3.52441C7.70966 2.649 6.29034 2.649 5.41493 3.52441L6.47559 4.58507Z"
                  fill="#D2840D"
                />
              </svg>
            </div>
            <div class="content">
              <p class="cart-text grey-color mb-2">{{ $t('worktime') }}</p>
              <p class="subtitle">{{ $t('worktime1') }}</p>
              <p class="subtitle">{{ $t('worktime2') }}</p>
            </div>
          </div>
        </div>
      </v-container>
      <div class="my-map">
        <div
          ref="mymap"
          id="map"
          style="width: 100%; height: 100%"
          class=""
        ></div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Have you already chosen <br/> your educational program?",
    "subtitle": "You can calculate the cost of your education <br/> according to your chosen program.",
    "calculate": "Calculate the cost",
    "contacts":"Contacts",
    "phone":"Phone",
    "address":"Address",
    "address1":"office 7F, floor 7, Esentai Apt., 77/2 Al-Farabi ave., Almaty",
    "worktime":"Working hours",
    "worktime1":"Mon-Fri: 10:00 - 19:00",
    "worktime2":"Sat: 10:00 - 15:00"
  },
  "ru": {
    "title": "А вы уже выбрали учебное <br/> заведение?",
    "subtitle": "Вы можете посчитать стоимость <br/> обучения по выбранной вами программе. ",
    "calculate": "Посчитать стоимость",
    "contacts":"Контакты",
    "phone":"Телефон",
    "address":"Адрес",
    "address1":"г. Алматы пр. Аль-Фараби 77/2, Esentai Apartments, офис 7F, эт. 7",
    "worktime":"Режим работы",
    "worktime1":"Пн-Пт: 10:00 - 19:00",
    "worktime2":"CБ: 10:00 - 15:00"
  }
}
</i18n>

<script>
import { loadYmap } from 'vue-yandex-maps'
const settings = {
  apiKey: 'b48b352f-3f63-4823-bc62-990cfb330913',
  lang: 'ru_RU',
  version: '2.1',
  coordorder: 'latlong',
}
export default {
  data: () => ({
    coords: [43.22044, 76.928717],
    myMap: null,
    myPlacemark: null,
    zoom: 16,
  }),
  watch: {
    '$i18n.locale'() {
      this.getPlacemark()
    },
  },
  async mounted() {
    await loadYmap({ ...settings, debug: true }).catch((e) => {
      console.log(e)
    })

    try {
      // eslint-disable-next-line no-undef
      this.myMap = new ymaps.Map(
        'map',
        {
          center: this.coords,
          zoom: this.zoom,
          controls: [],
        },
        {
          searchControlProvider: 'yandex#search',
        }
      )
      this.getPlacemark()
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    getPlacemark() {
      this.myPlacemark = this.createPlacemark(this.coords)
      this.myMap.geoObjects.add(this.myPlacemark)
    },
    createPlacemark(coords) {
      // eslint-disable-next-line no-undef
      return new ymaps.Placemark(
        coords,
        {
          // iconLayout: 'default#image',
          // iconImageHref: '/location.png',
          iconCaption:
            this.$i18n.locale === 'ru'
              ? 'г. Алматы пр. Аль-Фараби 77/2, Esentai Apartments, офис 7F, эт. 7'
              : 'office 7F, floor 7, Esentai Apt., 77/2 Al-Farabi ave., Almaty',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '/location.svg',
          hintContent:
            this.$i18n.locale === 'ru'
              ? 'г. Алматы пр. Аль-Фараби 77/2, Esentai Apartments, офис 7F, эт. 7'
              : 'office 7F, floor 7, Esentai Apt., 77/2 Al-Farabi ave., Almaty',
          draggable: false,
        }
      )
    },
  },
}
</script>

<style scoped lang="scss">
.orange-bg {
  transition: 0.3s;
  position: relative;
  background: $blue-color;
}
.big-btn-black {
  width: 100%;
  background: $orange-color;
}
.image {
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.map-container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 588px;
  .address {
    position: absolute;
    z-index: 10;

    max-width: 448px;
    margin: 80px 0 92px;
    padding: 40px;
    background: #ffffff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  }
  @media (max-width: 900px) {
    height: 700px;
  }
  @media (max-width: 600px) {
    background: none;
    height: unset;

    .address {
      position: static;
      max-width: unset;
      margin: 0;
    }

    img {
      object-fit: cover;
    }
  }
}
.my-map {
  width: 100%;
  height: 100%;
}
ymaps,
ymaps input,
ymaps canvas,
ymaps svg {
  width: 100%;
  height: 100%;
}
.ymaps-map {
  -ms-touch-action: auto !important;
  touch-action: auto !important;
}
@media (max-width: 600px) {
  .my-map {
    height: 400px;
  }
  .image {
    height: 354px;
  }
  .orange-bg {
    background: $blue-color;
  }
  .big-btn-black {
    width: 100%;
    background: $orange-color;
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
