import toISO from './toISO.js'
import toW3CTime from './toW3CTime.js'
import withTime from './withTime.js'

const messages = [
  'must be a W3C time',
  'must be a W3C time with seconds'
]

export default function fromW3CTime (value, withSeconds = false) {
  try {
    const [hours, minutes, seconds = 0] = value.split(':')
    const time = withTime(new Date(), +hours, +minutes, +seconds, 0)

    if (toW3CTime(time, withSeconds) === value) {
      return new Date(toISO(time).split('.')[0].concat('.000Z'))
    }
  } catch (e) {}

  throw new Error(messages[+withSeconds])
}
