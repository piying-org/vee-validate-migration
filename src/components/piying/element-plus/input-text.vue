<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, useControlValueAccessor } from '@piying/view-vue'
import { inject, vModelDynamic, watch } from 'vue'
import { summarize } from 'valibot'
import { ElInput } from 'element-plus'
import { errorString } from '../util/error-string'
const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })

const field = inject(PI_VIEW_FIELD_TOKEN)!



</script>
<template>
  <el-input
    v-model="value"
    @update:modelValue="valueChange"
    v-bind:disabled="disabled"
    @blur="touchedChange"
  ></el-input>
</template>

<style scoped></style>
