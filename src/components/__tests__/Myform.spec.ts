import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '../MyForm.vue'
import i18n from '../../i18n/i18n.config'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify()
const wrapper = mount(ContactForm, {
  global: {
    plugins: [i18n, vuetify]
  }
})

describe('ContactForm', () => {
  it('renders properly', () => {
    // Verifica se o título do formulário é renderizado corretamente
    expect(wrapper.find('[data-testid="name-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="email-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="message-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="submit-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="submit-button"]').text()).toBe('Submit')
  })

  it('submit button is initially disabled', () => {
    const submitButton = wrapper.find('[data-testid="submit-button"]')
    expect(submitButton.attributes('disabled')).toBeTruthy()
  })
})
