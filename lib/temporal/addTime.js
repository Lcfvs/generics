import addHours from '@lcf.vs/generics/lib/temporal/addHours.js'
import addMilliseconds from '@lcf.vs/generics/lib/temporal/addMilliseconds.js'
import addMinutes from '@lcf.vs/generics/lib/temporal/addMinutes.js'
import addSeconds from '@lcf.vs/generics/lib/temporal/addSeconds.js'

export default function addTime (date, hours, minutes, seconds, milliseconds) {
  let copy = date

  copy = addHours(copy, hours)
  copy = addMinutes(copy, minutes)
  copy = addSeconds(copy, seconds)
  copy = addMilliseconds(copy, milliseconds)

  return copy
}
