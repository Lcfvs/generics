const base = 'http://localhost:80'

export default function path () {
  return async value => {
    try {
      const parsed = new URL(value, base)

      if (parsed.toString() === `${base}${value}`) {
        return parsed
      }
    } catch (e) {}

    throw new TypeError('must be a path')
  }
}
