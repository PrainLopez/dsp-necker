<script setup>
import ItemButton from './ItemButton.vue'
import { usePanelStore } from '@/stores/panel'

defineProps({
  list: {
    type: Array,
    required: true
  },
  state: {
    type: ref,
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
    <ItemButton
      v-for="item of list"
      :key="item.id"
      :img="item"
      :action="action"
    />
  </div>
</template>

<style lang="scss" scoped></style>
