<script setup>
const props = defineProps({
  item: {
    type: Array, // ["铁块", 1]
    required: true
  }
})
</script>

<template>
  <span style="position: relative">
    <img
      :src="`src/assets/dsp-icon/${props.item[0]}.webp`"
      :alt="props.item[0]"
    />
    <span class="amount-number">{{ props.item[1] }}</span>
  </span>
</template>

<style scoped>
img {
  width: 30px;
  height: 30px;
  margin: 0 0.3rem;
}
.amount-number {
  font-size: 0.9rem;
  color: whitesmoke;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
