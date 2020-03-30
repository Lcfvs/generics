export default function pattern ({
  pattern,
  type = ''
}) {
  return async value => {
    if (pattern.test(value)) {
      return value
    }

    throw new TypeError(`must match format ${type}`.trim())
  }
}
