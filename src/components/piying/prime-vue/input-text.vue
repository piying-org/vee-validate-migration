<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { vModelDynamic, watch } from 'vue'
import InputText from 'primevue/inputtext'

const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })

</script>
<template>
  <InputText
    v-model="value"
    @update:modelValue="valueChange"
    v-bind:disabled="disabled"
    @blur="touchedChange"
  />
</template>

<style scoped>
@import 'primeicons/primeicons.css';
</style>
