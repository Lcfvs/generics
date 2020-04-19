import toW3CTime from './toW3CTime.js'
import withTime from './withTime.js'

const messages = [
  'must be a W3C time',
  'must be a W3C time with seconds'
]

export default function fromW3CTime (value, withSeconds = false) {
  try {
    const [hours, minutes, seconds = 0] = value.split(':')
    const date = withTime(new Date(), +hours, +minutes, +seconds, 0)

    if (toW3CTime(date, withSeconds) === value) {
      return date
    }
  } catch (e) {}

  throw new Error(messages[+withSeconds])
}
