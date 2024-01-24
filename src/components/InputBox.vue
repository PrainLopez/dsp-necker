<script setup>
import { ref } from 'vue'

const props = defineProps({
  unit: {
    type: String,
    required: true
  }
})
const amount = defineModel({ type: Number, default: 60 })

const selected = ref(false)

const enableScroll = () => {
  selected.value = true
}

const disableScroll = () => {
  selected.value = false
}

const numScroll = (event) => {
  if (selected.value) {
    const scale = event.deltaY > 0 ? -1 : 1
    // deprecated method for DOM manipulation conflit
    // amount.value += scale * (props.unit === 'perminute' ? 30 : 1)
    // if (amount.value < 0) {
    //   await nextTick() //needed for DOM manipulation conflit
    //   amount.value = 0
    // }
    const newValue =
      amount.value + scale * (props.unit === '每分钟产量' ? 30 : 1)
    if (newValue < 0) {
      amount.value = 0
    } else {
      amount.value = newValue
    }
  }
}
</script>

<template>
  <input
    v-model="amount"
    @focusin="enableScroll"
    @focusout="disableScroll"
    @wheel.stop.prevent="numScroll"
    type="number"
    min="0"
  />
</template>

<style scoped>
input {
  height: 2rem;
  width: 100px;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  border: none;
  padding: 1px 7px;
  background-color: #326b77;
  color: whitesmoke;
}

input:focus {
  outline: 2px solid #a5f1ff;
  border-radius: 1px;
}
</style>
