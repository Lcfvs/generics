import number from '../number/number.js'
import parse from './parse.js'

export default function addTime (date, hours, minutes, seconds, milliseconds) {
  const copy = parse(date)

  copy.setMilliseconds(copy.getMilliseconds() + number.parse(milliseconds))
  copy.setSeconds(copy.getSeconds() + number.parse(seconds))
  copy.setMinutes(copy.getMinutes() + number.parse(minutes))
  copy.setHours(copy.getHours() + number.parse(hours))

  return parse(copy)
}
