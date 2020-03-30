import number from '../number/number.js'
import parse from './parse.js'

export default function addHours (date, hours) {
  const copy = parse(date)

  copy.setHours(copy.getHours() + number.parse(hours))

  return parse(copy)
}
