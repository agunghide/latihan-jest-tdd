import Temperature from '@/components/temperature'
import { mount } from '@vue/test-utils'

describe('TemperatureComponent', () => {
  describe('computed', () => {
    test('celcius', () => {
      const { vm } = mount(Temperature)
      expect(vm.celcius).toBe(0)
      vm.degrees = 23
      expect(vm.celcius).toBe(23)
    })

    test('fahrenheit', () => {
      const { vm } = mount(Temperature)
      expect(vm.fahrenheit).toBe(32)
      vm.degrees = 16
      expect(vm.fahrenheit).toBe(60.8)
    })

    test('fahrenheit to celcius', () => {
      const {vm } = mount(Temperature, {
        propsData: {
          temp: '50f'
        }
      })
      expect(vm.fahrenheit).toBe(50)
      expect(vm.celcius).toBe(10)
    })
  })

  describe('watch', () => {
    test('temp', async () => {
      const wrapper = mount(Temperature, {
        propsData: {
          temp: 40
        }
      })
      const { vm } = wrapper
      expect(vm.degrees).toBe(40)
      expect(vm.type).toBe('celcius')
      await wrapper.setProps({
        temp: '50f'
      })
      expect(vm.degrees).toBe(50)
      expect(vm.type).toBe('fahrenheit')
    })
  })
})
