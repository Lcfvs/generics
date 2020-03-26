import clone from '@lcf.vs/generics/lib/temporal/clone.js'
import withTime from '@lcf.vs/generics/lib/temporal/withTime.js'

export default function withHours (date, hours) {
  const copy = clone(date)

  withTime(copy, hours, copy.getMinutes(), copy.getSeconds(), copy.getMilliseconds())

  return copy
}
