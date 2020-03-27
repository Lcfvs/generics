import toSecondsString from './toSecondsString.js'
import toUTCDate from './toUTCDate.js'
import toW3CTimeString from './toW3CTimeString.js'

export default function toSQLTimeString (date) {
  return `${toW3CTimeString(toUTCDate(date))}:${toSecondsString(date)}`
}
