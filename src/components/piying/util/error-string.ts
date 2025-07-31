import type { PiResolvedViewFieldConfig } from '@piying/view-vue'
import { summarize } from 'valibot'

export function errorString(field: PiResolvedViewFieldConfig) {
  const errors = field?.form.control!.errors
  if (errors) {
    const valibot = errors['valibot']
    if (valibot) {
      return summarize(valibot)
    } else {
      return Object.values(errors!)
        .map((item) => (typeof item === 'string' ? item : JSON.stringify(item)))
        .join('\n')
    }
  }
  return ''
}
