import fromW3CDateString from '../../../temporal/fromW3CDateString.js'

export default function type () {
  return async value => fromW3CDateString(value)
}
