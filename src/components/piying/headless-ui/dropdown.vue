<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { computed } from 'vue'
import {
  DefaultOptionConvert,
  transformOptions,
  type OptionConvert,
} from '../util/options'
import { Listbox, ListboxOptions, ListboxOption, ListboxButton } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })
const props = withDefaults(defineProps<{ options?: any[]; optionConvert?: OptionConvert }>(), {
  options: () => [],
  optionConvert: (props) => {
    return { ...DefaultOptionConvert, ...props.optionConvert }
  },
})
const resolvedOptions = computed(() => {
  return transformOptions(props.options, props.optionConvert)
})

</script>
<template>
  <Listbox
    v-model="value"
    @update:modelValue="valueChange"
    @blur="touchedChange"
    v-bind:disabled="disabled"
  >
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span class="block truncate">{{ value || 'Please select' }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>
      <ListboxOptions
        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10"
      >
        <ListboxOption
          v-slot="{ active, selected }"
          v-for="(option, index) in resolvedOptions"
          :key="index"
          :value="option.value"
          as="template"
        >
          <li
            :class="[
              active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
              'relative cursor-default select-none py-2 pl-10 pr-4',
            ]"
          >
            <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{
              option.label
            }}</span>
            <span
              v-if="selected"
              class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
            >
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>

<style scoped></style>
