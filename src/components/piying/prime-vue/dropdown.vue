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
import Dropdown from 'primevue/dropdown'

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
watch(value, (value) => {
  valueChange?.(value)
})
</script>
<template>
  <Dropdown
    v-model="value"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    :options="resolvedOptions"
    optionLabel="label"
    optionValue="value"
  ></Dropdown>
</template>

<style scoped>
@import 'primeicons/primeicons.css';
</style>
