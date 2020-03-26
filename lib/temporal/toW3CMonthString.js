import clone from '@lcf.vs/generics/lib/temporal/clone.js'
import toMonthString from '@lcf.vs/generics/lib/temporal/toMonthString.js'
import toYearString from '@lcf.vs/generics/lib/temporal/toYearString.js'

export default function toW3CMonthString (date) {
  const copy = clone(date)
  const year = toYearString(copy)
  const month = toMonthString(copy)

  return `${year}-${month}`
}
