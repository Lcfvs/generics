import clone from './clone.js'
import toMonthString from './toMonthString.js'
import toYearString from './toYearString.js'

export default function toW3CMonthString (date) {
  const copy = clone(date)
  const year = toYearString(copy)
  const month = toMonthString(copy)

  return `${year}-${month}`
}
