import fromW3CMonthString from '../../../temporal/fromW3CMonthString.js'

export default function min ({
  min
}) {
  const timestamp = +fromW3CMonthString(min)

  return async value => {
    if (value >= timestamp) {
      return value
    }

    throw new TypeError('must be a posterior W3C month')
  }
}
