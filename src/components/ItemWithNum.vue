<script setup>
const props = defineProps({
  item: {
    type: String,
    required: true
  },
  num: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <span style="position: relative">
    <img
      :src="`src/assets/dsp-icon/${props.item}.webp`"
      :alt="props.item"
    />
    <span v-if="props.num > 0" class="amount-number">{{
      props.num
    }}</span>
  </span>
</template>

<style scoped>
img {
  width: 35px;
  height: 35px;
  margin: 0 0.2rem;
}
.amount-number {
  font-size: 0.9rem;
  color: whitesmoke;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
