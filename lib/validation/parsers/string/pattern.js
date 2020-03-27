export default function pattern ({
  pattern,
  type = ''
}) {
  const expression = new RegExp(pattern)

  return async value => {
    if (expression.test(value)) {
      return value
    }

    throw new TypeError(`must match format ${type}`.trim())
  }
}
