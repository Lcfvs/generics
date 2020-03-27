import fromW3CDatetimeString from '../../../temporal/fromW3CDatetimeString.js'

export default function min ({
  min
}) {
  const timestamp = +fromW3CDatetimeString(min)

  return async value => {
    if (value >= timestamp) {
      return value
    }

    throw new TypeError('must be a posterior W3C datetime')
  }
}
