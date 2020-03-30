import fromUTC from './fromUTC.js'
import fromW3CDatetime from './fromW3CDatetime.js'
import toSQLDatetime from './toSQLDatetime.js'

export default function fromSQLDatetime (value) {
  try {
    const date = fromUTC(fromW3CDatetime(value.replace(' ', 'T'), true))

    if (toSQLDatetime(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a SQL datetime')
}
