<script setup>
const props = defineProps({
  item: {
    type: Array, // ["铁块", 1]
    required: true
  }
})
</script>

<template>
  <span>
    <img
      :src="`src/assets/dsp-icon/${props.item[0]}.webp`"
      :alt="props.item[0]"
    />
    <span>{{ props.item[1] }}</span>
  </span>
</template>

<style scoped>
img {
  width: 35px;
  height: 35px;
}
span {
  font-size: 12px;
  color: whitesmoke;
}
</style>
