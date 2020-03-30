import fromW3CWeek from '../../../../types/date/fromW3CWeek.js'
import week from '../../native/week/week.js'

const parse = week.type()

export default function type () {
  return async value => {
    try {
      return await parse(fromW3CWeek(value))
    } catch (e) {
      throw new Error('must be a week')
    }
  }
}
