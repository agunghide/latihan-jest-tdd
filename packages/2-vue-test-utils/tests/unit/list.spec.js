import List from '@/components/list'
import { mount, shallowMount } from '@vue/test-utils'

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

  it.skip('correctly renders each list item', () => {
    wrapper = shallowMount(List)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it.skip('correctly renders each list item', () => {
    const listItems = wrapper.findAll('li')
    listItems.filter((item, index) => {
      const name = wrapper.vm.musicGroups[index]
      expect(item.html()).toContain(name)

    })
  })

  it.skip('correctly renders each list item stub', () => {
    wrapper = shallowMount(List, {
      stubs: {
        ListItem: {
          template: `<li>{{ name }}</li>`,
          props: ['name']
        }
      }
    })
    const listItems = wrapper.findAll('li')
    listItems.filter((item, index) => {
      const name = wrapper.vm.musicGroups[index]
      expect(item.html()).toBe(`<li>${name}</li>`)
    })
  })

  test.skip('create snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
