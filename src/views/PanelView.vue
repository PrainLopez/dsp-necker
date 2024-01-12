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
    <ItemButton title="选择产物">
      <img
        v-if="selectedItem"
        :src="`src/assets/dsp-icon/${selectedItem}.webp`"
        :alt="selectedItem"
        width="40px"
        height="40px"
      />
    </ItemButton>
  </div>
  <div>
    <ItemRadioGroup :list="appliedSchemas" />
  </div>
</template>

<style scoped></style>
