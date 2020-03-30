import number from '../number/number.js'
import parse from './parse.js'

export default function withTime (date, hours, minutes, seconds, milliseconds) {
  const copy = parse(date)

  copy.setMilliseconds(number.parse(milliseconds))
  copy.setSeconds(number.parse(seconds))
  copy.setMinutes(number.parse(minutes))
  copy.setHours(number.parse(hours))

  return parse(copy)
}
