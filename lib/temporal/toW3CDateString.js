import clone from '@lcf.vs/generics/lib/temporal/clone.js'
import toDateString from '@lcf.vs/generics/lib/temporal/toDateString.js'
import toMonthString from '@lcf.vs/generics/lib/temporal/toMonthString.js'
import toYearString from '@lcf.vs/generics/lib/temporal/toYearString.js'

export default function toW3CDateString (date) {
  const copy = clone(date)
  const year = toYearString(copy)
  const month = toMonthString(copy)
  const day = toDateString(copy)

  return `${year}-${month}-${day}`
}
