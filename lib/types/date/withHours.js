import number from '../number/number.js'
import parse from './parse.js'

export default function withHours (date, hours) {
  const copy = parse(date)

  copy.setHours(number.parse(hours))

  return parse(copy)
}
