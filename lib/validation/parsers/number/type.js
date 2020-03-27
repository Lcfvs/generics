export default function type () {
  return async value => {
    const parsed = +value

    if (!Number.isNaN(parsed) && parsed.toString(10) === value) {
      return parsed
    }

    throw new TypeError('must be a W3C number')
  }
}
