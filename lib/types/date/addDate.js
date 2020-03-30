import number from '../number/number.js'
import parse from './parse.js'

export default function addDate (date, years, months, days) {
  const copy = parse(date)

  copy.setDate(copy.getDate() + number.parse(days))
  copy.setMonth(copy.getMonth() + number.parse(months))
  copy.setFullYear(copy.getFullYear() + number.parse(years))

  return parse(copy)
}
