import fromW3CWeekString from '../../../temporal/fromW3CWeekString.js'

export default function step ({
  min,
  step
}) {
  const multiple = step * 60480000
  const timestamp = +fromW3CWeekString(min)

  return async value => {
    if ((value - timestamp) % multiple === 0) {
      return value
    }

    throw new TypeError('must be a W3C week step multiple')
  }
}
