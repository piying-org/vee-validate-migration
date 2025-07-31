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

import '@valibot/i18n/zh-CN'
import { setGlobalConfig } from 'valibot'
const browserLanguage = navigator.language
if (browserLanguage.startsWith('zh')) {
  setGlobalConfig({ lang: 'zh-CN' })
}
</script>

<template>
  <a href="https://vee-validate.logaretm.com/v4/examples/checkboxes-and-radio/"
    >Validating Radio Inputs
  </a>
  <ValidatingRadioInputs></ValidatingRadioInputs>
  <a href="https://vee-validate.logaretm.com/v4/examples/checkboxes-and-radio/"
    >Validating Checkbox Inputs
  </a>
  <ValidatingCheckboxInputs></ValidatingCheckboxInputs>
  <a href="https://vee-validate.logaretm.com/v4/examples/custom-inputs/">Custom Inputs </a>
  <CustomInputs></CustomInputs>
  <a href="https://vee-validate.logaretm.com/v4/examples/async-validation/">Async Validation</a>
  <AsyncValidation></AsyncValidation>
  <a href="https://vee-validate.logaretm.com/v4/examples/cross-field-validation/"
    >Cross-Field Validation
  </a>
  <CrossFieldValidation></CrossFieldValidation>
  <a href="https://vee-validate.logaretm.com/v4/examples/array-fields/">Array Fields</a>
  <ArrayFields></ArrayFields>
  <a href="https://vee-validate.logaretm.com/v4/examples/custom-checkboxes/">Custom Checkboxes</a>
  <CustomCheckboxes></CustomCheckboxes>
  <a href="https://vee-validate.logaretm.com/v4/examples/multistep-form-wizard/"
    >Higher Order Components
  </a>
  <HigherOrderComponents></HigherOrderComponents>
  <a href="https://vee-validate.logaretm.com/v4/examples/using-stores/">Stores </a>
  <Stores></Stores>
  <a href="https://vee-validate.logaretm.com/v4/examples/value-formatting/"
    >Currency Format Example
  </a>
  <CurrencyFormatExample></CurrencyFormatExample>
  <a href="https://vee-validate.logaretm.com/v4/examples/ui-libraries/">Vuetify </a>
  <Vuetify></Vuetify>
  <a href="https://vee-validate.logaretm.com/v4/examples/ui-libraries/">PrimeVue </a>
  <PrimeVue></PrimeVue>
  <a href="https://vee-validate.logaretm.com/v4/examples/ui-libraries/">Quasar </a>
  <Quasar></Quasar>
  <a href="https://vee-validate.logaretm.com/v4/examples/ui-libraries/">Element Plus </a>
  <ElementPlus></ElementPlus>
  <a href="https://vee-validate.logaretm.com/v4/examples/ui-libraries/">HeadlessUI </a>
  <HeadlessUI></HeadlessUI>
  <a href="https://vee-validate.logaretm.com/v4/examples/ui-libraries/">Ionic Framework </a>
  <IonicFramework></IonicFramework>

  <a href="https://vee-validate.logaretm.com/v4/examples/ui-libraries/">Ant Design </a>
  <AntDesign></AntDesign>
</template>

<style scoped></style>
