import addDays from './addDays.js'
import newYear from './newYear.js'
import toWeek from './toWeek.js'

export default function lastWeek (year) {
  return toWeek(addDays(newYear(year + 1), -1))
}
