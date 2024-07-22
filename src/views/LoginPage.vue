<template>
  <v-main>
    <TheHeader />
    <v-container class="login-main-container">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-3">
            <v-card-title class="headline">Login</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="handleSubmit">
                <v-text-field
                  v-model="formData.username"
                  :error-messages="errors.username"
                  label="Username"
                  type="username"
                  @blur="validate('username')"
                  @input="validate('username')"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="formData.password"
                  :error-messages="errors.password"
                  label="Password"
                  type="password"
                  @blur="validate('password')"
                  @input="validate('password')"
                  required
                ></v-text-field>
                <v-btn type="submit" color="primary" :disabled="!isFormValid">{{
                  $t('login.buttonLogin')
                }}</v-btn>
                <v-btn @click="router.push('/register')" color="primary">{{
                  $t('login.buttonRegister')
                }}</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import { useUserStore } from '@/store/useUserStore'
import { useRouter } from 'vue-router'
import { useForm } from '../hooks/useForm'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { login } from '@/services/request'
const { t } = useI18n()

const router = useRouter()
const userStore = useUserStore()

const { formData, errors, validate, isFormValid } = useForm(
  {
    username: '',
    password: ''
  },
  yup.object().shape({
    username: yup.string().required(() => t(`login.usernameRequired`)),
    password: yup.string().required(() => t(`login.passwordRequired`))
  })
)

const handleSubmit = async () => {
  if (isFormValid.value) {
    try {
      const data = await login(formData.value.username, formData.value.password)
      if (data && data.access_token) {
        localStorage.setItem('token', data.access_token)
        userStore.setUsername(formData.value.username)
        router.push('/')
      } else {
        console.log('Login falhou: dados inválidos', data)
      }
    } catch (error) {
      console.log('Login falhou', error)
    }
  }
}
</script>

<style scoped>
.headline {
  text-align: center;
}

.login-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
