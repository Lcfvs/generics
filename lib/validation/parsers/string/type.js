export default function type () {
  return async value => {
    if (typeof value === 'string' && [...value].join('') === value) {
      return value
    }

    throw new TypeError('must be a string')
  }
}
