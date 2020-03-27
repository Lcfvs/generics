export default function min ({
  min
}) {
  const limit = +min

  return async value => {
    if (value >= limit) {
      return value
    }

    throw new TypeError('must be a greater W3C number')
  }
}
