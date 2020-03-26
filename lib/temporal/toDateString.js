import pad from '@lcf.vs/generics/lib/temporal/utils/number/pad.js'
import clone from '@lcf.vs/generics/lib/temporal/clone.js'

export default function toDateString (date) {
  return pad(clone(date).getDate())
}
