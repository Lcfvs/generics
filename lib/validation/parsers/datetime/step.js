import fromW3CDatetimeString from '../../../temporal/fromW3CDatetimeString.js'

export default function step ({
  min,
  step
}) {
  const multiple = step * 1000
  const timestamp = +fromW3CDatetimeString(min)

  return async value => {
    if ((value - timestamp) % multiple === 0) {
      return value
    }

    throw new TypeError('must be a W3C datetime step multiple')
  }
}
