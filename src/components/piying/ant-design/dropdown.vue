<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { computed } from 'vue'
import {
  DefaultOptionConvert,
  transformOptions,
  type OptionConvert,
} from '../util/options'
import { Select } from 'ant-design-vue'

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
  <Select
    :value="value"
    :onUpdate:value="valueChange"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    :options="resolvedOptions"
  ></Select>
</template>

<style scoped></style>
