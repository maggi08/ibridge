import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import SwiperCore, { EffectCoverflow, Pagination, EffectFade } from 'swiper'

SwiperCore.use([EffectCoverflow, Pagination, EffectFade])

Vue.use(VueAwesomeSwiper)
