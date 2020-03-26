import toUTCDate from '@lcf.vs/generics/lib/temporal/toUTCDate.js'
import toW3CDateString from '@lcf.vs/generics/lib/temporal/toW3CDateString.js'

export default function toSQLDateString (date) {
  return toW3CDateString(toUTCDate(date))
}
