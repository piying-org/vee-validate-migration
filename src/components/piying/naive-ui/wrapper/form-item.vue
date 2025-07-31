<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, signalToRef } from '@piying/view-vue'
import { FormItem } from 'ant-design-vue'
import { NFormItem } from "naive-ui";
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
  console.log('状态',status);
  
  return status === 'error' ? errorString(field.value) : ''
})

let disabledLabel = computed(() => {
  return props.value['disabledLabel']
})
</script>

<template>
  <NFormItem
    :label="disabledLabel ? undefined : props['title']"
    :validation-status="status$$"
    :feedback="message"
  >
    <slot></slot>
  </NFormItem>
</template>

<style scoped></style>
