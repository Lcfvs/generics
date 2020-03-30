export default function url () {
  return async value => {
    try {
      const parsed = new URL(value)

      if (parsed.toString() === value) {
        return parsed
      }
    } catch (e) {}

    throw new TypeError('must be an URL')
  }
}
