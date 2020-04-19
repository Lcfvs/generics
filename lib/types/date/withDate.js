import number from '../number/number.js'
import parse from './parse.js'

export default function withDate (date, years, months, days) {
  const copy = parse(date)

  copy.setFullYear(number.parse(years))
  copy.setMonth(number.parse(months))
  copy.setDate(number.parse(days))

  return parse(copy)
}
