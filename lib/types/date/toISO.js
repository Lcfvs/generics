import parse from './parse.js'

export default function toISO (date) {
  return parse(date).toISOString()
}
