<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { vModelDynamic, watch } from 'vue'
import { ElCheckbox } from 'element-plus'
const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })


</script>

<template>
  <el-checkbox
    @update:modelValue="valueChange"
    v-model="value"
    v-bind:disabled="disabled"
    @blur="touchedChange"
  ></el-checkbox>
</template>

<style scoped></style>
