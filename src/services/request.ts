import api from '@/services/axios'

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('auth/login', {
      username: email,
      password
    })
    const { data } = response
    return data
  } catch (error) {
    console.log(error)
  }
}
