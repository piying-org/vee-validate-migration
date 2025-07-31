<script setup lang="ts">
import type { PiResolvedViewFieldConfig } from '@piying/view-vue'
import { PI_VIEW_FIELD_TOKEN, PiyingFieldTemplate, signalToRef } from '@piying/view-vue'
import { inject } from 'vue'
import { QForm } from 'quasar'
const dInputs = defineProps<{
  fields: PiResolvedViewFieldConfig[]
}>()
const field = inject(PI_VIEW_FIELD_TOKEN)!
const props = signalToRef(() => field?.value.props())
</script>
<template>
  <q-form>
    <legend class="fieldset-legend" v-if="props['title']">{{ props['title'] }}</legend>
    <template v-for="(field, index) in dInputs.fields" :key="index">
      <piying-field-template :field="field!"></piying-field-template>
    </template>
  </q-form>
</template>

<style scoped></style>
