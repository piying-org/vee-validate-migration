<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { vModelDynamic } from 'vue'
defineProps<{
  checkedValue: string
}>()
const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })
</script>
<template>
  <label class="swap">
    <input
      type="checkbox"
      @blur="touchedChange"
      v-model-dynamic="value"
      :onUpdate:modelValue="valueChange"
      v-bind:disabled="disabled"
    />

    <div class="swap-on">🙅‍♂️</div>

    <div class="swap-off">{{ checkedValue }}</div>
  </label>
</template>

<style></style>
