<script setup>
const data = ref('1')
</script>

<template>
  <div>
    <textarea readonly="true" v-model="data">Input grid data</textarea>
    <button>Convert</button>
    <div>
      <pre></pre>
    </div>
  </div>
</template>

<style scoped></style>
