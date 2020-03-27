import addMinutes from './addMinutes.js'

export default function fromUTCDate (date, offset = new Date().getTimezoneOffset()) {
  return addMinutes(date, -offset)
}
