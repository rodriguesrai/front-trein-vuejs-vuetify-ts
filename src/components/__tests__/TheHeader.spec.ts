import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import { describe, it, expect, beforeEach } from 'vitest'
import TheHeader from '../TheHeader.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import i18n from '../../i18n/i18n.config'
import 'vuetify/styles'
import { createTestingPinia } from '@pinia/testing'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('TheHeader Component', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(
      {
        template: '<v-app><TheHeader></TheHeader></v-app>'
      },
      {
        global: {
          components: {
            TheHeader
          },
          plugins: [i18n, vuetify, createTestingPinia()]
        }
      }
    )
  })

  it('renders the component correctly', () => {
    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(3)
  })

  it('changes language when button is clicked', async () => {
    const brButton = wrapper.find('button.transparent-button:nth-of-type(2)')
    const enButton = wrapper.find('button.transparent-button:nth-of-type(1)')
    const homeButton = wrapper.find('[data-testid="home-button"]')

    await brButton.trigger('click')
    expect(homeButton.text()).toBe('Início')

    await enButton.trigger('click')
    expect(homeButton.text()).toBe('Home')
  })
})
