<script setup>
import ItemWithNum from './ItemWithNum.vue'

const props = defineProps({
  schema: {
    type: Object,
    required: true
  }
})

const normaSchemaFacilities = [
  '冶炼设备',
  '制造台',
  '精炼设备',
  '化工设备',
  '粒子对撞机',
  '科研设备'
]
</script>

<template>
  <span v-if="normaSchemaFacilities.includes(props.schema.设施)">
    <ItemWithNum
      v-for="[material, amount] in Object.entries(schema.原料)"
      :key="material"
      :item="[material, amount]"
    />
    <span class="schema-arrow">
      ⟶
      <span class="number">{{ `${schema.时间} s` }}</span>
    </span>
  </span>
</template>

<style scoped>
.schema-arrow {
  font-size: 32px;
  color: whitesmoke;
  position: relative;
  margin: 0 5px;
}
.number {
  font-size: 15px;
  position: relative;
  text-align: center;
  width: 100%;
  margin: 0 5px;
}
</style>
