<script setup lang="ts">
import type { PiResolvedViewFieldConfig } from '@piying/view-vue'
import { PI_VIEW_FIELD_TOKEN, PiyingFieldTemplate, signalToRef } from '@piying/view-vue'
import { computed, inject, ref, watchEffect } from 'vue'

const dInputs = defineProps<{
  fields: PiResolvedViewFieldConfig[]
}>()
const field = inject(PI_VIEW_FIELD_TOKEN)!
const list = signalToRef(() => field.value.fieldGroup!())
const activatedIndex$ = ref(0)
const activatedItem$$ = computed(() => list.value[activatedIndex$.value])
const prevValid = signalToRef(() => {
  const prevIndex = activatedIndex$.value - 1
  if (prevIndex === -1) {
    return false
  }
  return !!list.value[prevIndex].form.control?.rawError$$()
})
const currentValid = signalToRef(() => {
  return !!activatedItem$$.value.form.control?.rawError$$()
})

function toPrev() {
  activatedIndex$.value -= 1
}
function toNext() {
  activatedIndex$.value += 1
}
</script>
<template>
  <ul class="steps">
    <template v-for="(field, index) in list">
      <li class="step" :class="{ 'step-primary': activatedIndex$ >= index }">
        {{ field.props()['title'] }}
      </li>
    </template>
  </ul>
  <div class="flex flex-col gap-4">
    <piying-field-template :field="activatedItem$$!"></piying-field-template>
    <div class="flex gap-2 items-center">
      <button
        v-if="activatedIndex$ !== 0"
        class="btn btn-primary"
        :disabled="prevValid"
        @click="toPrev()"
      >
        Previous
      </button>
      <button
        v-if="activatedIndex$ + 1 !== list.length"
        class="btn btn-primary"
        :disabled="currentValid"
        @click="toNext()"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style></style>
