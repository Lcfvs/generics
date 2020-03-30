import number from '../number/number.js'
import parse from './parse.js'

export default function withMinutes (date, minutes) {
  const copy = parse(date)

  copy.setMinutes(number.parse(minutes))

  return parse(copy)
}
