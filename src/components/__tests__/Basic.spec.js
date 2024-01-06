import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

// test library view
import Library from '@/views/Library.vue'

describe('Library', () => {
  it('should render', () => {
    const wrapper = mount(Library)
    expect(wrapper.html()).toMatchSnapshot()
  })
})