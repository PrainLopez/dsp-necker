import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import recipes from '@/assets/recipeData/vanilla/Recipes.json'
import facilities from '@/assets/recipeData/vanilla/Facilities.json'
import proliferators from '@/assets/recipeData/vanilla/Proliferators.json'

export const usePanelStore = defineStore('panel', () => {
  const selectedItem = ref('宇宙矩阵')
  const selectedUnit = ref('每分钟产量')
  const inputAmount = ref(60)

  const appliedSchemas = computed(() =>
    recipes.recipe.filter((it) =>
      Object.keys(it.产物).includes(selectedItem.value)
    )
  )
  const schemaSelector = ref(0)
  watch(
    // This was originally appliedSchemas here,
    // while the watcher here can't flush before computed() update of selecetdSchema
    appliedSchemas,
    () => {
      schemaSelector.value = 0
    },
    // not needed for selectedItem
    { deep: true }
  )
  const selectedSchema = computed(
    () => appliedSchemas.value[schemaSelector.value]
  )

  const appliedFacilities = computed(
    () => facilities[selectedSchema.value.设施]
  )
  const facilitySelector = ref(0)
  watch(
    appliedFacilities,
    () => {
      facilitySelector.value = 0
    },
    { deep: true }
  )

  const appliedProliferators = ref(proliferators.proliferator_data)
  const proliferatorSelector = ref(0)

  const appliedProliferatorOptions = computed(() => {
    const proliferatorOptions = []
    if (selectedSchema.value.加速) {
      proliferatorOptions.push('加速')
    }
    if (selectedSchema.value.增产) {
      proliferatorOptions.push('增产')
    }

    return proliferatorOptions
  })
  const proliferatorOption = ref(true)
  watch(
    appliedProliferatorOptions,
    () => {
      proliferatorOption.value = true
    },
    { deep: true }
  )

  return {
    // states
    selectedItem,
    schemaSelector,
    selectedUnit,
    inputAmount,
    facilitySelector,
    proliferatorSelector,
    appliedProliferators,
    proliferatorOption,
    // getters
    appliedSchemas,
    appliedFacilities,
    appliedProliferatorOptions,
    selectedSchema
    // actions
  }
})
