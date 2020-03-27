import fromW3CDateString from '../../../temporal/fromW3CDateString.js'

export default function min ({
  min
}) {
  const timestamp = +fromW3CDateString(min)

  return async value => {
    if (value >= timestamp) {
      return value
    }

    throw new TypeError('must be a posterior W3C date')
  }
}
