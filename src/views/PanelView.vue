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
  proliferatorOption,
  proliferatorSelection,
  // getters
  appliedSchemas,
  appliedFacilities,
  appliedProliferators
} = storeToRefs(panelStore)
</script>

<template>
  <div class="panel-container">
    <div class="panel-section">
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
    <div class="panel-section">
      <ItemButton
        v-for="(schema, index) in appliedSchemas"
        :key="index"
        :title="schema.设施"
        :class="index === selectedSchema ? 'selected' : ''"
        @item-button-active="selectedSchema = index"
      >
        <SchemaBox :schema="schema" />
      </ItemButton>
    </div>
  </div>
</template>

<style scoped>
.panel-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100px;
}

.panel-section {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
