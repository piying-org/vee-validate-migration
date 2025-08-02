<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { computed, ref, vModelDynamic, watchEffect } from 'vue'
import numbro from 'numbro'
const dInputs = defineProps<{ options: any }>()
const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })
const displayValue = computed(() => {
  return `${dInputs.options.currency}${numbro(value.value).format({ thousandSeparated: true })}`
})
const inputValue = computed(() => {
  return `${value.value}`
})
const isBlur = ref(true)
function blurChange() {
  touchedChange()
  isBlur.value = true
}
function valueChange2(value: any) {
  return valueChange(+value)
}
function inputChange(event: KeyboardEvent) {
  const currentValue = event.key

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
