import { computed, isSignal, linkedSignal } from 'static-injector'
import { VueSchemaHandle, VueFormBuilder } from '@piying/view-vue'
import type { PiResolvedViewFieldConfig } from '@piying/view-vue'
import { deepEqual } from 'fast-equals'
function getSignalValue(inputs: any) {
  return isSignal(inputs) ? inputs() : inputs
}

export class VueTifyBuilder extends VueFormBuilder {
  override afterResolveConfig(rawConfig: VueSchemaHandle, config: PiResolvedViewFieldConfig) {
    const parsed = super.afterResolveConfig(rawConfig, config) ?? config
    const props = parsed?.props
    const inputs = parsed?.inputs

    const inputs$$ = linkedSignal(() => {
      let value = getSignalValue(inputs)
      const label = getSignalValue(props)['title']
      if (label) {
        return { ...value, label }
      }
      return value
    })

    return {
      ...parsed,
      inputs: inputs$$,
    } as any
  }
}
