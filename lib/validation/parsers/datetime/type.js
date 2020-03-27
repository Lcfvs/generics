import fromW3CDatetimeString from '../../../temporal/fromW3CDatetimeString.js'

export default function type () {
  return async value => fromW3CDatetimeString(value)
}
