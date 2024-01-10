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
    appliedSchemas
    // actions
  }
})
