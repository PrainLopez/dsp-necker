<script setup>
import { ref } from 'vue'
import ItemWithNum from './ItemWithNum.vue'

const props = defineProps({
  schema: {
    type: Object,
    required: true
  }
})

const SchemaFacilityClass = {
  轻型工业机甲: '轻型工业机甲',
  黑雾残骸: '能量碎片',
  采矿设备: '采矿机',
  抽水设备: '抽水站',
  抽油设备: '原油萃取站',
  巨星采集: '轨道采集器',
  射线接收站: '射线接收站',
  冶炼设备: '',
  制造台: '',
  精炼设备: '',
  化工设备: '',
  粒子对撞机: '',
  科研设备: '',
  分馏设备: '分馏塔',
  充电设备: '能量枢纽'
}

const schemaProperty = ref(SchemaFacilityClass[props.schema.设施])
</script>

<template>
  <span v-if="!schemaProperty">
    <ItemWithNum
      v-for="[material, amount] in Object.entries(schema.原料)"
      :key="material"
      :item="[material, amount]"
    />
  </span>
  <span v-else-if="props.schema.设施 === '分馏塔'">
    <img :src="'src/assets/dsp-icon/分馏塔.webp'" alt="分馏设备" />
  </span>
  <span v-else-if="props.schema.设施 === '能量枢纽'">
    <img :src="'src/assets/dsp-icon/能量枢纽.webp'" alt="充电设备" />
  </span>
  <span v-else>
    <!-- FIXME: need more asset for 轻型工业机甲.webp -->
    <img
      :src="`src/assets/dsp-icon/${schemaProperty}.webp`"
      :alt="schema.设施"
    />
  </span>

  <span class="schema-arrow">
    ⟶
    <span v-if="!schemaProperty" class="arrow-number">{{
      `${schema.时间} s`
    }}</span>
    <!-- TODO: 采集速率显示 -->
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

img {
  width: 35px;
  height: 35px;
  margin: 0 0.3rem;
}
</style>
