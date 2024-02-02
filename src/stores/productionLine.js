import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductionLineStore = defineStore(
  'productionLine',
  () => {
    const lineList = ref([])

    function addLine() {
      const newLine = {
        id: Date.now(),
        name: 'New Line',
        items: []
      }
    }
  }
)
