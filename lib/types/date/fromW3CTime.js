import toW3CTime from './toW3CTime.js'

const messages = [
  'must be a W3C time',
  'must be a W3C time with seconds'
]

export default function fromW3CTime (value, withSeconds = false) {
  try {
    const date = new Date(`1970-01-01T${value}`)

    if (toW3CTime(date, withSeconds) === value) {
      return date
    }
  } catch (e) {}

  throw new Error(messages[+withSeconds])
}
