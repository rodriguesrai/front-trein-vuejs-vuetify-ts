import { useUserStore } from '@/store/useUserStore'

export const requireAuth = (_to, _from, next) => {
  const userStore = useUserStore()
  const token = localStorage.getItem('token')

  if (token && userStore.username) {
    next()
  } else {
    next('/login')
  }
}
