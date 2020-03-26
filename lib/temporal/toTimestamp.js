import isDate from './isDate.js'

export default function toTimestamp (date) {
  if (!isDate(date)) {
    throw new TypeError('must be a date')
  }

  return +date
}
