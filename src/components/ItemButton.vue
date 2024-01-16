<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['item-button-active'])

function clickHandler() {
  emit('item-button-active', props.title)
}
</script>

<template>
  <button
    :disabled="!props.title"
    :title="props.title ?? ''"
    @click="clickHandler"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  min-width: 50px;
  max-height: 50px;
  background-color: #364450;
  padding: 5px;
  border: none;
  margin: 1px;
}

button:where(:enabled:hover) {
  background: linear-gradient(-45deg, #364450 5px, #326b77 0);
}

button:enabled:active,
button.selected {
  outline: 2px solid #a5f1ff;
  border-radius: 1px;
  background: linear-gradient(-45deg, #a5f1ff 5px, #326b77 0);
}
</style>
