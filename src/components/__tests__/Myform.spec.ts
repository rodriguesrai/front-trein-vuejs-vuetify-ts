import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '../MyForm.vue'
import i18n from '../../i18n/i18n.config'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('MyForm Test', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(ContactForm, {
      global: {
        plugins: [i18n, vuetify]
      }
    })
  })

  it('1 - renders properly', () => {
    expect(wrapper.find('[data-testid="name-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="email-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="message-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="submit-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="submit-button"]').text()).toBe('Submit')
  })

  it('2 - submit button is initially disabled', () => {
    const submitButton = wrapper.find('[data-testid="submit-button"]')
    expect(submitButton.attributes('disabled')).toBeDefined()
  })

  it('3 - inputs works correctly', async () => {
    const emailInput = wrapper.find('[data-testid="email-input"] input')
    const nameInput = wrapper.find('[data-testid="name-input"] input')
    const messageInput = wrapper.find('[data-testid="message-input"] textarea')

    await emailInput.setValue('john@example.com')
    await nameInput.setValue('John Doe')
    await messageInput.setValue('Hello there!')

    expect(emailInput.element.value).toBe('john@example.com')
    expect(nameInput.element.value).toBe('John Doe')
    expect(messageInput.element.value).toBe('Hello there!')
  })
})
