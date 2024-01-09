<script setup>
const props = defineProps({
  img: {
    type: String,
    required: false
  },
  action: {
    type: Function,
    required: true
  }
})

const excecute = {
  if(img) {
    return action(img)
  }
}
</script>

<template>
  <button :disabled="!img" :title="img" @click="excecute">
    <img
      v-if="img"
      :src="`src/assets/dsp-icon/${img}.webp`"
      :alt="img"
      width="40px"
      height="40px"
    />
  </button>
</template>

<style scoped>
button {
  width: 50px;
  height: 50px;
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
