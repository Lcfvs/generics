export default function parse (value) {
  if (Number.isFinite(value)) {
    return value
  }

  throw new TypeError('must be a number')
}
