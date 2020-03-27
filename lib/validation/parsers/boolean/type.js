export default function type () {
  return async value => {
    const parsed = value === '1'

    if (value === (+parsed).toString()) {
      return parsed
    }

    throw new TypeError(`must be a boolean`)
  }
}
