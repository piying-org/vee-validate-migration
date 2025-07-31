<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, signalToRef } from '@piying/view-vue'
import { inject } from 'vue'
const field = inject(PI_VIEW_FIELD_TOKEN)!
const props = signalToRef(() => field.value.props())
const isRequired = signalToRef(() => !!field.value.form.control?.required$$())
</script>
<template>
  <div
    class="flex gap-2"
    :class="{
      'flex-col': props['titlePosition'] === 'top',
      'items-center': props['titlePosition'] !== 'top',
    }"
  >
    <template
      v-if="
        !props['titlePosition'] ||
        props['titlePosition'] === 'left' ||
        props['titlePosition'] === 'top'
      "
    >
      <template v-if="props['title']">
        <div>
          <span class="text-red-500" v-if="isRequired">*</span>
          <span class="label">{{ props['title'] }}</span>
        </div>
      </template>
    </template>
    <slot></slot>
    <template v-if="props['titlePosition'] === 'right'">
      <template v-if="props['title']">
        <div>
          <span class="text-red-500" v-if="isRequired">*</span>
          <span class="label">{{ props['title'] }}</span>
        </div>
      </template>
    </template>
  </div>
</template>

<style></style>
