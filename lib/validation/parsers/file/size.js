export default function accept ({
  dataset: {
    maxSize
  }
}) {
  const limit = +maxSize

  return async value => {
    try {
      const { size } = value

      if (size <= limit) {
        return value
      }
    } catch (e) {}

    throw new TypeError('must be a accepted file size')
  }
}
