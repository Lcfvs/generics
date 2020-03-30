import boolean from '../boolean/boolean.js'
import pad from '../number/pad.js'
import parse from './parse.js'

export default function toW3CTime (date, withSeconds = false) {
  const copy = parse(date)
  const parts = [pad(copy.getHours()), pad(copy.getMinutes())]

  if (boolean.parse(withSeconds)) {
    parts.push(pad(copy.getSeconds()))
  }

  return parts.join(':')
}
