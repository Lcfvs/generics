export default function parse (value) {
  if (Array.isArray(value)) {
    return [...value]
  }

  throw new TypeError('must be an array')
}
