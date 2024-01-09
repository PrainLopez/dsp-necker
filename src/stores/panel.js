import { defineStore } from 'pinia'
import recipes from '@/assets/recipeData/vanilla/Recipes.json'
import { ref, computed } from 'vue'

export const usePanelStore = defineStore('panel', () => {
  const selectedItem = ref('宇宙矩阵')
  const selectedSchema = ref('')
  const selectedUnit = ref('')
  const inputAmount = ref(0)
  const facilitySelection = ref('')
  const proliferatorAction = ref('')
  const proliferatorSelection = ref('')

  const appliedSchemas = computed(() =>
    recipes.recipe.filter((it) =>
      Object.keys(it.产物).includes(selectedItem.value)
    )
  )

  function setSelectedItem(value) {
    selectedItem.value = value
  }

  function setSelectedSchema(value) {
    selectedSchema.value = value
  }

  function setUnitSelection(value) {
    selectedUnit.value = value
  }

  function setInputAmount(value) {
    inputAmount.value = value
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
    // states
    selectedItem,
    selectedSchema,
    selectedUnit,
    inputAmount,
    facilitySelection,
    proliferatorAction,
    proliferatorSelection,
    // getters
    appliedSchemas,
    // actions
    setSelectedItem,
    setSelectedSchema,
    setUnitSelection,
    setInputAmount,
    setFacilitySelection,
    setProliferatorAction,
    setProliferatorSelection
  }
})
