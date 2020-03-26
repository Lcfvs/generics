import isDate from '@lcf.vs/generics/lib/temporal/isDate.js'

export default function toTimestamp (date) {
  if (!isDate(date)) {
    throw new TypeError('must be a date')
  }

  return +date
}
