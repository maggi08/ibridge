import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'

SwiperCore.use([EffectCoverflow, Pagination])

Vue.use(VueAwesomeSwiper)
