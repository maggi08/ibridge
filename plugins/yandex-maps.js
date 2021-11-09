import YmapPlugin from 'vue-yandex-maps'
import Vue from 'vue'
const settings = {
  apiKey: 'b48b352f-3f63-4823-bc62-990cfb330913',
  lang: 'ru_RU',
  version: '2.1',
  coordorder: 'latlong',
}
Vue.use(YmapPlugin, settings)
