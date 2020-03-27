import clone from './clone.js'
import withTime from './withTime.js'

export default function withHours (date, hours) {
  const copy = clone(date)

  withTime(copy, hours, copy.getMinutes(), copy.getSeconds(), copy.getMilliseconds())

  return copy
}
