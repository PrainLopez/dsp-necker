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
      </ItemButton>
    </div>
  </div>
</template>

<style scoped>
div.selectorRow {
  width: calc(14 * 52px);
}

div.selectorCanvas {
  width: calc(14 * 52px);
  height: calc(9 * 52px);
}
</style>
