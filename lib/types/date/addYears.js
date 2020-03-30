import number from '../number/number.js'
import parse from './parse.js'

export default function addYears (date, years) {
  const copy = parse(date)

  copy.setFullYear(copy.getFullYear() + number.parse(years))

  return parse(copy)
}
