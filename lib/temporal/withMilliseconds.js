import clone from '@lcf.vs/generics/lib/temporal/clone.js'
import withTime from '@lcf.vs/generics/lib/temporal/withTime.js'

export default function withMilliseconds (date, milliseconds) {
  const copy = clone(date)

  withTime(copy, copy.getHours(), copy.getMinutes(), copy.getSeconds(), milliseconds)

  return copy
}
