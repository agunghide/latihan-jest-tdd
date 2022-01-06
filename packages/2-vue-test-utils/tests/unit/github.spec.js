import GithubCard from '@/components/github-card'
import { shallowMount } from '@vue/test-utils'

describe('GithubCardComponent', () => {
  describe('methods', () => {
    test('composeUrl', () => {
      const wrapper = shallowMount(GithubCard)
      const { composeUrl } = wrapper.vm
      expect(composeUrl('adrianpdm')).toBe('https://api.github.com/users/adrianpdm')
      expect(composeUrl('yyx990803')).toBe('https://api.github.com/users/yyx990803')
    })
  
    test('fetchData', async () => {
      const wrapper = shallowMount(GithubCard)
      const jsonMock = jest.fn().mockResolvedValue('GITHUB DATA')
      window.fetch = jest.fn().mockResolvedValue({
        json: jsonMock
      })
  
      wrapper.setData({
        username: 'vuejs'
      })
      wrapper.setMethods({
        composeUrl: (username) => `mocked:${username}`
      })
      await wrapper.vm.fetchData()
      expect(window.fetch).toHaveBeenCalledWith('mocked:vuejs')
      expect(jsonMock).toHaveBeenCalled()
      expect(wrapper.vm.data).toBe('GITHUB DATA')
    })
  
  })
})
