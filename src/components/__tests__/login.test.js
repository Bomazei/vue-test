import { mount } from '@vue/test-utils'
import Component from '../Login'



describe('Component', () => {
  it('является экземпляром Vue', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
  }),
  
  it('неверное слово', () => {
    const wrapper = mount(Component)
    wrapper.vm.$data.message = "123"
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.error).toBe('Error: wrong word - 123')
  }),
  it('слово test', () => {
    const wrapper = mount(Component)
    wrapper.vm.$data.message = "test"
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.error).toBe('')

    
  })
})