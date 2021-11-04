<template>
  <div class="">
    <button class="big-btn-black mt-8" @click="openModal">
      {{ $t('calculate') }}
    </button>

    <v-dialog v-model="showModal" width="640" persistent>
      <v-card class="my-modal">
        <div class="close" @click="closeModal"></div>

        <div class="header px-10 py-5">
          {{ $t('calculatorTitle') }}
          <div class="header-border" :style="{ width: 25 * step + '%' }"></div>
        </div>

        <div v-if="step == 1" class="pa-10 pb-0">
          <h5>{{ $t('whichProgram') }}</h5>

          <div class="carts d-flex row mx-0 justify-space-between mt-4">
            <div
              class="carts-item ma-auto mt-4"
              :class="{ 'carts-item-active': form.type == 'lang' }"
              @click="form.type = 'lang'"
            >
              <div class="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.5833 12H35V28.5V34L29.5833 29.875H9V23"
                    stroke="#D2840D"
                    stroke-width="1.5"
                  />
                  <path d="M12 14H14" stroke="#171B2C" stroke-width="1.5" />
                  <path d="M16 14H18" stroke="#171B2C" stroke-width="1.5" />
                  <path d="M20 14H22" stroke="#171B2C" stroke-width="1.5" />
                  <path
                    d="M30 4.99997H4V21.5V27L9.41667 22.875H30V4.99997Z"
                    stroke="#D2840D"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <p class="label fw-400 mt-4 mx-2">
                {{ $t('type1') }}
              </p>
            </div>
            <div
              class="carts-item ma-auto mt-4"
              :class="{ 'carts-item-active': form.type == 'avg' }"
              @click="form.type = 'avg'"
            >
              <div class="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0001 35H16.6519L16.6519 25H23.3483L23.3483 35H20.0001Z"
                    stroke="#171B2C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M28.9286 21.6666H35.625V35H28.9286M28.9286 21.6666L20 12.7778M28.9286 21.6666V35M20 12.7778V9.44445M20 12.7778L11.0714 21.6666M20 9.44445H26.6964V5H20V9.44445ZM11.0714 21.6666H4.375V35H11.0714M11.0714 21.6666V35M11.0714 35H16.6518H20H23.3482H28.9286"
                    stroke="#D2840D"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <p class="label fw-400 mt-4 mx-2">
                {{ $t('type2') }}
              </p>
            </div>
            <div
              class="carts-item ma-auto mt-4"
              :class="{ 'carts-item-active': form.type == 'prep' }"
              @click="form.type = 'prep'"
            >
              <div class="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10.0718C22.6476 8.43616 25.7214 7.5 29 7.5C31.1038 7.5 33.1233 7.88547 35 8.59389V31.022C33.1233 30.3136 31.1038 29.9282 29 29.9282C25.7214 29.9282 22.6476 30.8643 20 32.5M20 10.0718V32.5M20 10.0718C17.3524 8.43616 14.2786 7.5 11 7.5C8.89619 7.5 6.87667 7.88547 5 8.59389V31.022C6.87667 30.3136 8.89619 29.9282 11 29.9282C14.2786 29.9282 17.3524 30.8643 20 32.5"
                    stroke="#D2840D"
                    stroke-width="1.5"
                  />
                  <path d="M20 11V31" stroke="#171B2C" stroke-width="1.5" />
                </svg>
              </div>
              <p class="label fw-400 mt-4 mx-2">
                {{ $t('type3') }}
              </p>
            </div>
            <div
              class="carts-item ma-auto mt-4"
              :class="{ 'carts-item-active': form.type == 'high' }"
              @click="form.type = 'high'"
            >
              <div class="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M35 15V27.858" stroke="#171B2C" stroke-width="1.5" />
                  <path
                    d="M30.1957 17.9167L35 15.3125L20.1174 7.5L5 15.3125L10.0391 17.9167M30.1957 17.9167L20.1174 23.125L10.0391 17.9167M30.1957 17.9167V27.0312L20.1174 32.5L10.0391 27.0312V17.9167"
                    stroke="#D2840D"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <p class="label fw-400 mt-4 mx-2">
                {{ $t('type4') }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="step == 2" class="pa-10 pb-0">
          <h5>{{ $t('whichDegree') }}</h5>
          <v-radio-group v-model="form.degree" class="mt-6">
            <v-radio :label="$t('bachelor')" :value="'bachelor'"></v-radio>
            <v-radio :label="$t('master')" :value="'master'"></v-radio>
          </v-radio-group>

          <h5 class="mt-12">{{ $t('whichCountry') }}</h5>

          <v-select
            v-model="form.country"
            class="my-input mt-6"
            :items="$i18n.locale == 'ru' ? countriesRU : countriesEN"
            item-text="text"
            item-value="value"
            :placeholder="$t('countryPlaceholder')"
            solo
          >
          </v-select>
        </div>

        <div v-if="step == 3" class="pa-10 pb-0">
          <h5>{{ $t('whichUniversity') }}</h5>

          <v-select
            v-model="form.university"
            class="my-input mt-6"
            :items="universities"
            item-text="text"
            item-value="value"
            :placeholder="$t('universityPlaceholder')"
            solo
          >
          </v-select>

          <h5 class="mt-12">{{ $t('whereLive') }}</h5>

          <v-radio-group v-model="form.campus" class="mt-6">
            <v-radio :label="$t('onCampus')" :value="'onCampus'"></v-radio>
            <v-radio :label="$t('notCampus')" :value="'notCampus'"></v-radio>
          </v-radio-group>
        </div>

        <div v-if="step == 4" class="pa-10 pb-0">
          <div class="box mt-10 mx-auto">
            <p class="box-title" v-html="$t('costText')"></p>

            <div class="mt-4 w-100 text-right">
              <p class="box-cost">
                <span class="box-text mr-4">{{ $t('from') }}</span>
                49 000$
              </p>
            </div>
          </div>

          <p class="cart-text text-center mt-6 mx-auto">
            {{ $t('wantStudyAt') }}

            <span class="orange-color">
              {{ form.country ? form.country : 'Adelphi University' }}?
            </span>

            {{ $t('getConsultation') }}
          </p>
        </div>

        <div class="d-flex align-center justify-space-between mt-14 pa-10">
          <button
            v-if="step != 1 && step != 4"
            class="btn-orange-outline mr-auto"
            @click="prevStep"
          >
            {{ $t('prev') }}
          </button>
          <button v-if="step != 4" class="btn-orange ml-auto" @click="nextStep">
            {{ $t('next') }}
          </button>

          <button
            v-if="step == 4"
            class="btn-orange-outline mr-auto"
            @click="reTry"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <svg
              v-if="!hover"
              class="mr-1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_918:75890"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="2"
                width="19"
                height="17"
              >
                <path
                  class="orange"
                  d="M14.5833 8.33333H17.9167V2.5H1.25V18.3333H17.9167V10H14.5833V8.33333Z"
                  fill="white"
                  stroke="white"
                />
              </mask>
              <g mask="url(#mask0_918:75890)">
                <path
                  class="white"
                  d="M16.25 10.0002C16.25 13.6821 13.2652 16.6668 9.58329 16.6668C5.90139 16.6668 2.91663 13.6821 2.91663 10.0002C2.91663 6.31826 5.90139 3.3335 9.58329 3.3335C11.5744 3.3335 13.3617 4.20642 14.5833 5.59046"
                  stroke="#D2840D"
                  stroke-width="1.5"
                />
              </g>
              <path
                class="white"
                d="M11.7749 8.16382H16.7749V3.16382L11.7749 8.16382Z"
                fill="#D2840D"
              />
            </svg>
            <svg
              v-else
              class="mr-1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_964:9174"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="2"
                width="19"
                height="17"
              >
                <path
                  d="M14.5833 8.33333H17.9167V2.5H1.25V18.3333H17.9167V10H14.5833V8.33333Z"
                  fill="white"
                  stroke="white"
                />
              </mask>
              <g mask="url(#mask0_964:9174)">
                <path
                  d="M16.25 9.99967C16.25 13.6816 13.2652 16.6663 9.58329 16.6663C5.90139 16.6663 2.91663 13.6816 2.91663 9.99967C2.91663 6.31778 5.90139 3.33301 9.58329 3.33301C11.5744 3.33301 13.3617 4.20593 14.5833 5.58997"
                  stroke="white"
                  stroke-width="1.5"
                />
              </g>
              <path
                d="M11.7749 8.16406H16.7749V3.16406L11.7749 8.16406Z"
                fill="white"
              />
            </svg>

            {{ $t('retry') }}
          </button>

          <button
            v-if="step == 4"
            class="btn-orange ml-auto"
            @click="submitForm"
          >
            {{ $t('submitForm') }}
          </button>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<i18n>
{
  "en": {
    "next": "Next",
    "prev": "Back",
    "submitForm": "Send request",
    "retry": "Try again",
    "calculate": "Calculate the cost",
    "whichProgram": "What type of educational program you are interested in?",
    "calculatorTitle": "Tuition Fee Calculator",
    "type1": "Language programs",
    "type2": "Secondary education",
    "type3": "Preparatory programs",
    "type4": "Higher education",
    "whichDegree": "What type of academic program do you prefer? ",
    "bachelor": "Bachelor degree",
    "master": "Master's degree",
    "whichCountry": "Which country would you like to study in?",
    "countryPlaceholder": "Select Country",
    "whichUniversity": "What university would you like to study at?",
    "universityPlaceholder": "Select University",
    "whereLive": "Where would you like to live?",
    "onCampus": "On campus",
    "notCampus": "Not on campus",
    "costText": "Full <br/> tuition fees (per year):",
    "from": "from",
    "wantStudyAt": "Do you want to study at",
    "getConsultation": "Leave a request to get a consultation."
  },
  "ru": {
    "next": "Далее",
    "prev": "Назад",
    "submitForm": "Оставить заявку",
    "retry": "Пройти заново",
    "calculate": "Посчитать стоимость",
    "whichProgram": "Какая программа вас интресует?",
    "calculatorTitle": "Калькулятор стоимости обучения",
    "type1": "Языковые программы",
    "type2": "Среднее образование",
    "type3": "Подготовительные программы",
    "type4": "Высшее образование",
    "whichDegree": "Какой тип обучения вас интересует?",
    "bachelor": "Бакалавриат",
    "master": "Магистратура",
    "whichCountry": "В какой стране вы хотели бы учиться?",
    "countryPlaceholder": "Выберите страну",
    "whichUniversity": "В каком университете вы хотели бы учиться?",
    "universityPlaceholder": "Выберите университет",
    "whereLive": "Где вы хотели бы жить?",
    "onCampus": "В кампусе",
    "notCampus": "Не в кампусе",
    "costText": "Полная <br/> стоимость обучения (в год):",
    "from": "от",
    "wantStudyAt": "Хотите учиться в",
    "getConsultation": "Оставьте заявку, чтобы получить консультацию."
  }
}
</i18n>

<script>
export default {
  data: () => ({
    hover: false,
    showModal: true,
    step: 2,
    form: {
      type: null,
    },
    universities: [
      'Adelphi University',
      'American University',
      'University of Dayton',
    ],
    countriesRU: [
      {
        text: 'Великобритания',
        value: 'UK',
      },
      {
        text: 'США',
        value: 'US',
      },
      {
        text: 'Канада',
        value: 'CA',
      },
    ],
    countriesEN: [
      {
        text: 'United Kingdom',
        value: 'UK',
      },
      {
        text: 'USA',
        value: 'US',
      },
      {
        text: 'Canada',
        value: 'CA',
      },
    ],
  }),
  methods: {
    submitForm() {
      console.log(this.form)
      console.log(this.step)
    },
    reTry() {
      this.step = 1
      this.form = {
        type: null,
      }
    },
    openModal() {
      this.step = 1
      this.form = {
        type: null,
      }
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.step = 1
      this.form = {
        type: null,
      }
    },
    nextStep() {
      if (this.step === 4) return
      this.step++
    },
    prevStep() {
      if (this.step === 1) return
      this.step--
    },
  },
}
</script>

<style scoped lang="scss">
.my-modal {
  transition: 0.3s ease;
  .header {
    position: relative;
    background: #f8f8f8;
    &-border {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s ease-out;
      width: 25%;
      border-bottom: 2px solid#D2840D;
    }
  }

  .carts {
    &-item {
      width: 100%;
      max-width: 128px;
      height: 132px;
      background: #ffffff;
      border: 1px solid #f8f8f8;
      box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      transition: 0.3s ease-in;

      &:hover,
      &-active {
        border-color: #d2840d;
      }
    }
  }
}
.box {
  width: 100%;
  max-width: 288px;
  padding: 20px 16px;
  background: #ffffff;
  border: 1px solid #f8f8f8;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);

  &-title {
    font-family: 'Playfair Display';
    font-size: 14px;
    line-height: 120%;
    color: #171b2c;
  }
  &-text {
    font-family: 'Playfair Display';
    font-size: 16px;
    line-height: 100%;
    color: #7c7c7c;
  }
  &-cost {
    font-family: 'Playfair Display';
    font-weight: bold;
    font-size: 42px;
    line-height: 120%;
    color: #d2840d;
  }
}
.cart-text {
  max-width: 340px;
}
@media (max-width: 600px) {
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
