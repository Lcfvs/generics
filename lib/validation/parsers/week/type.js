import fromW3CWeekString from '../../../temporal/fromW3CWeekString.js'

export default function type () {
  return async value => fromW3CWeekString(value)
}
