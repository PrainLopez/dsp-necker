<script setup>
import ItemButton from '@/components/ItemButton.vue'
import gridData from '@/assets/SelectorLayout'
import { usePanelStore } from '@/stores/panel'

const panelStore = usePanelStore()
</script>

<template>
  <div class="selectorCanvas">
    <div
      class="selectorRow"
      v-for="(row, rowIndex) in gridData.item"
      :key="rowIndex"
    >
      <ItemButton
        v-for="grid in row"
        :key="grid.id"
        :title="grid"
        @item-button-active="
          (item) => (panelStore.selectedItem = item)
        "
      >
        <img
          v-if="grid"
          :src="`src/assets/dsp-icon/${grid}.webp`"
          :alt="grid"
          width="40px"
          height="40px"
        />
        <div
          v-else
          height="40px"
          width="40px"
          display="inline-block"
        ></div>
      </ItemButton>
    </div>
  </div>
</template>

<style scoped>
div.selectorRow {
  display: grid;
  grid-auto-flow: column;
}

div.selectorCanvas {
  max-width: 728px;
  display: grid;
  grid-template-rows: repeat(9, 1fr);
}
</style>
