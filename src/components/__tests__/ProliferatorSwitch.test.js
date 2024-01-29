import { mount } from '@vue/test-utils'
import { test } from 'vitest'
import ProliferatorSwitchVue from '../ProliferatorSwitch.vue'

test('render the proliferator options correctly', () => {
  const wrapperSpeed = mount(ProliferatorSwitchVue, {
    props: {
      disabled: false,
      option: true
    }
  })
  expect(wrapperSpeed.find('span#speed').isVisible()).toBe(true)

  // const wrapperYield = mount(ProliferatorSwitchVue, {
  //   props: {
  //     disabled: false,
  //     option: false
  //   }
  // })
  // expect(wrapperYield.find('span#yield').isVisible()).toBe(true)
})
