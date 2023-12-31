import { mount } from '@vue/test-utils'
import ItemButtonVue from '../ItemButton.vue'

test('render the image correctly when given image name', async () => {
  const wrapper = mount(ItemButtonVue, {
    props: {
      img: '爆破单元.webp'
    }
  })
  expect(wrapper.find('img').exists()).toBe(true)
  expect(wrapper.find('img').attributes('src')).toBe('/dsp-icon/爆破单元.webp')
  expect(wrapper.find('img').attributes('alt')).toBe('爆破单元')
  expect(wrapper.find('img').attributes('width')).toBe('50px')
})

test('prop.width', async () => {
  const wrapper = mount(ItemButtonVue, {
    props: {
      img: '爆破单元.webp',
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
      img: '爆破单元.webp'
    }
  })
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted().click).toBeTruthy()
})
