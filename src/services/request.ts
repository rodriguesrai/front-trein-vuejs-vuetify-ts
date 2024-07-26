import router from '@/router'
import api from '@/services/axios'
import { useUserStore } from '@/store/useUserStore'

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post('auth/login', {
      username,
      password
    })

    const { data } = response
    return data
  } catch (error) {
    console.log('url api', api.defaults.baseURL)
    console.log(error)
  }
}

export const register = async (name: string, username: string, email: string, password: string) => {
  try {
    const response = await api.post('users', {
      name,
      username,
      email,
      password
    })
    console.log('name', name)
    console.log('username', username)
    console.log('email', email)
    console.log('password', password)

    const { data } = response
    console.log(response)

    return data
  } catch (error) {
    console.log(error)
  }
}

export const logout = async () => {
  const userStore = useUserStore()
  localStorage.removeItem('token')
  userStore.setUsername('')
  router.push('/')
}
