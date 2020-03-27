import clone from './clone.js'
import withTime from './withTime.js'

export default function withMilliseconds (date, milliseconds) {
  const copy = clone(date)

  withTime(copy, copy.getHours(), copy.getMinutes(), copy.getSeconds(), milliseconds)

  return copy
}
