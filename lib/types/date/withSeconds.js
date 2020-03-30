import number from '../number/number.js'
import parse from './parse.js'

export default function withSeconds (date, seconds) {
  const copy = parse(date)

  copy.setSeconds(number.parse(seconds))

  return parse(copy)
}
