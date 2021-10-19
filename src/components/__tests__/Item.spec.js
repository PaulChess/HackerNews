import Item from '../Item.vue'
import { shallowMount } from '@vue/test-utils'
// import Vue from 'vue'

describe('Item.vue', () => {
  test('sanity test', () => {
    const wrapper = shallowMount(Item)
    debugger
    expect(wrapper.vm.$el.textContent).toContain('item')
  })
})
