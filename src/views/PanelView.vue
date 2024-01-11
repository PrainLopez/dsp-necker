<script setup>
import { usePanelStore } from '@/stores/panel'
import { storeToRefs } from 'pinia'
import ItemButton from '@/components/ItemButton.vue'
import ItemRadioGroup from '@/components/ItemRadioGroup.vue'

const panelStore = usePanelStore()

const {
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
} = storeToRefs(panelStore)
</script>

<template>
  <div>
    <ItemButton :img="selectedItem" />
  </div>
  <div>
    <ItemRadioGroup :list="appliedSchemas" />
  </div>
</template>

<style scoped></style>
