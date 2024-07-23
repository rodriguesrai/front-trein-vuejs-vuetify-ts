import { mount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'
import { createTestingPinia } from '@pinia/testing'

const wrapper = mount(TheHeader, {})

// Mock da função logout
jest.mock('@/services/request', () => ({
  logout: jest.fn()
}))

describe('TheHeader', () => {
  it('should render the header with all buttons', () => {
    expect(wrapper.find('[data-testid="home-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="contact-button"]').exists()).to.be.true
    expect(wrapper.find('[data-testid="login-button"]').exists()).to.be.true
    expect(wrapper.find('h2').text()).equal('Application Frontend')
  })
})
