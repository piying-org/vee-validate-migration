<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, useControlValueAccessor } from '@piying/view-vue'
import { inject, vModelDynamic, watch } from 'vue'

import { IonInput } from '@ionic/vue'
const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })

const field = inject(PI_VIEW_FIELD_TOKEN)!

function valueChagne2(value: any) {
  valueChange?.(value)
}
</script>
<template>
  <IonInput
    v-model="value"
    @update:modelValue="valueChagne2"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    label-placement="floating"
  ></IonInput>
</template>

<style scoped>

</style>
