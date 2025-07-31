<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { vModelDynamic, watch } from 'vue'
import InputText from 'primevue/inputtext'

const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })
watch(value, (value) => {
  valueChange?.(value)
})
</script>
<template>
  <InputText
    v-model="value"
    v-bind:disabled="disabled"
    @blur="touchedChange"
  />
</template>

<style scoped>
@import 'primeicons/primeicons.css';
</style>
