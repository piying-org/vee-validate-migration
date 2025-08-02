<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { shallowRef, vModelDynamic } from 'vue'
const dInputs = defineProps<{ options: { label: string; value: string }[] }>()
const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })

const selectedList = shallowRef(
  dInputs.options.map((option) => {
    return value.value?.includes(option.value)
  }),
)
function valueChange2(checked: boolean, index: number) {
  selectedList.value[index] = checked
  valueChange(
    selectedList.value
      .map((bool, index) => (bool ? dInputs.options[index].value : undefined))
      .filter(Boolean),
  )
}
</script>
<template>
  <template v-for="(option, index) in options">
    <input
      type="checkbox"
      class="checkbox"
      v-model-dynamic="selectedList[index]"
      :onUpdate:modelValue="(bool: boolean) => valueChange2(bool, index)"
      v-bind:disabled="disabled"
      @blur="touchedChange"
    />
    {{ option.label }}
  </template>
</template>

<style></style>
