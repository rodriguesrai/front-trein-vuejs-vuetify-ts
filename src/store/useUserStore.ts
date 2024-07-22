// useUserStore.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: localStorage.getItem('userEmail') || '',
    language:
      localStorage.getItem('userLanguage') || (import.meta.env.VITE_DEFAULT_LOCALE as string)
  }),
  actions: {
    setEmail(newEmail: string) {
      this.email = newEmail
      localStorage.setItem('userEmail', newEmail)
    },
    setLanguage(newLanguage: string) {
      this.language = newLanguage
      localStorage.setItem('userLanguage', newLanguage)
    }
  }
})
