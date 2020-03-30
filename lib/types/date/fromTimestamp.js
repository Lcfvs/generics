import number from '../number/number.js'
import toTimestamp from './toTimestamp.js'

export default function fromTimestamp (value) {
  try {
    const date = new Date(number.parse(value))

    if (toTimestamp(date) === value) {
      return date
    }
  } catch (e) {}

  throw new TypeError('must be a timestamp')
}
