import { mount } from '@vue/test-utils'
import ItemButtonVue from '../ItemButton.vue'
import { test, vi } from 'vitest'
import { expect } from 'vitest'

test('render the image correctly when given img into slot', () => {
  const wrapper = mount(ItemButtonVue, {
    slots: {
      default: '<img src="src/test.webp" />'
    }
  })
  expect(wrapper.find('img').exists()).toBe(true)
  expect(wrapper.find('img').attributes('src')).toBe('src/test.webp')
})

test('button disabled and title not rendered when props.title empty', () => {
  const wrapper = mount(ItemButtonVue, {})
  expect(wrapper.find('title').exists()).toBe(false)
  expect(wrapper.find('button:disabled').exists()).toBe(true)
})

test('button onclick emits "item-button-active" event with correct parameter', async () => {
  const title = '爆破单元'
  const wrapper = mount(ItemButtonVue, {
    props: {
      title
    }
  })
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted('item-button-active')).toBeTruthy()
  expect(wrapper.emitted('item-button-active')[0][0]).toBe(title)
})
