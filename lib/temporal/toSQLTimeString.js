import toSecondsString from '@lcf.vs/generics/lib/temporal/toSecondsString.js'
import toUTCDate from '@lcf.vs/generics/lib/temporal/toUTCDate.js'
import toW3CTimeString from '@lcf.vs/generics/lib/temporal/toW3CTimeString.js'

export default function toSQLTimeString (date) {
  return `${toW3CTimeString(toUTCDate(date))}:${toSecondsString(date)}`
}
