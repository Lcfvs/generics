import fromW3CDatetimeString from '../../../temporal/fromW3CDatetimeString.js'

export default function max ({
  max
}) {
  const timestamp = +fromW3CDatetimeString(max)

  return async value => {
    if (value <= timestamp) {
      return value
    }

    throw new TypeError('must be an anterior W3C datetime')
  }
}
