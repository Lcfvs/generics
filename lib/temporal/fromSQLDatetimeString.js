import toSQLDatetimeString from './toSQLDatetimeString.js'

export default function fromSQLDatetimeString (value) {
  try {
    const date = new Date(value)

    if (toSQLDatetimeString(date)) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a SQL datetime')
}
