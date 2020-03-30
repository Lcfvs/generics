import toUTC from './toUTC.js'
import toW3CDate from './toW3CDate.js'

export default function toSQLDate (date) {
  return toW3CDate(toUTC(date))
}
