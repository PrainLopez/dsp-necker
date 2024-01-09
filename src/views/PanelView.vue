<script setup>
import { usePanelStore } from '@/stores/panel'
import { computed } from 'vue'
import { recipe } from '@/assets/recipeData/vanilla/Recipes'
import { storeToRefs } from 'pinia'

const panelStore = usePanelStore()

const {
  selectedItem,
  selectedSchema,
  selectedUnit,
  inputAmount,
  facilitySelection,
  proliferatorAction,
  proliferatorSelection
} = storeToRefs(panelStore)
</script>

<template>
  <div>
    <h1>Panel</h1>
    <p>{{ item }}</p>
    <p>{{ unit }}</p>
    <p>{{ schemaOptions }}</p>
  </div>
</template>

<style scoped></style>
