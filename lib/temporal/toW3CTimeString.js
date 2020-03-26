import clone from '@lcf.vs/generics/lib/temporal/clone.js'
import toHoursString from '@lcf.vs/generics/lib/temporal/toHoursString.js'
import toMinutesString from '@lcf.vs/generics/lib/temporal/toMinutesString.js'

export default function toW3CTimeString (date) {
  const copy = clone(date)
  const hours = toHoursString(copy)
  const minutes = toMinutesString(copy)

  return `${hours}:${minutes}`
}
