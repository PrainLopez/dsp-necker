<script setup>
import { usePanelStore } from '@/stores/panel'
import { storeToRefs } from 'pinia'
import ItemButton from '@/components/ItemButton.vue'
import SchemaBox from '@/components/SchemaBox.vue'
import InputBox from '@/components/InputBox.vue'

const panelStore = usePanelStore()

const {
  // states
  selectedItem,
  selectedSchema,
  selectedUnit,
  inputAmount,
  selectedFacility,
  proliferatorOption,
  proliferatorSelection,
  // getters
  appliedSchemas,
  appliedFacilities,
  appliedProliferators
} = storeToRefs(panelStore)
</script>

<template>
  <div class="panel-container container-first-row">
    <span class="panel-section-horizontal">
      <ItemButton title="选择产物">
        <img
          v-if="selectedItem"
          :src="`src/assets/dsp-icon/${selectedItem}.webp`"
          :alt="selectedItem"
          width="40px"
          height="40px"
        />
      </ItemButton>
    </span>
    <span class="panel-section-horizontal">
      <ItemButton
        v-for="(schema, index) in appliedSchemas"
        :key="index"
        :title="schema.设施"
        :class="index === selectedSchema ? 'selected' : ''"
        @item-button-active="selectedSchema = index"
      >
        <SchemaBox :schema="schema" />
      </ItemButton>
    </span>
    <span class="panel-section-vertical" flex-flow="column">
      <InputBox v-model="inputAmount" :unit="selectedUnit" />
      <ItemButton
        title="选择产量"
        :class="'每分钟产量' === selectedUnit ? 'selected' : ''"
        @item-button-active="selectedUnit = '每分钟产量'"
      >
        <span class="text">每分钟产量</span>
      </ItemButton>
      <ItemButton
        title="选择产量"
        :class="'设备数量' === selectedUnit ? 'selected' : ''"
        @item-button-active="selectedUnit = '设备数量'"
      >
        <span class="text">设备数量</span>
      </ItemButton>
    </span>
  </div>
  <div class="panel-container container-second-row">
    <span class="panel-section-horizontal">
      <ItemButton
        v-for="(facility, index) in appliedFacilities"
        :key="index"
        :title="facility.名称"
        :class="index === selectedFacility ? 'selected' : ''"
        @item-button-active="selectedFacility = index"
      >
        <img
          v-if="facility"
          :src="`src/assets/dsp-icon/${facility.名称}.webp`"
          :alt="facility.名称"
          width="40px"
          height="40px"
        />
      </ItemButton>
    </span>
    <span class="panel-section-horizontal">
      <ItemButton
        v-for="(proliferator, index) in appliedProliferators"
        :key="index"
        :title="proliferator.增产剂名称"
        :class="index === proliferatorSelection ? 'selected' : ''"
        @item-button-active="proliferatorSelection = index"
      >
        <img
          v-if="proliferator.增产剂名称 !== '不使用增产剂'"
          :src="`src/assets/dsp-icon/${proliferator.增产剂名称}.webp`"
          :alt="proliferator.增产剂名称"
          width="40px"
          height="40px"
        />
        <span v-else height="40px" width="40px"></span>
      </ItemButton>
    </span>
  </div>
</template>

<style scoped>
.panel-container {
  display: grid;
  min-height: 100px;
  margin: 1rem;
}

.container-first-row {
  grid-template-columns: 1fr 9fr 2fr;
}

.container-second-row {
  grid-template-columns: 4fr 3fr 1fr;
}

.panel-section-horizontal {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.panel-section-vertical {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
}

span.text {
  color: whitesmoke;
  font-size: 1rem;
  margin: 0 0.3rem;
}
</style>
