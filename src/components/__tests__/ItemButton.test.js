import { mount } from '@vue/test-utils'
import ItemButtonVue from '../ItemButton.vue'
import { test, vi } from 'vitest'
import { expect } from 'vitest'

test('render the image correctly when given image name', async () => {
  const wrapper = mount(ItemButtonVue, {
    props: {
      img: '爆破单元'
    }
  })
  expect(wrapper.find('img').exists()).toBe(true)
  expect(wrapper.find('img').attributes('src')).toBe(
    'src/assets/dsp-icon/爆破单元.webp'
  )
  expect(wrapper.find('img').attributes('alt')).toBe('爆破单元')
  expect(wrapper.find('img').attributes('width')).toBe('40px')
})

test('button disabled and img not rendered when props.img empty', async () => {
  const wrapper = mount(ItemButtonVue, {})
  expect(wrapper.find('img').exists()).toBe(false)
  expect(wrapper.find('button:disabled').exists()).toBe(true)
})

test('button onclick emits "ItemButton-active" event with correct parameter', async () => {
  const img = '爆破单元'
  const wrapper = mount(ItemButtonVue, {
    props: {
      img
    }
  })
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted('ItemButton-active')).toBeTruthy()
  expect(wrapper.emitted('ItemButton-active')[0][0]).toBe(img)
})
