import clone from './clone.js'
import withTime from './withTime.js'

export default function withMinutes (date, minutes) {
  const copy = clone(date)

  withTime(copy, copy.getHours(), minutes, copy.getSeconds(), copy.getMilliseconds())

  return copy
}
