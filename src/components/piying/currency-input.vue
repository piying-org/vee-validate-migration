<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { computed, ref, vModelDynamic, watchEffect } from 'vue'
import numbro from 'numbro'
let dInputs = defineProps<{ options: any }>()
const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })
let displayValue = computed(() => {
  return `${dInputs.options.currency}${numbro(value.value).format({ thousandSeparated: true })}`
})
let inputValue = computed(() => {
  return `${value.value}`
})
let isBlur = ref(true)
function blurChange() {
  touchedChange()
  isBlur.value = true
}
function valueChange2(value: any) {
  return valueChange(+value)
}
function inputChange(event: KeyboardEvent) {
  let currentValue = event.key

  if (currentValue.length == 1 && Number.isNaN(+currentValue)) {
    event.preventDefault()
  }
  return true
}
</script>
<template>
  <input
    type="text"
    class="input"
    v-model-dynamic="isBlur ? displayValue : inputValue"
    :onUpdate:modelValue="valueChange2"
    v-bind:disabled="disabled"
    @focus="isBlur = false"
    @blur="blurChange"
    @keydown="inputChange"
  />
</template>

<style></style>
