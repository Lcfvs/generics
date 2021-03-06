import toW3CDatetime from './toW3CDatetime.js'
import withDate from './withDate.js'
import withTime from './withTime.js'

const messages = [
  'must be a W3C datetime',
  'must be a W3C datetime with seconds'
]

export default function fromW3CDatetime (value, withSeconds = false) {
  try {
    const parts = value.split('T')
    const [year, month, day] = parts[0].split('-')
    const [hours, minutes, seconds = 0] = parts[1].split(':')
    const date = withDate(new Date(), +year, month - 1, +day)
    const datetime = withTime(date, +hours, +minutes, +seconds, 0)

    if (toW3CDatetime(datetime, withSeconds) === value) {
      return datetime
    }
  } catch (e) {}

  throw new Error(messages[+withSeconds])
}
