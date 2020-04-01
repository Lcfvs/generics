export default function minlength ({
  minlength
}) {
  const limit = +minlength

  return async value => {
    if (value.length >= limit) {
      return value
    }

    throw new TypeError('must be a longer string')
  }
}
