import toSQLDatetimeString from '@lcf.vs/generics/lib/temporal/toSQLDatetimeString.js'

export default function fromSQLDatetimeString (value) {
  try {
    const date = new Date(value)

    if (toSQLDatetimeString(date)) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a SQL datetime')
}
