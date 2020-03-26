import toDateString from '@lcf.vs/generics/lib/temporal/toDateString.js'
import toW3CMonthString from '@lcf.vs/generics/lib/temporal/toW3CMonthString.js'

export default function toW3CDateString (date) {
  const month = toW3CMonthString(date)
  const day = toDateString(date)

  return `${month}-${day}`
}
