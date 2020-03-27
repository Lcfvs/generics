import fromW3CWeekString from '../../../temporal/fromW3CWeekString.js'

export default function min ({
  min
}) {
  const timestamp = +fromW3CWeekString(min)

  return async value => {
    if (value >= timestamp) {
      return value
    }

    throw new TypeError('must be a posterior W3C week')
  }
}
