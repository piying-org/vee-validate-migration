<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, useControlValueAccessor } from '@piying/view-vue'
import { inject } from 'vue'
import { errorString } from '../util/error-string'
const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })

const field = inject(PI_VIEW_FIELD_TOKEN)!
const message = () => {
  return field.value.form.control!.valid ? true : errorString(field.value)
}

</script>
<template>
  <v-text-field
    @update:modelValue="valueChange"
    v-model="value"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    :rules="[message]"
  ></v-text-field>
</template>

<style scoped>
@import 'vuetify/styles';
</style>
