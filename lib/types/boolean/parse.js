export default function parse (value) {
  if (typeof value === 'boolean') {
    return value
  }

  throw new TypeError('must be a boolean')
}
