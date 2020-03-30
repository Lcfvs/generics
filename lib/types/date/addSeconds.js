import number from '../number/number.js'
import parse from './parse.js'

export default function addSeconds (date, seconds) {
  const copy = parse(date)

  copy.setSeconds(copy.getSeconds() + number.parse(seconds))

  return parse(copy)
}
