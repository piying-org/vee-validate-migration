<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, signalToRef } from '@piying/view-vue'
import { FormItem } from 'ant-design-vue'
import { computed, inject, watchEffect } from 'vue'
import { errorString } from '../../util/error-string'
const field = inject(PI_VIEW_FIELD_TOKEN)!

const props = signalToRef(() => field.value.props())

let status$$ = signalToRef(() => {
  if (field.value.form.control!.valid) {
    return 'success'
  } else if (!field.value.form.control?.dirty$$() && !field.value.form.control?.touched$$()) {
    return 'warning'
  } else {
    return 'error'
  }
})
let message = signalToRef(() => {
  let status = status$$.value
  return status === 'error' ? errorString(field.value) : ''
})

let disabledLabel = computed(() => {
  return props.value['disabledLabel']
})
</script>

<template>
  <FormItem
    :label="disabledLabel ? undefined : props['title']"
    :validate-status="status$$"
    :help="message"
  >
    <slot></slot>
  </FormItem>
</template>

<style scoped></style>
