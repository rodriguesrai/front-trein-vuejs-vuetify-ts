import { createI18n } from 'vue-i18n'
import locales from './locales'

const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: locales,
  runtimeOnly: false
})

export default i18n
