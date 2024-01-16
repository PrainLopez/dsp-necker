<script setup>
import { usePanelStore } from '@/stores/panel'

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
