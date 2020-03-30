export default function parse (value) {
  if (value !== null && typeof value === 'object') {
    return value
  }

  throw new TypeError('must be a object')
}
