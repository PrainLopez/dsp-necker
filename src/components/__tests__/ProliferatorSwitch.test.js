import { mount } from '@vue/test-utils'
import { test } from 'vitest'
import ProliferatorSwitchVue from '../ProliferatorSwitch.vue'
import { expect } from 'vitest'

test('clicking button should switch text', async () => {
  const wrapper = mount(ProliferatorSwitchVue, {
    props: {
      modelValue: true,
      'onUpdate:modelValue': (e) =>
        wrapper.setProps({ modelValue: e })
    }
  })
  expect(wrapper.find('span#yield').isVisible()).toBeTruthy()
  expect(wrapper.find('span#speed').text()).toBeFalsy()
  await wrapper.find('input').setValue(false)
  expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  expect(wrapper.props('modelValue')).toBe(false)
  expect(wrapper.find('span#yield').isVisible()).toBeTruthy()
})
