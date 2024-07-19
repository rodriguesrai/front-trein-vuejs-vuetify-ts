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
                <v-btn type="submit" color="primary" :disabled="!isFormValid">Login</v-btn>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from '../hooks/useForm'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const email = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()

const { formData, errors, validate, isFormValid } = useForm(
  {
    email: '',
    password: ''
  },
  yup.object().shape({
    email: yup
      .string()
      .email(() => t(`contact.form.error.emailInvalid`))
      .required(() => t(`contact.form.error.emailRequired`)),
    password: yup.string().required('Password is required')
  })
)

const handleSubmit = () => {
  if (isFormValid.value) {
    userStore.setEmail(formData.value.email)
    router.push('/')
    localStorage.setItem('userEmail', formData.value.email)
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
