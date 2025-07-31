<script setup lang="ts">
// import ChecboxAndRadioInputs from './views/Checkbox-and-Radio-Inputs.vue'
import ValidatingRadioInputs from './views/Validating-Radio-Inputs.vue'
import ValidatingCheckboxInputs from './views/Validating-Checkbox-Inputs.vue'
import CustomInputs from './views/Custom-Inputs.vue'
import AsyncValidation from './views/Async-Validation.vue'
import CrossFieldValidation from './views/Cross-Field-Validation.vue'
import ArrayFields from './views/Array-Fields.vue'
import CustomCheckboxes from './views/Custom-Checkboxes.vue'
import HigherOrderComponents from './views/Higher-Order-Components.vue'
import Stores from './views/Stores.vue'
import CurrencyFormatExample from './views/Currency-Format-Example.vue'
import Vuetify from './views/Vuetify.vue'
import PrimeVue from './views/PrimeVue.vue'
import Quasar from './views/Quasar.vue'
import ElementPlus from './views/Element-Plus.vue'
import HeadlessUI from './views/Headless-UI.vue'
import IonicFramework from './views/Ionic-Framework.vue'
import AntDesign from './views/ant-design.vue'
import NaiveUi from './views/naive-ui.vue'
import Bootstrap from './views/bootstrap.vue'

import '@valibot/i18n/zh-CN'
import { setGlobalConfig } from 'valibot'
const browserLanguage = navigator.language
if (browserLanguage.startsWith('zh')) {
  setGlobalConfig({ lang: 'zh-CN' })
}
const demoList = [
  {
    label: 'Validating Radio Inputs',
    from: 'https://vee-validate.logaretm.com/v4/examples/checkboxes-and-radio/',
    to: '/views/Validating-Radio-Inputs.vue',
    Component: ValidatingRadioInputs,
  },
  {
    label: 'Validating Checkbox Inputs',
    from: 'https://vee-validate.logaretm.com/v4/examples/checkboxes-and-radio/',
    to: '/views/Validating-Checkbox-Inputs.vue',
    Component: ValidatingCheckboxInputs,
  },
  {
    label: 'Custom Inputs',
    from: 'https://vee-validate.logaretm.com/v4/examples/custom-inputs/',
    to: '/views/Custom-Inputs.vue',
    Component: CustomInputs,
  },
  {
    label: 'Async Validation',
    from: 'https://vee-validate.logaretm.com/v4/examples/async-validation/',
    to: '/views/Async-Validation.vue',
    Component: AsyncValidation,
  },
  {
    label: 'Cross-Field Validation',
    from: 'https://vee-validate.logaretm.com/v4/examples/cross-field-validation/',
    to: '/views/Cross-Field-Validation.vue',
    Component: CrossFieldValidation,
  },
  {
    label: 'Array Fields',
    from: 'https://vee-validate.logaretm.com/v4/examples/array-fields/',
    to: '/views/Array-Fields.vue',
    Component: ArrayFields,
  },
  {
    label: 'Custom Checkboxes',
    from: 'https://vee-validate.logaretm.com/v4/examples/custom-checkboxes/',
    to: '/views/Custom-Checkboxes.vue',
    Component: CustomCheckboxes,
  },
  {
    label: 'Higher Order Components',
    from: 'https://vee-validate.logaretm.com/v4/examples/multistep-form-wizard/',
    to: '/views/Higher-Order-Components.vue',
    Component: HigherOrderComponents,
  },
  {
    label: 'Stores',
    from: 'https://vee-validate.logaretm.com/v4/examples/using-stores/',
    to: '/views/Stores.vue',
    Component: Stores,
  },
  {
    label: 'Currency Format Example',
    from: 'https://vee-validate.logaretm.com/v4/examples/value-formatting/',
    to: '/views/Currency-Format-Example.vue',
    Component: CurrencyFormatExample,
  },
  {
    label: 'Vuetify',
    from: 'https://vee-validate.logaretm.com/v4/examples/ui-libraries/',
    to: '/views/Vuetify.vue',
    Component: Vuetify,
  },
  {
    label: 'PrimeVue',
    from: 'https://vee-validate.logaretm.com/v4/examples/ui-libraries/',
    to: '/views/PrimeVue.vue',
    Component: PrimeVue,
  },
  {
    label: 'Quasar',
    from: 'https://vee-validate.logaretm.com/v4/examples/ui-libraries/',
    to: '/views/Quasar.vue',
    Component: Quasar,
  },
  {
    label: 'Element Plus',
    from: 'https://vee-validate.logaretm.com/v4/examples/ui-libraries/',
    to: '/views/Element-Plus.vue',
    Component: ElementPlus,
  },
  {
    label: 'HeadlessUI',
    from: 'https://vee-validate.logaretm.com/v4/examples/ui-libraries/',
    to: '/views/Headless-UI.vue',
    Component: HeadlessUI,
  },
  {
    label: 'Ionic Framework',
    from: 'https://vee-validate.logaretm.com/v4/examples/ui-libraries/',
    to: '/views/Ionic-Framework.vue',
    Component: IonicFramework,
  },
  {
    label: 'Ant Design',
    from: 'https://vee-validate.logaretm.com/v4/examples/ui-libraries/',
    to: '/views/ant-design.vue',
    Component: AntDesign,
  },
  {
    label: 'Naive UI',
    from: 'https://vee-validate.logaretm.com/v4/examples/ui-libraries/',
    to: '/views/naive-ui.vue',
    Component: NaiveUi,
  },
  {
    label: 'Bootstrap',
    from: 'https://vee-validate.logaretm.com/v4/examples/ui-libraries/',
    to: '/views/bootstrap.vue',
    Component: Bootstrap,
  },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <template v-for="item in demoList">
      <div class="flex gap-4 *:flex-1 items-center *:first:flex-0">
        <label class="label">{{ item.label }}</label>
        <a :href="item.from" class="link-primary btn" target="_blank">vee-validate Page </a>
        <a
          :href="'https://github.com/piying-org/vee-validate-migration/blob/main/src' + item.to"
          class="link-secondary btn"
          target="_blank"
          >Piying Code
        </a>
      </div>

      <component :is="item.Component"></component>
    </template>
  </div>
</template>

<style scoped></style>
