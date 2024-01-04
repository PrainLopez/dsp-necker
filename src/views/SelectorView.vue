<script setup>
import ItemButton from '@/components/ItemButton.vue'
import gridData from '@/assets/SelectorLayout'
</script>

<template>
  <div class="selectorBox">
    <div v-for="(row, rowIndex) in gridData.item" :key="rowIndex">
      <ItemButton
        v-for="(grid, gridIndex) in row"
        :key="gridIndex"
        :img="grid"
      />
    </div>
  </div>
</template>

<style scoped>
nav.selectorBox {
  min-width: 850px;
  min-height: 500px;
}
</style>
