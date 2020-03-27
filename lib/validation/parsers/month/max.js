import fromW3CMonthString from '../../../temporal/fromW3CMonthString.js'

export default function max ({
  max
}) {
  const timestamp = +fromW3CMonthString(max)

  return async value => {
    if (value <= timestamp) {
      return value
    }

    throw new TypeError('must be an anterior W3C month')
  }
}
