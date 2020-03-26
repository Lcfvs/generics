import fromW3CTimeString from '@lcf.vs/generics/lib/temporal/fromW3CTimeString.js'
import toSQLTimeString from '@lcf.vs/generics/lib/temporal/toSQLTimeString.js'
import toUTCDate from '@lcf.vs/generics/lib/temporal/toUTCDate.js'
import withSeconds from '@lcf.vs/generics/lib/temporal/withSeconds.js'

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
