<template>
  <div class="">
    <v-card v-if="events" class="pa-10 pt-12 my-modal d-flex align-center">
      <div class="pa-4 pa-sm-0">
        <h5 class="text-center">
          {{ $t('modal_title') }}
        </h5>
        <v-form ref="form" class="mt-8" @submit.prevent="submitForm">
          <p class="label dark-grey-color">{{ $t('label1') }}*</p>
          <v-text-field
            v-model="form.first_name"
            class="my-input mt-1"
            outlined
            :placeholder="$t('placeholder1')"
            :rules="[(v) => !!v || $t('required')]"
          >
          </v-text-field>

          <p class="label dark-grey-color">{{ $t('label2') }}*</p>
          <v-text-field
            v-model="form.phone_number"
            v-mask="'+7 ### ### ## ##'"
            class="my-input mt-1"
            outlined
            placeholder="+7 xxx xxx xx xx"
            :rules="[(v) => !!v || $t('required')]"
          >
          </v-text-field>

          <p class="label text-center mt-2">
            <span class="label grey-color">
              {{ $t('policy') }}
            </span>

            <span class="label orange-color pointer" @click="openPolicy">
              {{ $t('span') }}
            </span>
          </p>

          <button
            type="submit"
            class="mt-10 w-100 big-btn-orange"
            :class="[!isButtonActive ? 'big-btn-orange-disabled' : '']"
          >
            {{ $t('btn') }}
          </button>
        </v-form>
      </div>
    </v-card>
    <v-dialog
      v-else
      v-model="request_modal"
      width="520"
      :fullscreen="$vuetify.breakpoint.xsOnly"
    >
      <v-card class="pa-10 pt-12 my-modal d-flex align-center">
        <div class="pa-4 pa-sm-0">
          <div class="close" @click="closeModal()">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6.5L6 18.5"
                stroke="#202124"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
              <path
                d="M6 6.5L18 18.5"
                stroke="#202124"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h5 class="text-center">
            {{ $t('modal_title') }}
          </h5>
          <v-form ref="form" class="mt-8" @submit.prevent="submitForm">
            <p class="label dark-grey-color">{{ $t('label1') }}*</p>
            <v-text-field
              v-model="form.first_name"
              class="my-input mt-1"
              outlined
              :placeholder="$t('placeholder1')"
              :rules="[(v) => !!v || $t('required')]"
            >
            </v-text-field>

            <p class="label dark-grey-color">{{ $t('label2') }}*</p>
            <v-text-field
              v-model="form.phone_number"
              v-mask="'+7 ### ### ## ##'"
              class="my-input mt-1"
              outlined
              placeholder="+7 xxx xxx xx xx"
              :rules="[(v) => !!v || $t('required')]"
            >
            </v-text-field>

            <p class="label text-center mt-2">
              <span class="label grey-color">
                {{ $t('policy') }}
              </span>

              <span class="label orange-color pointer" @click="openPolicy">
                {{ $t('span') }}
              </span>
            </p>

            <button
              type="submit"
              class="mt-10 w-100 big-btn-orange"
              :class="[!isButtonActive ? 'big-btn-orange-disabled' : '']"
            >
              {{ $t('btn') }}
            </button>
          </v-form>
        </div>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="success_modal"
      width="520"
      :fullscreen="$vuetify.breakpoint.xsOnly"
    >
      <v-card class="pa-10 pt-12 my-modal">
        <div class="close" @click="closeModal()">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6.5L6 18.5"
              stroke="#202124"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M6 6.5L18 18.5"
              stroke="#202124"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <svg
          class="mt-6 mx-auto w-100"
          width="80"
          height="81"
          viewBox="0 0 80 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.5" cx="40" cy="40.5" r="40" fill="#F2F2F2" />
          <path
            d="M35.1601 45.7703L28.8892 39.7635L26.667 41.7899L35.1601 49.8957L53.3337 32.5263L51.1114 30.5L35.1601 45.7703Z"
            fill="#27A847"
          />
        </svg>

        <p class="title mt-8" v-html="$t('successTitle')"></p>

        <p class="subtitle text-center mt-4">
          {{ $t('successSubTitle') }}
        </p>

        <button class="big-btn-orange mt-16 w-100" @click="closeModal()">
          {{ $t('successBtn') }}
        </button>
      </v-card>
    </v-dialog>
  </div>
