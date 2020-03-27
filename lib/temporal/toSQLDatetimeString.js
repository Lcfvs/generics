import toSQLDateString from './toSQLDateString.js'
import toSQLTimeString from './toSQLTimeString.js'

export default function toSQLDatetimeString (date) {
  return `${toSQLDateString(date)} ${toSQLTimeString(date)}`
}
