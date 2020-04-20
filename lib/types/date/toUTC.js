import addMinutes from './addMinutes.js'
import parse from './parse.js'

export default function toUTC (date) {
  const copy = parse(date)

  return addMinutes(copy, -copy.getTimezoneOffset())
}
