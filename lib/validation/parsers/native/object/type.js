export default function type () {
  return async value => {
    if (value && typeof value === 'object') {
      return value
    }

    throw new TypeError('must be an object')
  }
}
