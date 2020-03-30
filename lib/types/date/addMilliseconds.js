import number from '../number/number.js'
import parse from './parse.js'

export default function addMilliseconds (date, milliseconds) {
  const copy = parse(date)

  copy.setMilliseconds(copy.getMilliseconds() + number.parse(milliseconds))

  return parse(copy)
}
