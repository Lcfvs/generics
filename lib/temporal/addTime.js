import addHours from './addHours.js'
import addMilliseconds from './addMilliseconds.js'
import addMinutes from './addMinutes.js'
import addSeconds from './addSeconds.js'

export default function addTime (date, hours, minutes, seconds, milliseconds) {
  let copy = date

  copy = addHours(copy, hours)
  copy = addMinutes(copy, minutes)
  copy = addSeconds(copy, seconds)
  copy = addMilliseconds(copy, milliseconds)

  return copy
}
