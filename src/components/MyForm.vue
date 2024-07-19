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
import { computed, ref } from 'vue'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: [] as string[],
  email: [] as string[],
  message: [] as string[]
})

const isFormValid = computed(
  () =>
    !Object.entries(formData.value).some(
      ([field, value]) => !value || errors.value[field as keyof typeof errors.value].length > 0
    )
)

const schema = yup.object().shape({
  name: yup.string().required(() => t(`contact.form.error.name`)),
  email: yup
    .string()
    .email(() => t(`contact.form.error.emailInvalid`))
    .required(() => t(`contact.form.error.emailRequired`)),
  message: yup.string().required(() => t(`contact.form.error.message`))
})

const validate = (field: keyof typeof formData.value) => {
  try {
    schema.validateSyncAt(field, formData.value)
    errors.value[field] = []
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      errors.value[field] = err.errors
    }
  }
}

const handleSubmit = () => {
  schema.validate(formData.value, { abortEarly: false }).then(() => {
    console.log('Formulário válido')
  })
}
</script>

<style scoped></style>
