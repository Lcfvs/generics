import pad from '@lcf.vs/generics/lib/utils/number/pad.js'
import clone from '@lcf.vs/generics/lib/temporal/clone.js'

export default function toYearString (date) {
  return pad(clone(date).getFullYear(), 4)
}
