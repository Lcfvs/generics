import addMonths from './addMonths.js'
import addYears from './addYears.js'

export default function addDays (date, years, months, days) {
  let copy = date

  copy = addYears(copy, years)
  copy = addMonths(copy, months)
  copy = addDays(copy, days)

  return copy
}
