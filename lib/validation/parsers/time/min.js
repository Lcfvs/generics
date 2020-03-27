import fromW3CTimeString from '../../../temporal/fromW3CTimeString.js'

export default function min ({
  min
}) {
  const timestamp = +fromW3CTimeString(min)

  return async value => {
    if (value >= timestamp) {
      return value
    }

    throw new TypeError('must be a posterior W3C time')
  }
}
