<script setup>
import { usePanelStore } from '@/stores/panel'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import ItemButton from '@/components/ItemButton.vue'

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
    <ItemButton width="50" , :img="selectedItem" />
  </div>
</template>

<style scoped></style>
