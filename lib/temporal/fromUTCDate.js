import addMinutes from '@lcf.vs/generics/lib/temporal/addMinutes.js'

export default function fromUTCDate (date, offset = new Date().getTimezoneOffset()) {
  return addMinutes(date, -offset)
}
