import fromW3CTimeString from '../../../temporal/fromW3CTimeString.js'

export default function max ({
  max
}) {
  const timestamp = +fromW3CTimeString(max)

  return async value => {
    if (value <= timestamp) {
      return value
    }

    throw new TypeError('must be an anterior W3C time')
  }
}
