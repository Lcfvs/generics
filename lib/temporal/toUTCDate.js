import addMinutes from './addMinutes.js'
import clone from './clone.js'

export default function toUTCDate (date) {
  const copy = clone(date)

  return addMinutes(copy, copy.getTimezoneOffset())
}
