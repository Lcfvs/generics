import toSQLDateString from '@lcf.vs/generics/lib/temporal/toSQLDateString.js'
import toSQLTimeString from '@lcf.vs/generics/lib/temporal/toSQLTimeString.js'

export default function toSQLDatetimeString (date) {
  return `${toSQLDateString(date)} ${toSQLTimeString(date)}`
}
