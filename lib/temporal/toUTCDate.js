import addMinutes from '@lcf.vs/generics/lib/temporal/addMinutes.js'
import clone from '@lcf.vs/generics/lib/temporal/clone.js'

export default function toUTCDate (date) {
  const copy = clone(date)

  return addMinutes(copy, copy.getTimezoneOffset())
}
