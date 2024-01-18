<script setup>
const amount = defineModel()
amount.value = 60

const numScroll = (event) => {
  if (event.deltaY > 0) {
    amount.value -= 5
  } else {
    amount.value += 5
  }
}
</script>

<template>
  <input v-model="amount" @wheel="numScroll" type="number" />
</template>

<style scoped>
input {
  height: 2rem;
  width: 100px;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  padding: 1px 7px;
}
</style>
