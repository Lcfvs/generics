export default function max ({
  max
}) {
  const limit = +max

  return async value => {
    if (value <= limit) {
      return value
    }

    throw new TypeError('must be a lower W3C number')
  }
}
