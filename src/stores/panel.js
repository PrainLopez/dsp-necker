import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
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
  const selectedSchema = ref(0)
  watch(appliedSchemas, () => {
    selectedSchema.value = 0
  })

  const appliedFacilities = computed(
    () => facilities[appliedSchemas.value[selectedSchema.value].设施]
  )
  const selectedFacility = ref(0)
  watch(appliedFacilities, () => {
    selectedFacility.value = 0
  })

  const appliedProliferators = computed(
    () => proliferators.proliferator_data
  )
  const proliferatorOption = ref('增产')
  const proliferatorSelection = ref(appliedProliferators.value[0])

  return {
    // states
    selectedItem,
    selectedSchema,
    selectedUnit,
    inputAmount,
    selectedFacility,
    proliferatorOption,
    proliferatorSelection,
    // getters
    appliedSchemas,
    appliedFacilities,
    appliedProliferators
    // actions
  }
})
