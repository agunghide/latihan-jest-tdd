import TestComponent from '@/components/test'

import { mount } from '@vue/test-utils'

describe('TestComponent', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TestComponent, {
      propsData: {
        value: 'adrian'
      }
    })
  })
  it('correctly mount', () => {
    expect(wrapper.html()).toContain('main')
    // expect(wrapper.contains('div')).toBe(true)
  })

  it('correctly render props', () => {
    expect(wrapper.props().value).toBe('adrian')
  })

  test.skip('create snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
