import number from '../number/number.js'
import parse from './parse.js'

export default function withTime (date, hours, minutes, seconds, milliseconds) {
  const copy = parse(date)

  copy.setHours(number.parse(hours))
  copy.setMinutes(number.parse(minutes))
  copy.setSeconds(number.parse(seconds))
  copy.setMilliseconds(number.parse(milliseconds))

  return parse(copy)
}
