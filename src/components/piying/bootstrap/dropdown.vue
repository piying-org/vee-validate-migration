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
import { BFormSelect } from 'bootstrap-vue-next'

const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
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
  <BFormSelect
    v-model="value"
    @update:modelValue="valueChange"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    :options="resolvedOptions"
    value-field="value"
    text-field="label"
  ></BFormSelect>
</template>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
</style>
