import toUTC from './toUTC.js'
import toW3CTime from './toW3CTime.js'

export default function toSQLTime (date) {
  return toW3CTime(toUTC(date), true)
}
