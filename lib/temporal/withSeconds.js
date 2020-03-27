import clone from './clone.js'
import withTime from './withTime.js'

export default function withSeconds (date, seconds) {
  const copy = clone(date)

  withTime(copy, copy.getHours(), copy.getMinutes(), seconds, copy.getMilliseconds())

  return copy
}
