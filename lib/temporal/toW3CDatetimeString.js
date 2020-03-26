import toW3CDateString from '@lcf.vs/generics/lib/temporal/toW3CDateString.js'
import toW3CTimeString from '@lcf.vs/generics/lib/temporal/toW3CTimeString.js'

export default function toW3CDatetimeString (date) {
  return `${toW3CDateString(date)}T${toW3CTimeString(date)}}`
}
