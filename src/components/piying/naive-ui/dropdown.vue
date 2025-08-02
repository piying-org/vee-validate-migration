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
import { NSelect } from 'naive-ui'
const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })
const props = withDefaults(defineProps<{ options?: any[]; optionConvert?: OptionConvert }>(), {
  options: () => [],
  optionConvert: (props) => {
    return { ...DefaultOptionConvert, ...props.optionConvert }
  },
})
const resolvedOptions = computed(() => {
  return transformOptions(props.options, props.optionConvert) as any[]
})
</script>
<template>
  <NSelect
    :value="value"
    :onUpdate:value="valueChange"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    :options="resolvedOptions"
  ></NSelect>
</template>

<style scoped></style>
