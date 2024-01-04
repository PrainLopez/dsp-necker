<script setup>
const props = defineProps({
  img: {
    type: String,
    required: false
  },
  width: {
    type: String,
    default: '40px'
  }
})
</script>

<template>
  <button :disabled="!img" :title="img">
    <img
      v-if="img"
      :src="`/dsp-icon/${img}.webp`"
      :alt="img"
      :width="width"
      :height="width"
    />
  </button>
</template>

<style scoped>
button {
  height: 50px;
  width: 50px;
  background-color: var(--ItemButton-color);
  padding: 5px;
  border: none;
  margin: 1px;
}

button:enabled:hover,
button:enabled:active {
  background: linear-gradient(
    -45deg,
    var(--ItemButton-color) 5px,
    var(--ItemButton-color-active) 0
  );
}

button:enabled:active {
  outline: 2px solid var(--ItemButton-color-border);
  border-radius: 1px;
}
</style>
