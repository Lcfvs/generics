import addMinutes from './addMinutes.js'
import parse from './parse.js'

export default function fromUTC (date) {
  const copy = parse(date)

  return addMinutes(copy, new Date().getTimezoneOffset())
}
