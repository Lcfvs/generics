import fromW3CDateString from '../../../temporal/fromW3CDateString.js'

export default function step ({
  min,
  step
}) {
  const multiple = step * 8640000
  const timestamp = +fromW3CDateString(min)

  return async value => {
    if ((value - timestamp) % multiple === 0) {
      return value
    }

    throw new TypeError('must be a W3C date step multiple')
  }
}
