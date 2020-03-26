import addDays from '@lcf.vs/generics/lib/temporal/addDays.js'
import addMonths from '@lcf.vs/generics/lib/temporal/addMonths.js'
import addYears from '@lcf.vs/generics/lib/temporal/addYears.js'

export default function addDate (date, years, months, days) {
  let copy = date

  copy = addYears(copy, years)
  copy = addMonths(copy, months)
  copy = addDays(copy, days)

  return copy
}
