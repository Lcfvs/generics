export default function parse (value) {
  if (typeof value === 'string') {
    return value
  }

  throw new TypeError('must be a string')
}
