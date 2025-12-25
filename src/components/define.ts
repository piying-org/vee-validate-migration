import InputText from './piying/input-text.vue'
import InputNumber from './piying/input-number.vue'
import InputRadio from './piying/input-radio.vue'
import InputCheckbox from './piying/input-checkbox.vue'
import FieldsetGroup from './piying/group/fieldset.vue'
import LabelWrapper from './piying/wrapper/label-wrapper.vue'
import ValidatorWrapper from './piying/wrapper/validator-wrapper.vue'
import FormHelper from './piying/form-helper.vue'
import { PiyingViewGroup, type PiViewConfig } from '@piying/view-vue'
import ArrayRw from './piying/group/array-rw.vue'
import InputSwap from './piying/input-swap.vue'
import Step from './piying/group/step.vue'
import CurrencyInput from './piying/currency-input.vue'
import MultiCheckbox from './piying/multi-checkbox.vue'

import AntFormItem from './piying/ant-design/wrapper/form-item.vue'

import NaiveUiFormItem from './piying/naive-ui/wrapper/form-item.vue'

import BootstrapFormItem from './piying/bootstrap/wrapper/form-item.vue'
import { actions } from '@piying/view-core'
export const fieldConfig = {
  types: {
    string: { type: InputText, actions: [actions.wrappers.set(['label'])] },
    'currency-input': { type: CurrencyInput },
    number: { type: InputNumber, actions: [actions.wrappers.set(['label'])] },
    radio: { type: InputRadio },
    boolean: { type: InputCheckbox, actions: [actions.wrappers.set(['label'])] },
    fieldset: { type: FieldsetGroup },
    formHelper: { type: FormHelper },
    'array-rw': { type: ArrayRw },
    'array-ro': { type: PiyingViewGroup },
    'custom-checkbox': { type: InputSwap },
    'multi-checkbox': { type: MultiCheckbox },
    step: { type: Step },
    'vuetify-text-field': {
      type: () => import('./piying/vuetify/text-field.vue').then((a) => a.default),
    },
    'vuetify-checkbox': {
      type: () => import('./piying/vuetify/checkbox.vue').then((a) => a.default),
    },
    'prime-vue-input-text': {
      type: () => import('./piying/prime-vue/input-text.vue').then((a) => a.default),
    },
    'prime-vue-checkbox': {
      type: () => import('./piying/prime-vue/checkbox.vue').then((a) => a.default),
    },
    'prime-vue-dropdown': {
      type: () => import('./piying/prime-vue/dropdown.vue').then((a) => a.default),
    },
    'quasar-input-text': {
      type: () => import('./piying/quasar/input-text.vue').then((a) => a.default),
    },
    'quasar-checkbox': {
      type: () => import('./piying/quasar/checkbox.vue').then((a) => a.default),
    },
    'quasar-dropdown': {
      type: () => import('./piying/quasar/dropdown.vue').then((a) => a.default),
    },
    'quasar-form': {
      type: () => import('./piying/quasar/group/form.vue').then((a) => a.default),
    },

    'element-plus-input-text': {
      type: () => import('./piying/element-plus/input-text.vue').then((a) => a.default),
    },
    'element-plus-checkbox': {
      type: () => import('./piying/element-plus/checkbox.vue').then((a) => a.default),
    },
    'element-plus-dropdown': {
      type: () => import('./piying/element-plus/dropdown.vue').then((a) => a.default),
    },
    'headless-ui-dropdown': {
      type: () => import('./piying/headless-ui/dropdown.vue').then((a) => a.default),
    },
    'ionic-input-text': {
      type: () => import('./piying/ionic/input-text.vue').then((a) => a.default),
    },
    'ant-input-text': {
      type: () => import('./piying/ant-design/input-text.vue').then((a) => a.default),
    },
    'ant-checkbox': {
      type: () => import('./piying/ant-design/checkbox.vue').then((a) => a.default),
    },
    'ant-dropdown': {
      type: () => import('./piying/ant-design/dropdown.vue').then((a) => a.default),
    },
    'naive-ui-input-text': {
      type: () => import('./piying/naive-ui/input-text.vue').then((a) => a.default),
    },
    'naive-ui-checkbox': {
      type: () => import('./piying/naive-ui/checkbox.vue').then((a) => a.default),
    },
    'naive-ui-dropdown': {
      type: () => import('./piying/naive-ui/dropdown.vue').then((a) => a.default),
    },
    'bootstrap-input-text': {
      type: () => import('./piying/bootstrap/input-text.vue').then((a) => a.default),
    },
    'bootstrap-checkbox': {
      type: () => import('./piying/bootstrap/checkbox.vue').then((a) => a.default),
    },
    'bootstrap-dropdown': {
      type: () => import('./piying/bootstrap/dropdown.vue').then((a) => a.default),
    },
  },
  wrappers: {
    label: {
      type: LabelWrapper,
    },

    validator: {
      type: ValidatorWrapper,
    },
    'ant-form-item': {
      type: AntFormItem,
    },
    'naive-ui-form-item': {
      type: NaiveUiFormItem,
    },
    'bootstrap-form-item': {
      type: BootstrapFormItem,
    },
  },
} as PiViewConfig
