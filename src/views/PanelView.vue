<script setup>
import { usePanelStore } from '@/stores/panel'
import { storeToRefs } from 'pinia'
import ItemButton from '@/components/ItemButton.vue'
import SchemaBox from '@/components/SchemaBox.vue'

const panelStore = usePanelStore()

const {
  // states
  selectedItem,
  selectedSchema,
  selectedUnit,
  inputAmount,
  selectedFacility,
  proliferatorAction,
  proliferatorSelection,
  // getters
  appliedSchemas,
  appliedFacilities,
  appliedProliferators
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
    <ItemButton
      v-for="(schema, index) in appliedSchemas"
      :key="index"
      :title="schema.设施"
      :selected="index === selectedSchema"
      @item-button-active="selectedSchema = index"
    >
      <SchemaBox :schema="schema" />
    </ItemButton>
  </div>
</template>

<style scoped></style>
