import toUTCDate from './toUTCDate.js'
import toW3CDateString from './toW3CDateString.js'

export default function toSQLDateString (date) {
  return toW3CDateString(toUTCDate(date))
}
