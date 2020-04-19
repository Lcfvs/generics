import fromW3CDate from './fromW3CDate.js'

export default function fromSQLDate (value) {
  try {
    return fromW3CDate(value)
  } catch (e) {}

  throw new Error('must be a SQL date')
}
