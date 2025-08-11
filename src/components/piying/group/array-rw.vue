<script setup lang="ts">
import type { PiResolvedViewFieldConfig } from '@piying/view-vue'
import { PI_VIEW_FIELD_TOKEN, PiyingFieldTemplate, signalToRef } from '@piying/view-vue'
import { computed, inject, watchEffect } from 'vue'

const dInputs = defineProps<{
  minLength: number
  initItem?: (index: number | undefined) => any
}>()
const field = inject(PI_VIEW_FIELD_TOKEN)!
const props = signalToRef(() => field?.value.props())
function remove(index: number) {
  field.value.action.remove(index)
}
function add() {
  field.value.action.set(undefined)
}
const children = signalToRef(() => field.value.children!())
const btnDisabled = computed(() => children.value.length <= dInputs.minLength)

watchEffect(() => {
  const minLength = dInputs.minLength ?? 0
  for (let i = children.value.length; i < minLength; i++) {
    field.value.action.set(dInputs.initItem?.(i), i)
  }
})
</script>
<template>
  <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full">
    <legend class="fieldset-legend" v-if="props['title']">{{ props['title'] }}</legend>
    <template v-for="(field, index) in children" :key="index">
      <div class="flex items-center gap-2 *:first:flex-1">
        <piying-field-template :field="field!"></piying-field-template>
        <button
          class="btn btn-circle btn-soft btn-error"
          :class="{ 'btn-disabled': btnDisabled }"
          @click="remove(index)"
          :aria-disabled="btnDisabled"
        >
          🗑️
        </button>
      </div>
    </template>

    <button class="btn" @click="add()">➕</button>
  </fieldset>
</template>

<style></style>
