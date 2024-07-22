<!-- src/views/RegisterPage.vue -->
<template>
  <v-main>
    <TheHeader />
    <v-container class="register-main-container">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-3">
            <v-card-title class="headline">Register</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="handleSubmit">
                <v-text-field
                  v-model="formData.name"
                  :error-messages="errors.name"
                  label="Name"
                  type="text"
                  @blur="validate('name')"
                  @input="validate('name')"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="formData.username"
                  :error-messages="errors.username"
                  label="Username"
                  type="text"
                  @blur="validate('username')"
                  @input="validate('username')"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="formData.email"
                  :error-messages="errors.email"
                  label="Email"
                  type="email"
                  @blur="validate('email')"
                  @input="validate('email')"
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
                <v-btn type="submit" color="primary" :disabled="!isFormValid">Register</v-btn>
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
import { useForm } from '../hooks/useForm'
import { useRouter } from 'vue-router'
import { register } from '@/services/request'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

const { formData, errors, validate, isFormValid } = useForm(
  {
    name: '',
    username: '',
    email: '',
    password: ''
  },
  yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
  })
)

const handleSubmit = async () => {
  if (isFormValid.value) {
    try {
      await register(
        formData.value.name,
        formData.value.username,
        formData.value.email,
        formData.value.password
      )
      router.push('/login')
    } catch (error) {
      console.log('Registration failed', error)
    }
  }
}
</script>

<style scoped>
.headline {
  text-align: center;
}

.register-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
