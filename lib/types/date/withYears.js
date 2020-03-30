import number from '../number/number.js'
import parse from './parse.js'

export default function withYears (date, years) {
  const copy = parse(date)

  copy.setFullYear(number.parse(years))

  return parse(copy)
}
