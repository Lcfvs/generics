import number from '../number/number.js'
import parse from './parse.js'

export default function withMilliseconds (date, milliseconds) {
  const copy = parse(date)

  copy.setMilliseconds(number.parse(milliseconds))

  return parse(copy)
}
