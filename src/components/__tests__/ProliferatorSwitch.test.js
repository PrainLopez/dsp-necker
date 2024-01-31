import { mount } from '@vue/test-utils'
import { test } from 'vitest'
import ProliferatorSwitchVue from '../ProliferatorSwitch.vue'
import { expect } from 'vitest'

test('clicking button should switch text', async () => {
  const wrapper = mount(ProliferatorSwitchVue, {
    props: {
      modelValue: true,
      options: ['Yes', 'No'],
      'onUpdate:modelValue': (e) =>
        wrapper.setProps({ modelValue: e })
    }
  })
  expect(wrapper.find('span#yield').isVisible()).toBeTruthy()
  await wrapper.find('input').setValue(false)
  expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  expect(wrapper.props('modelValue')).toBe(false)
  expect(wrapper.find('span#yield').isVisible()).toBeTruthy()
  // fixme: 2 text always visible
})

test('disable input when props.disabled is true', async () => {
  const wrapper = mount(ProliferatorSwitchVue, {
    props: {
      modelValue: true,
      options: [],
      'onUpdate:modelValue': (e) =>
        wrapper.setProps({ modelValue: e })
    }
  })
  expect(wrapper.find('input').attributes('disabled')).toBeTruthy()
})
