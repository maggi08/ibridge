<template>
  <div id="achivements" class="relative">
    <div class="bg"></div>
    <img class="bg" src="@/assets/img/bg_pattern.png" alt="" />
    <v-container class="pt-16 pb-16">
      <p class="label grey-color text-center text-lg-left text-uppercase">
        {{ $t('label') }}
      </p>
      <h2
        class="mt-3 black-color text-center text-lg-left"
        v-html="$t('title')"
      ></h2>

      <div class="mt-14 achivements d-flex align-center row mx-0">
        <div
          v-for="(item, index) in achivements"
          :key="index"
          class="col-6 col-lg-3 pa-0 mb-8"
        >
          <div
            class="
              achivements-item
              d-flex
              flex-column
              justify-center
              align-center
              mb-10
              mx-auto
            "
          >
            <div
              :id="`number${index}`"
              class="achivements-item__number text-center"
            >
              {{ item.number }}
            </div>
            <h5 class="mt-2 text-center fw-400" v-html="$t(item.title)"></h5>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<i18n>
{
  "en": {
    "label": "Advantages",
    "title": "Achievements <br/> of our company",
    "title1": "years of experience",
    "title2": "partner universities",
    "title3": "language centers",
    "title4": "education countries"
  },
  "ru": {
    "label": "Преимущества",
    "title": "Успехи и достижения <br/> компании",
    "title1": "лет опыта",
    "title2": "партнеров <br/> университетов",
    "title3": "языковых <br/> центров",
    "title4": "стран <br/> для обучения"
  }
}
</i18n>

<script>
export default {
  data: () => ({
    isDone: false,
    achivements: [
      {
        title: 'title1',
        number: 10,
      },
      {
        title: 'title2',
        number: 208,
      },
      {
        title: 'title3',
        number: 127,
      },
      {
        title: 'title4',
        number: 17,
      },
    ],
  }),
  mounted() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (this.isDone) {
        window.removeEventListener('scroll', this.onScroll)
        return
      }

      const windowPos = window.scrollY + screen.height
      const achivements = document.getElementById('achivements')
      const numbers = document.querySelectorAll('.achivements-item__number')
      const position = achivements.offsetTop
      if (windowPos >= position) {
        for (const item of numbers) {
          this.animateValue(item, 0, item.innerHTML, 3000)
        }
        this.isDone = true
      }
    },
    animateValue(obj, start, end, duration) {
      if (!process.client) return

      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        obj.innerHTML = Math.floor(progress * (end - start) + start)
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    },
  },
}
</script>

<style scoped lang="scss">
.realtive {
  position: relative;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 280px;
  width: 100%;
  object-fit: cover;
}
.achivements {
  &-item {
    width: 256px;
    height: 200px;
    background: #ffffff;
    position: relative;
    display: inline-block;

    -webkit-filter: drop-shadow(0px 10px 20px rgba(41, 41, 42, 0.07));
    -moz-filter: drop-shadow(0px 10px 20px rgba(41, 41, 42, 0.07));
    -ms-filter: drop-shadow(0px 10px 20px rgba(41, 41, 42, 0.07));
    -o-filter: drop-shadow(0px 10px 20px rgba(41, 41, 42, 0.07));
    filter: drop-shadow(0px 10px 20px rgba(41, 41, 42, 0.07));
    // box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 40px;
      left: 0;
      top: 100%;

      border-top: 40px solid #fff;
      border-left: 128px solid transparent;
      border-right: 128px solid transparent;
      // box-shadow: ;
    }

    @media (max-width: 1240px) {
      width: 232px;
      &:after {
        border-left: 116px solid transparent;
        border-right: 116px solid transparent;
      }
    }

    @media (max-width: 600px) {
      width: 164px;
      height: 152px;
      &:after {
        border-left: 82px solid transparent;
        border-right: 82px solid transparent;
      }
    }

    &__number {
      font-family: Playfair Display;
      font-weight: bold;
      font-size: 48px;
      line-height: 64px;
      font-feature-settings: 'pnum' on, 'lnum' on, 'salt' on, 'liga' off;
      color: #d2840d;
    }
  }
}

[data-aos='open-slide'] {
  height: 0;
  overflow-y: hidden;
}
[data-aos='open-slide'].aos-animate {
  height: 100%;
  overflow-y: unset;
}
</style>
