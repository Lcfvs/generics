import fromUTC from './fromUTC.js'
import fromW3CDate from './fromW3CDate.js'
import toSQLDate from './toSQLDate.js'

export default function fromSQLDate (value) {
  try {
    const date = fromUTC(fromW3CDate(value))

    if (toSQLDate(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a SQL date')
}
