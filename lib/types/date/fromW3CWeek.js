import fromWeek from './fromWeek.js'
import toW3CWeek from './toW3CWeek.js'

export default function fromW3CWeek (value) {
  try {
    const date = fromWeek(value.split('-W'))

    if (toW3CWeek(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a W3C week')
}
