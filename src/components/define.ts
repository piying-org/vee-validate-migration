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
import QuasarInputText from './piying/quasar/input-text.vue'
import QuasarDropdown from './piying/quasar/dropdown.vue'
import QuasarCheckbox from './piying/quasar/checkbox.vue'
import QuasarForm from './piying/quasar/group/form.vue'
import ElementPlusInputText from './piying/element-plus/input-text.vue'
import ElementPlusDropdown from './piying/element-plus/dropdown.vue'
import ElementPlusCheckbox from './piying/element-plus/checkbox.vue'
import HeadlessUiCheckbox from './piying/headless-ui/dropdown.vue'
import IonicInputText from './piying/ionic/input-text.vue'
import AntCheckbox from './piying/ant-design/checkbox.vue'
import AntDropDown from './piying/ant-design/dropdown.vue'
import AntInputText from './piying/ant-design/input-text.vue'
import AntFormItem from './piying/ant-design/wrapper/form-item.vue'
import NaiveUiCheckbox from './piying/naive-ui/checkbox.vue'
import NaiveUiDropdown from './piying/naive-ui/dropdown.vue'
import NaiveUiInputText from './piying/naive-ui/input-text.vue'
import NaiveUiFormItem from './piying/naive-ui/wrapper/form-item.vue'
import BootstrapCheckbox from './piying/bootstrap/checkbox.vue'
import BootstrapDropdown from './piying/bootstrap/dropdown.vue'
import BootstrapInputText from './piying/bootstrap/input-text.vue'
import BootstrapFormItem from './piying/bootstrap/wrapper/form-item.vue'
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
    'quasar-input-text': {
      type: QuasarInputText,
    },
    'quasar-checkbox': {
      type: QuasarCheckbox,
    },
    'quasar-dropdown': {
      type: QuasarDropdown,
    },
    'quasar-form': {
      type: QuasarForm,
    },

    'element-plus-input-text': {
      type: ElementPlusInputText,
    },
    'element-plus-checkbox': {
      type: ElementPlusCheckbox,
    },
    'element-plus-dropdown': {
      type: ElementPlusDropdown,
    },
    'headless-ui-dropdown': {
      type: HeadlessUiCheckbox,
    },
    'ionic-input-text': {
      type: IonicInputText,
    },
    'ant-input-text': {
      type: AntInputText,
    },
    'ant-checkbox': {
      type: AntCheckbox,
    },
    'ant-dropdown': {
      type: AntDropDown,
    },
    'naive-ui-input-text': {
      type: NaiveUiInputText,
    },
    'naive-ui-checkbox': {
      type: NaiveUiCheckbox,
    },
    'naive-ui-dropdown': {
      type: NaiveUiDropdown,
    },
    'bootstrap-input-text': {
      type: BootstrapInputText,
    },
    'bootstrap-checkbox': {
      type: BootstrapCheckbox,
    },
    'bootstrap-dropdown': {
      type: BootstrapDropdown,
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
