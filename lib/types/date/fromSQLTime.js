import fromUTC from './fromUTC.js'
import fromW3CTime from './fromW3CTime.js'
import toSQLTime from './toSQLTime.js'

export default function fromSQLTime (value) {
  try {
    const date = fromUTC(fromW3CTime(value, true))

    if (toSQLTime(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a SQL time')
}
