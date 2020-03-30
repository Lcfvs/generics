import isDate from './isDate.js'
import toISO from './toISO.js'

export default function fromISO (value) {
  try {
    const date = new Date(value)

    if (isDate(date) && toISO(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be an ISO date')
}
