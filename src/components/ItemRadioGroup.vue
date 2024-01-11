<script setup>
import ItemButton from './ItemButton.vue'
import { usePanelStore } from '@/stores/panel'
import { watch } from 'vue'

defineProps({
  list: {
    type: Array,
    required: true
  },
  action: {
    type: Function,
    required: true
  }
})

const panelStore = usePanelStore()

watch(
  () => panelStore,
  (count, prevCount) => {}
)
</script>

<template>
  <div>
    <ItemButton v-for="item of list" :key="item.id" :img="item" />
  </div>
</template>

<style scoped></style>
