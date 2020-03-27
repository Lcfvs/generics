import fromW3CMonthString from '../../../temporal/fromW3CMonthString.js'

export default function type () {
  return async value => fromW3CMonthString(value)
}
