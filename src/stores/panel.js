import { defineStore } from 'pinia'

export const usePanelStore = defineStore('panel', () => {
  const selectedItem = ref('')
  const unitSelection = ref('')
  const inputAmount = ref(0)
  const facilityClass = ref('')
  const facilitySelection = ref('')
  const proliferatorAction = ref('')
  const proliferatorSelection = ref('')

  function setSelectedItem(value) {
    selectedItem.value = value
  }

  function setUnitSelection(value) {
    unitSelection.value = value
  }

  function setInputAmount(value) {
    inputAmount.value = value
  }

  function setFacilityClass(value) {
    facilityClass.value = value
  }

  function setFacilitySelection(value) {
    facilitySelection.value = value
  }

  function setProliferatorAction(value) {
    proliferatorAction.value = value
  }

  function setProliferatorSelection(value) {
    proliferatorSelection.value = value
  }

  return {
    // state
    selectedItem,
    unitSelection,
    inputAmount,
    facilityClass,
    facilitySelection,
    proliferatorAction,
    proliferatorSelection,
    // action
    setSelectedItem,
    setUnitSelection,
    setInputAmount,
    setFacilityClass,
    setFacilitySelection,
    setProliferatorAction,
    setProliferatorSelection
  }
})
