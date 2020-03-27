import isDate from './isDate.js'
import toISOString from './toISOString.js'

export default function fromISOString (value) {
  const date = new Date(value)

  if (!isDate(date) || toISOString(date) !== value) {
    throw new Error('must be an ISO date')
  }

  return date
}
