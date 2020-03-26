import clone from '@lcf.vs/generics/lib/temporal/clone.js'
import withTime from '@lcf.vs/generics/lib/temporal/withTime.js'

export default function withSeconds (date, seconds) {
  const copy = clone(date)

  withTime(copy, copy.getHours(), copy.getMinutes(), seconds, copy.getMilliseconds())

  return copy
}
