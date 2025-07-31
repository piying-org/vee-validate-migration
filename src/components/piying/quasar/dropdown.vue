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
import { QSelect } from 'quasar'

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
function valueChagne2(value: any) {
  valueChange?.(value.value)
}
</script>
<template>
  <q-select
    v-model="value"
    @update:modelValue="valueChagne2"
    @blur="touchedChange"
    :options="resolvedOptions"
    v-bind:disabled="disabled ? '' : undefined"
  ></q-select>
</template>

<style scoped></style>
