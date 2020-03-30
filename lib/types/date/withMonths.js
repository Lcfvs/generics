import number from '../number/number.js'
import parse from './parse.js'

export default function withMonths (date, months) {
  const copy = parse(date)

  copy.setMonth(number.parse(months))

  return parse(copy)
}
