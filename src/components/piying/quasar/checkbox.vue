<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { vModelDynamic, watch } from 'vue'
import { QCheckbox } from 'quasar'

const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })

function valueChagne2(value: any) {
  valueChange?.(value)
}
</script>

<template>
  <q-checkbox
    @update:modelValue="valueChagne2"
    v-model="value"
    v-bind:disabled="disabled ? '' : undefined"
    @blur="touchedChange"
  ></q-checkbox>
</template>

<style scoped></style>
