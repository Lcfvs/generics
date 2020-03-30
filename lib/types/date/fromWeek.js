import array from '../array/array.js'
import addDays from './addDays.js'
import newYear from './newYear.js'

export default function fromWeek (week) {
  try {
    const [years, weeks] = array.parse(week)
    const base = addDays(newYear(years), (weeks - 1) * 7)
    const day = base.getDay()

    return day <= 4
      ? addDays(base, - day + 1)
      : addDays(base, 8 - day)
  } catch (e) {
    throw new Error('must be a week')
  }
}
