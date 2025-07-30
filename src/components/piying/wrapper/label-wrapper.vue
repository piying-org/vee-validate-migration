<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, signalToRef } from '@piying/view-vue'
import { inject } from 'vue'
const field = inject(PI_VIEW_FIELD_TOKEN)
const props = signalToRef(() => field?.value.props())
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
      <span class="label" v-if="props['title']">{{ props['title'] }}</span>
    </template>
    <slot></slot>
    <template v-if="props['titlePosition'] === 'right'">
      <span class="label" v-if="props['title']">{{ props['title'] }}</span>
    </template>
  </div>
</template>

<style></style>
