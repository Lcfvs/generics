import fromW3CTimeString from './fromW3CTimeString.js'
import toSQLTimeString from './toSQLTimeString.js'
import toUTCDate from './toUTCDate.js'
import withSeconds from './withSeconds.js'

export default function fromSQLTimeString (value) {
  try {
    const [hours, minutes, seconds] = value.split(':')
    const time = fromW3CTimeString(`${hours}:${minutes}`)
    const date = toUTCDate(withSeconds(time, +seconds))

    if (toSQLTimeString(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a SQL time')
}
