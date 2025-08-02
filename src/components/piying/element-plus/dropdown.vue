<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { computed, watch } from 'vue'
import { vModelDynamic } from 'vue'
import {
  DefaultOptionConvert,
  getRadioIndex,
  transformOptions,
  type OptionConvert,
} from '../util/options'
import { ElSelect, ElOption } from 'element-plus'
const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })
const props = withDefaults(defineProps<{ options?: any[]; optionConvert?: OptionConvert }>(), {
  options: () => [],
  optionConvert: (props) => {
    return { ...DefaultOptionConvert, ...props.optionConvert }
  },
})
const resolvedOptions = computed(() => {
  return transformOptions(props.options, props.optionConvert)
})

</script>
<template>
  <el-select
    v-model="value"
    @update:modelValue="valueChange"
    @blur="touchedChange"
    v-bind:disabled="disabled"
  >
    <el-option
      v-for="(item, index) in resolvedOptions"
      :key="index"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<style scoped></style>
