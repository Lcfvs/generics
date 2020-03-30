import toSQLDate from './toSQLDate.js'
import toSQLTime from './toSQLTime.js'

export default function toSQLDatetime (date) {
  return `${toSQLDate(date)} ${toSQLTime(date)}`
}
