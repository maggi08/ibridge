export default () => {
  ;(function (w, d, u) {
    const s = d.createElement('script')
    s.async = true
    s.src = u + '?' + ((Date.now() / 60000) | 0)
    const h = d.getElementsByTagName('script')[0]
    h.parentNode.insertBefore(s, h)
  })(
    window,
    document,
    'https://cdn-ru.bitrix24.ru/b19639152/crm/site_button/loader_1_2yz0yw.js'
  )
}
