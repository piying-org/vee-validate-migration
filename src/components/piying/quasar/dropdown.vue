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
  <q-select
    v-model="value"
    @update:modelValue="valueChange"
    @blur="touchedChange"
    :options="resolvedOptions"
    v-bind:disabled="disabled ? '' : undefined"
  ></q-select>
</template>

<style scoped></style>
