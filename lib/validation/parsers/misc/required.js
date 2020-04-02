export default function required () {
  return async (value = null) => {
    if (value !== '' && value !== null) {
      return value
    }

    throw new TypeError('must be provided')
  }
}
