import { computed, ref } from 'vue'
import * as yup from 'yup'

export function useForm(
  initialValues: Record<string, any>,
  validationSchema: yup.ObjectSchema<any>
) {
  const formData = ref(initialValues)
  const errors = ref<Record<string, string[]>>({})

  const validate = (field: keyof typeof formData.value) => {
    try {
      validationSchema.validateSyncAt(field, formData.value)
      errors.value[field] = []
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        errors.value[field] = err.errors
      }
    }
  }

  const isFormValid = computed(() => {
    return !Object.entries(formData.value).some(([field, value]) => {
      const fieldErrors = errors.value[field as keyof typeof errors.value]
      return !value || (fieldErrors && fieldErrors.length > 0)
    })
  })

  return {
    formData,
    errors,
    validate,
    isFormValid
  }
}
