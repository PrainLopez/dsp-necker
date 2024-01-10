<script setup>
import { usePanelStore } from '@/stores/panel'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import ItemButton from '@/components/ItemButton.vue'
import ItemRadioSelect from '@/components/ItemRadioSelect.vue'

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
    <ItemRadioSelect :list="appliedSchemas" />
  </div>
</template>

<style scoped></style>
