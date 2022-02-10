export default {
  methods: {
    getByLanguage(arr) {
      const langs = { ru: 'Русский', en: 'English' }
      const res = arr.find(
        (obj) => obj.language.title === langs[this.$i18n.locale]
      )
      if (!res) return {}
      return res
    },
  },
}
