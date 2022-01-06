import FruitBasket from '@/components/fruit-basket'
import { mount } from '@vue/test-utils'

describe('FruitBasketComponent', () => {
  it('can add fruits to basket with DOM', async () => {
    const wrapper = mount(FruitBasket)
  
    // const form = wrapper.find('form')
    const input = wrapper.find('input')
    const button = wrapper.find('button')
  
    input.element.value = 'pineapple'
    await input.trigger('input')
    expect(wrapper.vm.fruit).toBe('pineapple')
  
    await button.trigger('submit')
    expect(wrapper.vm.fruit).toBe('')
    expect(wrapper.vm.basket).toEqual(
      expect.arrayContaining(['pineapple'])
    )
    expect(wrapper.findAll('li').length).toBe(1)
  })
})
