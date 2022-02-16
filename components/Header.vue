<template>
  <div
    class="header"
    :class="{ 'header-transparent': is_transparent && !isError }"
  >
    <v-container
      class="header-container d-flex align-center justify-space-between"
    >
      <div class="d-flex align-center">
        <div class="logo">
          <nuxt-link to="/">
            <svg
              v-if="is_transparent && !isError"
              width="111"
              height="32"
              viewBox="0 0 111 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.102 8.42972C14.8042 8.42808 13.56 7.90964 12.6423 6.98811C11.7246 6.06658 11.2083 4.81718 11.2067 3.51394V0H10.4979V3.51394C10.5094 4.16674 10.3914 4.81531 10.1506 5.42179C9.90981 6.02828 9.55113 6.58053 9.09548 7.04629C8.63984 7.51205 8.09634 7.88199 7.49676 8.13452C6.89719 8.38706 6.25354 8.51712 5.60336 8.51712C4.95318 8.51712 4.3095 8.38706 3.70992 8.13452C3.11034 7.88199 2.56684 7.51205 2.1112 7.04629C1.65555 6.58053 1.29687 6.02828 1.05609 5.42179C0.815308 4.81531 0.697286 4.16674 0.708846 3.51394H0V28.3679L10.7408 31.9627L10.8507 32L10.9606 31.9627L21.7015 28.3679V3.51394H20.9926C20.9914 4.8165 20.4759 6.06543 19.5591 6.98691C18.6423 7.9084 17.3991 8.42725 16.102 8.42972ZM17.4949 8.9628V10.1859H14.7091V8.9628C15.6229 9.19827 16.5811 9.19827 17.4949 8.9628ZM10.4963 17.7888V30.9137L4.20656 26.1766V14.6308L10.4963 17.7888ZM11.2051 17.7888L17.4949 14.6308V26.1766L11.2051 30.9137V17.7888ZM10.8507 17.1672L8.21967 15.843C8.50504 15.4021 8.89564 15.0397 9.35594 14.7888C9.81623 14.5379 10.3316 14.4065 10.8554 14.4065C11.3791 14.4065 11.8945 14.5379 12.3548 14.7888C12.8151 15.0397 13.2057 15.4021 13.491 15.843L10.8507 17.1672ZM7.61609 10.893L9.39281 13.9827C9.21054 14.0567 9.03413 14.1446 8.86507 14.2454L3.08295 10.9008L7.61609 10.893ZM11.2051 13.7138V10.9008H13.2682L11.6122 13.7791C11.4782 13.7518 11.3428 13.7316 11.2067 13.7185L11.2051 13.7138ZM10.4963 13.7138C10.3597 13.7258 10.2238 13.745 10.0893 13.7713L8.43017 10.9008H10.4932L10.4963 13.7138ZM12.3102 13.9827L14.0854 10.893H18.6216L12.8364 14.2454C12.6681 14.1465 12.4927 14.0603 12.3117 13.9874L12.3102 13.9827ZM14.0018 8.72501V10.1844H11.216V6.24615C11.8382 7.36545 12.8204 8.23944 14.0018 8.72501ZM10.5025 6.23837V10.1766H7.71667V8.72501C8.89637 8.23937 9.87697 7.36594 10.4979 6.2477L10.5025 6.23837ZM7.00322 8.95347V10.1766H4.21741V8.95347C5.13121 9.18893 6.08942 9.18893 7.00322 8.95347ZM3.50391 8.71724V10.1766H0.718103V6.23837C1.33776 7.35978 2.31838 8.23656 3.49927 8.72501L3.50391 8.71724ZM0.718103 10.893H1.67614L8.25991 14.7101C7.99983 14.9488 7.77429 15.2229 7.58979 15.5244L4.02085 13.7325C3.9674 13.7058 3.90809 13.693 3.84844 13.6955C3.78878 13.6979 3.73071 13.7155 3.67961 13.7465C3.62851 13.7775 3.58603 13.821 3.55613 13.8729C3.52623 13.9248 3.50987 13.9834 3.50856 14.0433V15.2245L0.722751 13.8257L0.718103 10.893ZM0.718103 14.623L3.50391 16.0218V26.3429C3.50391 26.3982 3.51679 26.4527 3.54151 26.5021C3.56623 26.5514 3.60215 26.5943 3.64632 26.6273L8.89912 30.5842L0.713456 27.8442L0.718103 14.623ZM21.005 27.8473L12.8194 30.5873L18.0722 26.6304C18.1164 26.5974 18.1522 26.5545 18.1769 26.5052C18.2017 26.4558 18.2145 26.4013 18.2145 26.346V16.0295L21.0004 14.6308L21.005 27.8473ZM21.005 13.8273L18.2192 15.226V14.0449C18.2179 13.9849 18.2015 13.9263 18.1716 13.8744C18.1417 13.8225 18.0992 13.7791 18.0481 13.748C17.997 13.717 17.939 13.6995 17.8793 13.697C17.8197 13.6946 17.7604 13.7073 17.7069 13.734L14.1473 15.526C13.9618 15.2252 13.7364 14.9512 13.4771 14.7116L20.0377 10.9008H20.9942L21.005 13.8273ZM21.005 10.1781H18.2192V8.72501C19.4021 8.23788 20.3846 7.36089 21.005 6.23837V10.1781Z"
                fill="white"
              />
              <path
                d="M28.0835 12.4183L30.015 11.5744V10.4787H28.0835V12.4183Z"
                fill="white"
              />
              <path
                d="M30.0166 12.4183H28.0835V21.521H30.0166V12.4183Z"
                fill="white"
              />
              <path
                d="M42.8285 15.778C43.6457 15.3521 44.3994 14.6419 44.3994 13.3177C44.4115 12.9725 44.3522 12.6285 44.2251 12.3074C44.0981 11.9864 43.906 11.6954 43.6611 11.4527C43.0328 10.8218 42.0423 10.4736 40.7856 10.4736H35.8562V21.5174H40.9465C43.3965 21.5174 45.0153 20.4606 45.0153 18.4884C45.0122 16.9607 44.1161 16.2193 42.8285 15.778ZM37.7537 12.2034H40.5395C41.7776 12.2034 42.471 12.7396 42.471 13.6021C42.471 14.6434 41.6383 15.133 40.3986 15.133H37.7583L37.7537 12.2034ZM40.9589 19.8063H37.7537V16.7788H40.8181C42.341 16.7788 43.0792 17.3306 43.0792 18.2615C43.0792 19.2795 42.279 19.8001 40.9635 19.8001L40.9589 19.8063Z"
                fill="white"
              />
              <path
                d="M59.2137 13.9961C59.2137 11.867 57.7063 10.4775 55.1294 10.4775H50.2279V21.5213H52.1609V17.6717H54.549L57.2822 21.5213H59.5603L56.5904 17.3407C58.1303 16.8993 59.2137 15.8098 59.2137 13.9961ZM52.1609 15.9528V12.2446H54.9731C56.4031 12.2446 57.2512 12.8927 57.2512 14.0754C57.2512 15.227 56.3706 15.9528 54.9885 15.9528H52.1609Z"
                fill="white"
              />
              <path
                d="M66.4956 10.4785H64.5626V21.5208H66.4956V10.4785Z"
                fill="white"
              />
              <path
                d="M76.4315 10.4775H72.3317V21.5213H76.4315C79.8875 21.5213 82.2755 19.1077 82.2755 15.9994C82.2755 12.86 79.8875 10.4775 76.4315 10.4775ZM76.4315 19.7543H74.2648V12.2446H76.4315C78.7406 12.2446 80.2481 13.8392 80.2481 15.9994C80.2481 18.1923 78.7406 19.7543 76.4315 19.7543Z"
                fill="white"
              />
              <path
                d="M92.5457 17.0403H95.3578V19.1073C94.5836 19.6613 93.6542 19.9541 92.7036 19.9435C90.4564 19.9435 88.9644 18.2712 88.9644 15.999C88.9644 13.8543 90.5028 12.0717 92.524 12.0717C93.9169 12.0717 94.7543 12.5286 95.6024 13.2544L96.8281 11.7873C95.6968 10.8252 94.519 10.2891 92.603 10.2891C89.2879 10.2891 86.9308 12.9078 86.9308 15.999C86.9308 19.2487 89.1935 21.7105 92.634 21.7105C94.3193 21.7095 95.9478 21.0987 97.2212 19.9901V15.3525H92.5395L92.5457 17.0403Z"
                fill="white"
              />
              <path
                d="M104.7 19.7848V16.8195H110.214V15.085H104.7V12.213H110.921V10.4785H102.768V21.5208H111V19.7848H104.7Z"
                fill="white"
              />
            </svg>
            <svg
              v-else
              width="111"
              height="32"
              viewBox="0 0 111 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.102 8.42972C14.8042 8.42808 13.56 7.90964 12.6423 6.98811C11.7246 6.06658 11.2083 4.81718 11.2067 3.51394V0H10.4979V3.51394C10.5094 4.16674 10.3914 4.81531 10.1506 5.42179C9.90981 6.02828 9.55113 6.58053 9.09548 7.04629C8.63984 7.51205 8.09634 7.88199 7.49676 8.13452C6.89719 8.38706 6.25354 8.51712 5.60336 8.51712C4.95318 8.51712 4.3095 8.38706 3.70992 8.13452C3.11034 7.88199 2.56684 7.51205 2.1112 7.04629C1.65555 6.58053 1.29687 6.02828 1.05609 5.42179C0.815308 4.81531 0.697286 4.16674 0.708846 3.51394H0V28.3679L10.7408 31.9627L10.8507 32L10.9606 31.9627L21.7015 28.3679V3.51394H20.9926C20.9914 4.8165 20.4759 6.06543 19.5591 6.98691C18.6423 7.9084 17.3991 8.42725 16.102 8.42972ZM17.4949 8.9628V10.1859H14.7091V8.9628C15.6229 9.19827 16.5811 9.19827 17.4949 8.9628ZM10.4963 17.7888V30.9137L4.20656 26.1766V14.6308L10.4963 17.7888ZM11.2051 17.7888L17.4949 14.6308V26.1766L11.2051 30.9137V17.7888ZM10.8507 17.1672L8.21967 15.843C8.50504 15.4021 8.89564 15.0397 9.35594 14.7888C9.81623 14.5379 10.3316 14.4065 10.8554 14.4065C11.3791 14.4065 11.8945 14.5379 12.3548 14.7888C12.8151 15.0397 13.2057 15.4021 13.491 15.843L10.8507 17.1672ZM7.61609 10.893L9.39281 13.9827C9.21054 14.0567 9.03413 14.1446 8.86507 14.2454L3.08295 10.9008L7.61609 10.893ZM11.2051 13.7138V10.9008H13.2682L11.6122 13.7791C11.4782 13.7518 11.3428 13.7316 11.2067 13.7185L11.2051 13.7138ZM10.4963 13.7138C10.3597 13.7258 10.2238 13.745 10.0893 13.7713L8.43017 10.9008H10.4932L10.4963 13.7138ZM12.3102 13.9827L14.0854 10.893H18.6216L12.8364 14.2454C12.6681 14.1465 12.4927 14.0603 12.3117 13.9874L12.3102 13.9827ZM14.0018 8.72501V10.1844H11.216V6.24615C11.8382 7.36545 12.8204 8.23944 14.0018 8.72501ZM10.5025 6.23837V10.1766H7.71667V8.72501C8.89637 8.23937 9.87697 7.36594 10.4979 6.2477L10.5025 6.23837ZM7.00322 8.95347V10.1766H4.21741V8.95347C5.13121 9.18893 6.08942 9.18893 7.00322 8.95347ZM3.50391 8.71724V10.1766H0.718103V6.23837C1.33776 7.35978 2.31838 8.23656 3.49927 8.72501L3.50391 8.71724ZM0.718103 10.893H1.67614L8.25991 14.7101C7.99983 14.9488 7.77429 15.2229 7.58979 15.5244L4.02085 13.7325C3.9674 13.7058 3.90809 13.693 3.84844 13.6955C3.78878 13.6979 3.73071 13.7155 3.67961 13.7465C3.62851 13.7775 3.58603 13.821 3.55613 13.8729C3.52623 13.9248 3.50987 13.9834 3.50856 14.0433V15.2245L0.722751 13.8257L0.718103 10.893ZM0.718103 14.623L3.50391 16.0218V26.3429C3.50391 26.3982 3.51679 26.4527 3.54151 26.5021C3.56623 26.5514 3.60215 26.5943 3.64632 26.6273L8.89912 30.5842L0.713456 27.8442L0.718103 14.623ZM21.005 27.8473L12.8194 30.5873L18.0722 26.6304C18.1164 26.5974 18.1522 26.5545 18.1769 26.5052C18.2017 26.4558 18.2145 26.4013 18.2145 26.346V16.0295L21.0004 14.6308L21.005 27.8473ZM21.005 13.8273L18.2192 15.226V14.0449C18.2179 13.9849 18.2015 13.9263 18.1716 13.8744C18.1417 13.8225 18.0992 13.7791 18.0481 13.748C17.997 13.717 17.939 13.6995 17.8793 13.697C17.8197 13.6946 17.7604 13.7073 17.7069 13.734L14.1473 15.526C13.9618 15.2252 13.7364 14.9512 13.4771 14.7116L20.0377 10.9008H20.9942L21.005 13.8273ZM21.005 10.1781H18.2192V8.72501C19.4021 8.23788 20.3846 7.36089 21.005 6.23837V10.1781Z"
                fill="#D2840D"
              />
              <path
                d="M28.0835 12.4183L30.015 11.5744V10.4787H28.0835V12.4183Z"
                fill="#171B2C"
              />
              <path
                d="M30.0166 12.4183H28.0835V21.5209H30.0166V12.4183Z"
                fill="#171B2C"
              />
              <path
                d="M42.8285 15.778C43.6457 15.3521 44.3994 14.6419 44.3994 13.3177C44.4115 12.9725 44.3522 12.6285 44.2251 12.3074C44.0981 11.9864 43.906 11.6954 43.6611 11.4527C43.0328 10.8218 42.0423 10.4736 40.7856 10.4736H35.8562V21.5174H40.9465C43.3965 21.5174 45.0153 20.4606 45.0153 18.4884C45.0122 16.9607 44.1161 16.2193 42.8285 15.778ZM37.7537 12.2034H40.5395C41.7776 12.2034 42.471 12.7396 42.471 13.6021C42.471 14.6434 41.6383 15.133 40.3986 15.133H37.7583L37.7537 12.2034ZM40.9589 19.8063H37.7537V16.7788H40.8181C42.341 16.7788 43.0792 17.3306 43.0792 18.2615C43.0792 19.2795 42.279 19.8001 40.9635 19.8001L40.9589 19.8063Z"
                fill="#171B2C"
              />
              <path
                d="M59.2137 13.9961C59.2137 11.867 57.7063 10.4775 55.1294 10.4775H50.2279V21.5213H52.1609V17.6717H54.549L57.2822 21.5213H59.5603L56.5904 17.3407C58.1303 16.8993 59.2137 15.8098 59.2137 13.9961ZM52.1609 15.9528V12.2446H54.9731C56.4031 12.2446 57.2512 12.8927 57.2512 14.0754C57.2512 15.227 56.3706 15.9528 54.9885 15.9528H52.1609Z"
                fill="#171B2C"
              />
              <path
                d="M66.4956 10.4785H64.5626V21.5208H66.4956V10.4785Z"
                fill="#171B2C"
              />
              <path
                d="M76.4315 10.4775H72.3317V21.5213H76.4315C79.8875 21.5213 82.2755 19.1077 82.2755 15.9994C82.2755 12.86 79.8875 10.4775 76.4315 10.4775ZM76.4315 19.7543H74.2648V12.2446H76.4315C78.7406 12.2446 80.2481 13.8392 80.2481 15.9994C80.2481 18.1923 78.7406 19.7543 76.4315 19.7543Z"
                fill="#171B2C"
              />
              <path
                d="M92.5457 17.0403H95.3578V19.1073C94.5836 19.6613 93.6542 19.9541 92.7036 19.9435C90.4564 19.9435 88.9644 18.2712 88.9644 15.999C88.9644 13.8543 90.5028 12.0717 92.524 12.0717C93.9169 12.0717 94.7543 12.5286 95.6024 13.2544L96.8281 11.7873C95.6968 10.8252 94.519 10.2891 92.603 10.2891C89.2879 10.2891 86.9308 12.9078 86.9308 15.999C86.9308 19.2487 89.1935 21.7105 92.634 21.7105C94.3193 21.7095 95.9478 21.0987 97.2212 19.9901V15.3525H92.5395L92.5457 17.0403Z"
                fill="#171B2C"
              />
              <path
                d="M104.7 19.7848V16.8195H110.214V15.085H104.7V12.213H110.921V10.4785H102.768V21.5208H111V19.7848H104.7Z"
                fill="#171B2C"
              />
            </svg>
          </nuxt-link>
        </div>
        <p class="ml-6 consulting" v-html="$t('logo_text')"></p>
      </div>

      <nav class="d-none d-md-block header-nav ml-auto">
        <ul class="d-flex align-center justify-space-between">
          <li class="mx-4 ml-0">
            <nuxt-link v-scroll-to="{ el: '#programs', offset: -150 }" to="/">
              {{ $t('programs') }}
            </nuxt-link>
          </li>
          <li class="mx-4 ml-0 relative">
            <div
              class="d-flex align-center ml-auto"
              @click="isToggled = !isToggled"
            >
              {{ $t('countries') }}
              <svg
                class="ml-1 rotate-180"
                :class="{ 'rotate-180-active': isToggled }"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 6L8.35355 5.64645L8 5.29289L7.64645 5.64645L8 6ZM12.3536 9.64645L8.35355 5.64645L7.64645 6.35355L11.6464 10.3536L12.3536 9.64645ZM7.64645 5.64645L3.64645 9.64645L4.35355 10.3536L8.35355 6.35355L7.64645 5.64645Z"
                  fill="white"
                />
              </svg>
            </div>
            <div v-if="isToggled" class="countries-dropdown">
              <div
                v-for="(item, index) in countries"
                :key="index"
                class="item"
                @click="goToCountry(item)"
              >
                <img :src="item.country_logo" alt="" />
                {{ getByLanguage(item.country_translations).country_name }}
              </div>
            </div>
          </li>

          <li class="mx-4">
            <nuxt-link v-scroll-to="'#services'" to="/">
              {{ $t('services') }}
            </nuxt-link>
          </li>
          <li class="mx-4">
            <nuxt-link v-scroll-to="'#partners'" to="/">
              {{ $t('partners') }}
            </nuxt-link>
          </li>
          <li class="mx-4 mr-0">
            <nuxt-link v-scroll-to="'#contacts'" to="/">
              {{ $t('contacts') }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="d-none d-md-flex align-center ml-12">
        <div class="lang">
          <div
            v-if="$i18n.locale == 'ru'"
            class="d-flex align-center pointer"
            @click="setLocale('en')"
          >
            <svg
              class="mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 5H22V12H2V5Z" fill="white" />
              <path d="M2 12H22V19H2V12Z" fill="#D52B1E" />
              <path d="M2 9.66699H22V14.3337H2V9.66699Z" fill="#0039A6" />
            </svg>
            RU
          </div>
          <div
            v-if="$i18n.locale == 'en'"
            class="d-flex align-center pointer"
            @click="setLocale('ru')"
          >
            <svg
              class="mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 5H21.9895V18.9984H2V5Z" fill="white" />
              <path
                d="M10.9952 13.3948V18.9984H12.9944V13.3948H21.9896V10.5963H12.9944V5H10.9952V10.5963H2V13.3948H10.9952Z"
                fill="#CF142B"
              />
              <path
                d="M13.6609 9.53124V5H20.1329L13.6609 9.53124ZM13.6609 14.4671V18.9984H20.1329L13.6609 14.4671ZM10.3285 14.4671V18.9984H3.85653L10.3285 14.4671ZM10.3285 9.53124V5H3.85653L10.3285 9.53124ZM2 6.30125V9.66601H6.8058L2 6.30125ZM21.9895 6.30125V9.66601H17.1837L21.9895 6.30125ZM21.9895 17.6972V14.3324H17.1837L21.9895 17.6972ZM2 17.6972V14.3324H6.8058L2 17.6972Z"
                fill="#00247D"
              />
              <path
                d="M21.9895 5H20.8793L14.2267 9.66601H15.3369L22 5H21.9895ZM9.76287 14.3321H8.6526L2 18.9981H3.11027L9.77333 14.3321H9.76287ZM7.5512 9.66965H8.6614L2 5V5.7826L7.5512 9.66965ZM16.4349 14.3303H15.3246L21.986 19V18.2174L16.4349 14.3303Z"
                fill="#CF142B"
              />
            </svg>
            EN
          </div>
        </div>

        <button
          class="ml-6 btn-orange"
          :class="{ 'd-none': is_transparent && !isError }"
          @click="openModal"
        >
          {{ $t('gotoapplication') }}
        </button>
      </div>
      <div class="d-md-none ml-auto pointer">
        <svg
          v-if="is_transparent && !isError"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="openMenu"
        >
          <path d="M5 7H19" stroke="white" stroke-linecap="square" />
          <path d="M5 12H19" stroke="white" stroke-linecap="square" />
          <path d="M5 17H19" stroke="white" stroke-linecap="square" />
        </svg>
        <svg
          v-else
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="openMenu"
        >
          <path d="M5 7H19" stroke="#474747" stroke-linecap="square" />
          <path d="M5 12H19" stroke="#474747" stroke-linecap="square" />
          <path d="M5 17H19" stroke="#474747" stroke-linecap="square" />
        </svg>
      </div>
    </v-container>

    <v-dialog
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
              v-mask="'+7 7## ### ## ##'"
              class="my-input mt-1"
              outlined
              placeholder="+7 7xx xxx xx xx"
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

    <v-dialog
      v-model="menu_modal"
      fullscreen
      transition="slide-x-reverse-transition"
    >
      <v-card class="my-modal">
        <div class="close" @click="closeMenu()">
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
        <div class="py-4 mx-auto d-flex justify-center w-100"></div>
        <nav v-if="step == 1" class="mob-nav mt-8 px-4">
          <ul class="">
            <li class="mb-8">
              <nuxt-link
                v-scroll-to="{ el: '#programs', offset: -150 }"
                class="linklink"
                to="/"
                @click.native="menu_modal = false"
              >
                {{ $t('programs') }}
              </nuxt-link>
            </li>
            <li class="mb-8">
              <div
                class="d-flex align-center ml-auto"
                @click="mobCountryToggled"
              >
                {{ $t('countries') }}
                <svg
                  class="ml-1 rotate-180"
                  :class="{ 'rotate-180-active': isToggled }"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6L8.35355 5.64645L8 5.29289L7.64645 5.64645L8 6ZM12.3536 9.64645L8.35355 5.64645L7.64645 6.35355L11.6464 10.3536L12.3536 9.64645ZM7.64645 5.64645L3.64645 9.64645L4.35355 10.3536L8.35355 6.35355L7.64645 5.64645Z"
                    fill="white"
                  />
                </svg>
              </div>
            </li>
            <li class="mb-8">
              <nuxt-link
                v-scroll-to="'#services'"
                class="linklink"
                to="/"
                @click.native="menu_modal = false"
              >
                {{ $t('services') }}
              </nuxt-link>
            </li>
            <li class="mb-8">
              <nuxt-link
                v-scroll-to="'#partners'"
                class="linklink"
                to="/"
                @click.native="menu_modal = false"
              >
                {{ $t('partners') }}
              </nuxt-link>
            </li>
            <li class="mb-8">
              <nuxt-link
                v-scroll-to="'#contacts'"
                class="linklink"
                to="/"
                @click.native="menu_modal = false"
              >
                {{ $t('contacts') }}
              </nuxt-link>
            </li>
            <div class="lang">
              <div
                v-if="$i18n.locale == 'ru'"
                class="d-flex align-center pointer"
                @click="setLocale('en')"
              >
                <svg
                  class="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 5H22V12H2V5Z" fill="white" />
                  <path d="M2 12H22V19H2V12Z" fill="#D52B1E" />
                  <path d="M2 9.66699H22V14.3337H2V9.66699Z" fill="#0039A6" />
                </svg>
                <h3>RU</h3>
              </div>
              <div
                v-if="$i18n.locale == 'en'"
                class="d-flex align-center pointer"
                @click="setLocale('ru')"
              >
                <svg
                  class="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 5H21.9895V18.9984H2V5Z" fill="white" />
                  <path
                    d="M10.9952 13.3948V18.9984H12.9944V13.3948H21.9896V10.5963H12.9944V5H10.9952V10.5963H2V13.3948H10.9952Z"
                    fill="#CF142B"
                  />
                  <path
                    d="M13.6609 9.53124V5H20.1329L13.6609 9.53124ZM13.6609 14.4671V18.9984H20.1329L13.6609 14.4671ZM10.3285 14.4671V18.9984H3.85653L10.3285 14.4671ZM10.3285 9.53124V5H3.85653L10.3285 9.53124ZM2 6.30125V9.66601H6.8058L2 6.30125ZM21.9895 6.30125V9.66601H17.1837L21.9895 6.30125ZM21.9895 17.6972V14.3324H17.1837L21.9895 17.6972ZM2 17.6972V14.3324H6.8058L2 17.6972Z"
                    fill="#00247D"
                  />
                  <path
                    d="M21.9895 5H20.8793L14.2267 9.66601H15.3369L22 5H21.9895ZM9.76287 14.3321H8.6526L2 18.9981H3.11027L9.77333 14.3321H9.76287ZM7.5512 9.66965H8.6614L2 5V5.7826L7.5512 9.66965ZM16.4349 14.3303H15.3246L21.986 19V18.2174L16.4349 14.3303Z"
                    fill="#CF142B"
                  />
                </svg>
                <h3>EN</h3>
              </div>
            </div>
          </ul>
        </nav>
        <div v-else class="">
          <p @click="step = 1" class="country-mob">
            <svg
              class="mr-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12.5L8.29289 11.7929L7.58579 12.5L8.29289 13.2071L9 12.5ZM14.2929 5.79289L8.29289 11.7929L9.70711 13.2071L15.7071 7.20711L14.2929 5.79289ZM8.29289 13.2071L14.2929 19.2071L15.7071 17.7929L9.70711 11.7929L8.29289 13.2071Z"
                fill="#D2840D"
              />
            </svg>
            {{ $t('countries') }}
          </p>
          <div class="countries-dropdown countries-dropdown-mob">
            <div
              v-for="(item, index) in countries"
              :key="index"
              class="item"
              @click="goToCountry(item.pk)"
            >
              <img :src="item.country_logo" alt="" />
              {{ getByLanguage(item.country_translations).country_name }}
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<i18n>
  {
    "en": {
      "countries":"Countries",
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
      "countries":"Страны",
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
import lang from '@/mixins/lang'
export default {
  mixins: [lang],
  props: {
    isError: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    step: 1,
    isToggled: false,
    isButtonActive: true,
    menu_modal: false,
    success_modal: false,
    request_modal: false,
    is_transparent: true,
    form: {},
    countries: [],
  }),
  created() {
    this.$axios
      .get(`${this.$i18n.locale}/countries`)
      .then((res) => {
        this.countries = res.data
      })
      .catch(() => {})
  },
  mounted() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
    this.$root.$on('openRequest', (form = {}) => {
      this.form.source = form.source
      if (form.type) {
        this.form.comments = Object.values(form).join(', ')
      }
      this.openModal()
    })
  },
  methods: {
    goToCountry(item) {
      // if (this.getByLanguage(item.country_translations)) {
      // const slug = this.$translate(
      //   this.getByLanguage(item.country_translations).country_name
      // )
      this.$router.push(`/${item.country_slug}`)
      // }
      this.isToggled = false
      this.closeMenu()
    },
    closeMenu() {
      this.menu_modal = false
    },
    resetDefault() {
      this.form = {}
    },
    openMenu() {
      this.menu_modal = true
    },
    openPolicy() {
      this.$root.$emit('openPolicy')
    },
    async submitForm() {
      this.form.source = this.form.source ?? 'Главная'
      if (
        this.$route.name === 'Partner-name-id' ||
        this.$route.name === 'Country-name-id'
      ) {
        this.form.source = this.$route.params.name
      } else if (this.$route.name === 'Events') this.form.source = 'Ивенты'
      else this.form.source = 'Главная'

      if (this.$route.name === 'Country-id')
        this.form.source = `country - ${this.$route.params.id}`
      if (this.$route.name === 'Partner-id')
        this.form.source = `partner - ${this.$route.params.id}`
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
    closeModal() {
      this.request_modal = false
      this.success_modal = false
    },
    openModal() {
      this.request_modal = true
    },
    onScroll() {
      const pos = window.scrollY
      if (pos > 10) this.is_transparent = false
      else this.is_transparent = true
    },
    setLocale(lang) {
      this.$root.$i18n.locale = lang
      this.closeMenu()
    },
    mobCountryToggled() {
      this.isToggled = !this.isToggled
      this.step = 2
    },
  },
}
</script>

<style scoped lang="scss">
.rotate-180 {
  translate: 0.22s;
  transform: rotate(180deg);
  &-active {
    transform: rotate(0deg);
  }
}
.linklink {
  color: $black-color;
  &:hover {
    color: $orange-color;
  }
}
.country-mob {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 140%;
  color: #d2840d;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.consulting {
  text-transform: uppercase;
  font-size: 10px;
  line-height: 120%;
  color: #7c7c7c;
}
.countries-dropdown {
  position: absolute;
  left: 0;
  top: 48px;
  width: 198px;
  &-mob {
    width: unset;
    margin-top: 32px;
    position: static;

    .item {
      margin-bottom: 16px;
      font-weight: 500;
      font-size: 16px;
    }
  }
  .item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 16px;
    background: #fff;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #474747;

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }

    &:hover,
    &-active {
      background: #fbfbfb;
      cursor: pointer;
    }
  }
}
.header {
  width: 100%;
  top: 0;
  left: 0;
  padding: 8px 0;
  position: fixed;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  z-index: 100;
  transition: 0.3s;

  a {
    color: #202124;
    transition: 0.3s;

    &:hover {
      color: $orange-color;
    }
  }

  ul li div {
    color: #202124;
    transition: 0.3s;
    cursor: pointer;
    svg path {
      fill: #202124;
    }
    &:hover {
      color: $orange-color;
    }
  }

  &-transparent {
    background: transparent;
    box-shadow: none;

    * {
      color: #f8f8f8;
    }
    a {
      color: #f8f8f8;
    }
    ul li div {
      color: #f8f8f8;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        color: $orange-color;
      }
      svg path {
        fill: #f8f8f8;
      }
    }
  }
  // &-container {
  //   width: 100%;
  //   height: 80px;
  // }
}

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
a {
  text-decoration: none;
}
.mob-nav {
  a,
  h3,
  ul li div {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 120%;
    cursor: pointer;
    &:hover {
      color: $orange-color;
    }
  }
}
</style>
