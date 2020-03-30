import number from '../number/number.js'
import parse from './parse.js'

export default function addMinutes (date, minutes) {
  const copy = parse(date)

  copy.setMinutes(copy.getMinutes() + number.parse(minutes))

  return parse(copy)
}
