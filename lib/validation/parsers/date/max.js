import fromW3CDateString from '../../../temporal/fromW3CDateString.js'

export default function max ({
  max
}) {
  const timestamp = +fromW3CDateString(max)

  return async value => {
    if (value <= timestamp) {
      return value
    }

    throw new TypeError('must be an anterior W3C date')
  }
}
