import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import recipes from '@/assets/recipeData/vanilla/Recipes.json'
import facilities from '@/assets/recipeData/vanilla/Facilities.json'
import proliferators from '@/assets/recipeData/vanilla/Proliferators.json'

export const usePanelStore = defineStore('panel', () => {
  const selectedItem = ref('宇宙矩阵')
  const selectedUnit = ref('产量')
  const inputAmount = ref(60)

  const appliedSchemas = computed(() =>
    recipes.recipe.filter((it) =>
      Object.keys(it.产物).includes(selectedItem.value)
    )
  )
  const selectedSchema = ref(appliedSchemas.value[0])

  const appliedFacilities = computed(
    () => facilities.get(selectedItem.value) // fixme
  )
  const facilitySelection = ref(appliedFacilities.value[0])

  const appliedproliferators = computed(
    () => proliferators.proliferator_data
  )
  const proliferatorAction = ref('增产')
  const proliferatorSelection = ref(appliedproliferators.value[0])

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
    appliedFacilities
    // actions
  }
})
