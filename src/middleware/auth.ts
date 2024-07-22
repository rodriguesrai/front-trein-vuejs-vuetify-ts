import { useUserStore } from '@/store/useUserStore'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const userStore = useUserStore()
  const token = localStorage.getItem('token')

  if (token && userStore.username) {
    next()
  } else {
    next('/login')
  }
}
