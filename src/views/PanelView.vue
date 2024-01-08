<script setup>
import { usePanelStore } from '@/stores/panel'
import { computed } from 'vue'
import { recipe } from '@/assets/recipeData/vanilla/Recipes'
import { storeToRefs } from 'pinia'

const panelStore = usePanelStore()
panelStore.setItem('宇宙矩阵')
const item = storeToRefs(panelStore.item)
panelStore.setUnit('设备数')
const unit = storeToRefs(panelStore.unit)
const schemaOptions = computed(recipe)
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
