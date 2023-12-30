<script setup>
const props = defineProps({
  img: {
    type: String,
    required: false
  },
  width: {
    type: String,
    default: '50px'
  }
})
</script>

<template>
  <button :disabled="!img">
    <img
      v-if="img"
      :src="'/dsp-icon/' + img"
      :alt="img.split('.').slice(0, -1).join('.')"
      :width="width"
      :height="width"
    />
  </button>
</template>

<style scoped>
button,
button:disabled,
button:disabled:hover {
  height: 60px;
  width: 60px;
  background-color: #364450;
  padding: 5px;
  border: 0px;
  margin: 1px;
}

button:hover {
  background-color: #326b77;
}

button:active {
  background-color: #326b77;
  outline: 2px solid #a5f1ff;
  border-radius: 2px;
}

div.placeholder {
  width: 50px;
  height: 50px;
}
</style>
