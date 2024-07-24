import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheFooter from '../TheFooter.vue'
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

describe('TheFooter component renders properly', () => {
  const wrapper = mount(
    {
      template: '<v-app><the-footer></the-footer></v-app>'
    },
    {
      global: {
        components: {
          TheFooter
        },
        plugins: [i18n, vuetify]
      }
    }
  )

  it('1 - renders properly', () => {
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(10)
  })
})
