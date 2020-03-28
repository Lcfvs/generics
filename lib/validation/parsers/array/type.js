export default function type () {
  return async value => {
    if (Array.isArray(value)) {
      return value
    }

    throw new TypeError('must be an array')
  }
}
