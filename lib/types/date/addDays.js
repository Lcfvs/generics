import number from '../number/number.js'
import parse from './parse.js'

export default function addDays (date, days) {
  const copy = parse(date)

  copy.setDate(copy.getDate() + number.parse(days))

  return parse(copy)
}
