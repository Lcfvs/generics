import fromW3CTimeString from '../../../temporal/fromW3CTimeString.js'

export default function type () {
  return value => fromW3CTimeString(value)
}
