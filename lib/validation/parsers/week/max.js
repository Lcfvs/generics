import fromW3CWeekString from '../../../temporal/fromW3CWeekString.js'

export default function max ({
  max
}) {
  const timestamp = +fromW3CWeekString(max)

  return async value => {
    if (value <= timestamp) {
      return value
    }

    throw new TypeError('must be an anterior W3C week')
  }
}
