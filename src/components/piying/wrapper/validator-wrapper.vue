<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, signalToRef } from '@piying/view-vue'
import { fieldControlStatusClass } from '@piying/view-core'
import { inject } from 'vue'
import { summarize } from 'valibot'

const field = inject(PI_VIEW_FIELD_TOKEN)!
const statusClass = signalToRef(() => fieldControlStatusClass(field?.value.form.control))
const hasError = signalToRef(() => !!field?.value.form.control!.errors)
const errorStr = signalToRef(() => {
  const fc = field?.value
  const errors = field?.value.form.control!.errors
  if (errors) {
    const valibot = errors['valibot']
    if (valibot) {
      return summarize(valibot)
    } else {
      return Object.values(errors!)
        .map((item) => (typeof item === 'string' ? item : JSON.stringify(item)))
        .join('\n')
    }
  }
})
const isChangedStatus = signalToRef(
  () => field.value.form.control?.dirty$$() || field.value.form.control?.touched$$(),
)
const forceShowError = signalToRef(() => field.value.props()['forceShowError'])
const successMessage = signalToRef(() => field.value.props()['successMessage'])
</script>
<template>
  <div :class="statusClass">
    <slot></slot>
    <div class="text-error" v-if="forceShowError || (hasError && isChangedStatus)">
      {{ errorStr }}
    </div>
    <template v-else>
      <div v-if="!hasError && successMessage" class="text-success">{{ successMessage }}</div>
    </template>
  </div>
</template>

<style></style>
