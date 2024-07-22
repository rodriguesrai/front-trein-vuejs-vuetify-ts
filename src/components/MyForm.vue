<template>
  <v-container>
    <v-card-title>{{ $t('contact.form.title') }}</v-card-title>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        :placeholder="$t('contact.form.name')"
        v-model="formData.name"
        :error-messages="errors.name"
        @blur="validate('name')"
        @input="validate('name')"
        required
      ></v-text-field>
      <v-text-field
        :placeholder="$t('contact.form.email')"
        v-model="formData.email"
        :error-messages="errors.email"
        @blur="validate('email')"
        @input="validate('email')"
        required
      ></v-text-field>
      <v-textarea
        :placeholder="$t('contact.form.message')"
        v-model="formData.message"
        :error-messages="errors.message"
        @blur="validate('message')"
        @input="validate('message')"
        required
      ></v-textarea>
      <v-btn type="submit" color="primary" :disabled="!isFormValid">{{
        $t('contact.form.submit')
      }}</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useForm } from '../hooks/useForm'

const { t } = useI18n()

const { formData, errors, validate, isFormValid } = useForm(
  {
    name: '',
    email: '',
    message: ''
  },
  yup.object().shape({
    name: yup.string().required(() => t(`contact.form.error.name`)),
    email: yup
      .string()
      .email(() => t(`contact.form.error.emailInvalid`))
      .required(() => t(`contact.form.error.emailRequired`)),
    message: yup.string().required(() => t(`contact.form.error.message`))
  })
)

const handleSubmit = () => {
  if (isFormValid.value) {
    console.log('Form submitted')
  }
}
</script>

<style scoped></style>
