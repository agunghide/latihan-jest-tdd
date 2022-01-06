import List from '@/components/list'
import { mount } from '@vue/test-utils'

describe('ListComponent', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(List)
  })
  afterEach(() => {
    wrapper.destroy()
  })
  it('correctly set data', () => {
    const musicGroups = wrapper.vm.musicGroups
    const arr = [...musicGroups, 'The Panturas' ]
    wrapper.setData({
      musicGroups: [...arr]
    })
    expect(wrapper.vm.musicGroups).toEqual(
      expect.arrayContaining(arr)
    )
    expect(wrapper.vm.musicGroups).toContain('The Panturas')
  })

  test.skip('create snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
