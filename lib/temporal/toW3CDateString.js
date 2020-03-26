import clone from './clone.js'
import toDateString from './toDateString.js'
import toMonthString from './toMonthString.js'
import toYearString from './toYearString.js'

export default function toW3CDateString (date) {
  const copy = clone(date)
  const year = toYearString(copy)
  const month = toMonthString(copy)
  const day = toDateString(copy)

  return `${year}-${month}-${day}`
}
