import clone from './clone.js'
import toHoursString from './toHoursString.js'
import toMinutesString from './toMinutesString.js'

export default function toW3CTimeString (date) {
  const copy = clone(date)
  const hours = toHoursString(copy)
  const minutes = toMinutesString(copy)

  return `${hours}:${minutes}`
}
