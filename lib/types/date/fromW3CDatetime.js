import toW3CDatetime from './toW3CDatetime.js'

const messages = [
  'must be a W3C datetime',
  'must be a W3C datetime with seconds'
]

export default function fromW3CDatetime (value, withSeconds = false) {
  try {
    const date = new Date(value)

    if (toW3CDatetime(date, withSeconds) === value) {
      return date
    }
  } catch (e) {}

  throw new Error(messages[+withSeconds])
}
