// useUserStore.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: localStorage.getItem('userUsername') || '',
    language:
      localStorage.getItem('userLanguage') || (import.meta.env.VITE_DEFAULT_LOCALE as string)
  }),
  actions: {
    setUsername(newUsername: string) {
      this.username = newUsername
      localStorage.setItem('userUsername', newUsername)
    },
    setLanguage(newLanguage: string) {
      this.language = newLanguage
      localStorage.setItem('userLanguage', newLanguage)
    }
  }
})
