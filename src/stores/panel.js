import { defineStore } from 'pinia'

export const usePanelStore = defineStore('panel', () => {
  const selectedItem = ref('')
  const unitSelection = ref('')
  const inputAmount = ref(0)
  const facilityClass = ref('')
  const facilitySelection = ref('')
  const proliferatorAction = ref('')
  const proliferatorSelection = ref('')
})
