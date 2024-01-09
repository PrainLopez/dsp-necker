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

test('prop.width', async () => {
  const wrapper = mount(ItemButtonVue, {
    props: {
      img: '爆破单元',
      width: '100px'
    }
  })
  expect(wrapper.find('img').attributes('width')).toBe('100px')
})

test('button disabled and img not rendered when props.img empty', async () => {
  const wrapper = mount(ItemButtonVue, {})
  expect(wrapper.find('img').exists()).toBe(false)
  expect(wrapper.find('button:disabled').exists()).toBe(true)
})

test('button onclick', async () => {
  const wrapper = mount(ItemButtonVue, {
    props: {
      img: '爆破单元'
    }
  })
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted().click).toBeTruthy()
})

test('button function', async () => {
  const mock = vi.fn((param) => param)
  const wrapper = mount(ItemButtonVue, {
    props: {
      img: '爆破单元',
      action: mock
    }
  })
  await wrapper.find('button').trigger('click')
  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveReturnedWith('爆破单元')
})
