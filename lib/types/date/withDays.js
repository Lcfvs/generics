import number from '../number/number.js'
import parse from './parse.js'

export default function withDays (date, days) {
  const copy = parse(days)

  copy.setDate(number.parse(days))

  return parse(copy)
}
