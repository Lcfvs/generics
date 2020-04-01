export default function maxlength ({
  maxlength
}) {
  const limit = +maxlength

  return async value => {
    if (value.length <= limit) {
      return value
    }

    throw new TypeError('must be a shorter string')
  }
}
