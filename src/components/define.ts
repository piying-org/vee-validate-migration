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
import VuetifyTextField from './piying/vuetify/text-field.vue'
import VuetifyCheckbox from './piying/vuetify/checkbox.vue'
import PrimeVueInputText from './piying/prime-vue/input-text.vue'
import PrimeVueCheckbox from './piying/prime-vue/checkbox.vue'
import PrimeVueDropdown from './piying/prime-vue/dropdown.vue'
export const fieldConfig = {
  types: {
    string: { type: InputText, wrappers: ['label'] },
    'currency-input': { type: CurrencyInput },
    number: { type: InputNumber, wrappers: ['label'] },
    radio: { type: InputRadio },
    boolean: { type: InputCheckbox, wrappers: ['label'] },
    fieldset: { type: FieldsetGroup },
    formHelper: { type: FormHelper },
    'array-rw': { type: ArrayRw },
    'array-ro': { type: PiyingViewGroup },
    'custom-checkbox': { type: InputSwap },
    'multi-checkbox': { type: MultiCheckbox },
    step: { type: Step },
    'vuetify-text-field': {
      type: VuetifyTextField,
    },
    'vuetify-checkbox': {
      type: VuetifyCheckbox,
    },
    'prime-vue-input-text': {
      type: PrimeVueInputText,
    },
    'prime-vue-checkbox': {
      type: PrimeVueCheckbox,
    },
    'prime-vue-dropdown': {
      type: PrimeVueDropdown,
    },
  },
  wrappers: {
    label: {
      type: LabelWrapper,
    },

    validator: {
      type: ValidatorWrapper,
    },
  },
} as PiViewConfig
