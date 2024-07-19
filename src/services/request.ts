import instance from '@/services/axios'

export const login = async (email: string, password: string) => {
  try {
    const response = await instance.post('auth/login', {
      username: email,
      password
    })
    console.log(response)
    const { access_token } = response.data
    console.log('token', access_token)

    localStorage.setItem('token', access_token)
  } catch (error) {
    console.log('Error: POST /auth/login', error)
  }
}
