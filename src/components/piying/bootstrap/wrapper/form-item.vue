<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, signalToRef } from '@piying/view-vue'
import { BFormGroup } from 'bootstrap-vue-next'

import { computed, inject, watchEffect } from 'vue'
import { errorString } from '../../util/error-string'
const field = inject(PI_VIEW_FIELD_TOKEN)!

const props = signalToRef(() => field.value.props())

const status$$ = signalToRef(() => {
  if (field.value.form.control!.valid) {
    return 'success'
  } else if (!field.value.form.control?.dirty$$() && !field.value.form.control?.touched$$()) {
    return 'warning'
  } else {
    return 'error'
  }
})
const message = signalToRef(() => {
  const status = status$$.value
  return status === 'error' ? errorString(field.value) : ''
})

const disabledLabel = computed(() => {
  return props.value['disabledLabel']
})
const state = signalToRef(() => {
  return field.value.form.control!.valid
})
</script>

<template>
  <BFormGroup
    :label="disabledLabel ? undefined : props['title']"
    :validate-status="status$$"
    :invalid-feedback="message"
    :description="props['description']"
    :state="state"
  >
    <slot></slot>
  </BFormGroup>
</template>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
</style>
