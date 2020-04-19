import toSQLDatetime from './toSQLDatetime.js'
import withTime from './withTime.js'

export default function toSQLDate (date) {
  return toSQLDatetime(withTime(date, 0, 0, 0, 0)).split(' ')[0]
}
