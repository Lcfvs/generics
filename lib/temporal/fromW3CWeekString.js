import fromWeek from '@lcf.vs/generics/lib/temporal/fromWeek.js'
import toW3CWeekString from '@lcf.vs/generics/lib/temporal/toW3CWeekString.js'

export default function fromW3CWeekString (value) {
  try {
    const date = fromWeek(value.split('-W'))

    if (toW3CWeekString(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a W3C week')
}
