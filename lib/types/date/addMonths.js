import number from '../number/number.js'
import parse from './parse.js'

export default function addMonths (date, months) {
  const copy = parse(date)

  copy.setMonth(copy.getMonth() + number.parse(months))

  return parse(copy)
}
