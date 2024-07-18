// useUserStore.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '' as string // Inicialmente vazio
  }),
  actions: {
    setEmail(newEmail: string) {
      this.email = newEmail
    }
  }
})
