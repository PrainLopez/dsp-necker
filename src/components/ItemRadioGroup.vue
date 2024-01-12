<script setup>
import ItemButton from './ItemButton.vue'
import { usePanelStore } from '@/stores/panel'
import { watch } from 'vue'
import SchemaBox from './SchemaBox.vue'

defineProps({
  list: {
    type: Array,
    required: true
  }
})

const panelStore = usePanelStore()
</script>

<template>
  <div></div>
</template>

<style scoped></style>
