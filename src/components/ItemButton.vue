<script setup>
const props = defineProps({
  img: {
    type: String,
    required: false
  },
  width: {
    type: String,
    default: '40px'
  },
  action: {
    type: Function,
    required: false
  }
})
</script>

<template>
  <button
    :disabled="!img"
    :title="img"
    @click="action(img)"
    :width="width + 10"
    :height="height + 10"
  >
    <img
      v-if="img"
      :src="`src/assets/dsp-icon/${img}.webp`"
      :alt="img"
      :width="width"
      :height="width"
    />
  </button>
</template>

<style scoped>
button {
  background-color: #364450;
  padding: 5px;
  border: none;
  margin: 1px;
}

button:enabled:hover,
button:enabled:active {
  background: linear-gradient(-45deg, #364450 5px, #326b77 0);
}

button:enabled:active {
  outline: 2px solid #a5f1ff;
  border-radius: 1px;
  background: linear-gradient(-45deg, #a5f1ff 5px, #326b77 0);
}
</style>