</template>

<i18n>
  {
    "en": {
      "logo_text":"Study Abroad <br> Consultancy Service",
      "programs":"Programs",
      "services":"Services",
      "partners":"Our partners",
      "contacts":"Contacts",
      "gotoapplication":"Send request",
      "modal_title":"Please fill out the form and we will contact you shortly. ",
      "label1":"Name",
      "label2":"Phone",
      "btn":"Send request",
      "placeholder1":"Your name",
      "placeholder2":"Phone number",
      "policy":"By leaving data on the site, you agree with ",
      "span":"Privacy Policy",
      "required":"Required Field",
      "successBtn":"To home",
      "successTitle":"Thank you! <br/> Your application is accepted.",
      "successSubTitle":"We will contact you shortly."
    },
    "ru": {
      "logo_text":"Консалтинговое агентство <br> по образованию за рубежом",
      "programs":"Программы",
      "services":"Услуги",
      "partners":"Партнеры",
      "contacts":"Контакты",
      "gotoapplication":"Оставить заявку",
      "modal_title":"Заполните форму и мы с вами свяжемся:",
      "label1":"Имя",
      "label2":"Номер телефона",
      "btn":"Отправить",
      "placeholder1":"Ваше имя",
      "placeholder2":"Ваш номер телефона",
      "policy":"Оставляя данные на сайте, Вы соглашаетесь с ",
      "span":"Политикой конфиденциальности",
      "required":"Обязательное поле",
      "successBtn":"На главную",
      "successTitle":"Спасибо, Ваша заявка принята!",
      "successSubTitle":"Мы свяжемся с Вами в ближайшее время."
    }
  }
</i18n>

<script>
export default {
  props: {
    events: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    form: {},
    isButtonActive: true,
    success_modal: false,
    request_modal: false,
  }),
  mounted() {
    // this.$root.$on('openRequest', (form = {}) => {
    //   this.form.source = 'Ивенты'
    //   if (form.type) {
    //     this.form.comments = Object.values(form).join(', ')
    //   }
    //   this.openModal()
    // })
  },
  methods: {
    openPolicy() {
      this.$root.$emit('openPolicy')
    },
    resetDefault() {
      this.form = {}
    },
    closeModal() {
      this.request_modal = false
      this.success_modal = false
    },
    openModal() {
      this.request_modal = true
    },
    async submitForm() {
      this.form.source = 'Ивенты'
      if (!this.isButtonActive) return
      if (!this.$refs.form.validate()) return
      this.isButtonActive = false
      const headers = {
        'X-API-KEY': '99jp2o7os-qkoo$vv0e-ibridge',
      }
      this.form.last_name =
        this.form.first_name.split(' ')[1] || this.form.first_name
      this.form.first_name = this.form.first_name.split(' ')[0] || ' '

      let api = `${this.$i18n.locale}/app/form/`
      if (this.form.comments) api = `${this.$i18n.locale}/app/calculator/`
      await this.$axios
        .$post(api, this.form, { headers })
        .then(() => {
          this.request_modal = false
          this.success_modal = true
          this.form = {}
          this.$refs.form.reset()
        })
        .catch(() => {
          this.form = {}
        })
        .finally(() => {
          this.isButtonActive = true
        })
    },
  },
}
</script>

<style scoped lang="scss">
.my-modal {
  position: relative;

  .close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }

  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    color: #171b2c;
  }
}
</style>
