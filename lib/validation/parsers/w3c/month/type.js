import fromW3CMonth from '../../../../types/date/fromW3CMonth.js'
import month from '../../native/month/month.js'

const parse = month.type()

export default function type () {
  return async value => {
    try {
      return await parse(fromW3CMonth(value))
    } catch (e) {
      throw new Error('must be a month')
    }
  }
}
