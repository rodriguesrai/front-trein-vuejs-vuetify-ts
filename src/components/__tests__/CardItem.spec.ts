import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import CardItem from '../CardItem.vue'
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

describe('CardItem Test', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(CardItem, {
      global: {
        plugins: [i18n, vuetify]
      }
    })
  })

  it('1 - renders components properly', () => {
    const img = wrapper.find('img')
    const actionButton = wrapper.findAll('button')

    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBeDefined()
    expect(img.attributes('alt')).toBeDefined()
    expect(actionButton.length).toBe(2)
  })
})
