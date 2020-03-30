import toW3CDate from './toW3CDate.js'
import toW3CTime from './toW3CTime.js'

export default function toW3CDatetime (date, withSeconds = false) {
  return `${toW3CDate(date)}T${toW3CTime(date, withSeconds)}`
}
