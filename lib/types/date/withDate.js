import number from '../number/number.js'
import parse from './parse.js'

export default function withDate (date, years, months, days) {
  const copy = parse(date)

  copy.setDate(number.parse(days))
  copy.setMonth(number.parse(months))
  copy.setFullYear(number.parse(years))

  return parse(copy)
}
