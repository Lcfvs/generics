import clone from '@lcf.vs/generics/lib/temporal/clone.js'
import withTime from '@lcf.vs/generics/lib/temporal/withTime.js'

export default function withMinutes (date, minutes) {
  const copy = clone(date)

  withTime(copy, copy.getHours(), minutes, copy.getSeconds(), copy.getMilliseconds())

  return copy
}
