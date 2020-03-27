import fromUTCDate from './fromUTCDate.js'
import fromW3CDateString from './fromW3CDateString.js'

export default function fromSQLDateString (value) {
  try {
    return fromUTCDate(fromW3CDateString(value))
  } catch (e) {}

  throw new Error('must be a SQL date')
}
