<script setup>
import ItemWithNum from './ItemWithNum.vue'

const props = defineProps({
  schema: {
    type: Object,
    required: true
  }
})

const normalSchemaFacilities = [
  '冶炼设备',
  '制造台',
  '精炼设备',
  '化工设备',
  '粒子对撞机',
  '科研设备'
]
</script>

<template>
  <span v-if="normalSchemaFacilities.includes(props.schema.设施)">
    <ItemWithNum
      v-for="[material, amount] in Object.entries(schema.原料)"
      :key="material"
      :item="[material, amount]"
    />
    <span class="schema-arrow">
      ⟶
      <span class="arrow-number">{{ `${schema.时间} s` }}</span>
    </span>
  </span>
  <span v-else-if="props.schema.设施 === '轻型工业机甲'">
    <!-- FIXME: need more asset here -->
    <!-- <img src="src\assets\dsp-icon\护卫舰.webp" alt="轻型工业机甲" /> -->
  </span>
  <span>
    <ItemWithNum
      v-for="[material, amount] in Object.entries(schema.产物)"
      :key="material"
      :item="[material, amount]"
    />
  </span>
</template>

<style scoped>
.schema-arrow {
  font-size: 2.5rem;
  color: whitesmoke;
  position: relative;
  line-height: 25px;
}
.arrow-number {
  font-size: 0.9rem;
  position: absolute;
  text-align: center;
  width: 100%;
  margin: 0 5px;
  right: 0;
  top: 3px;
}
</style>
