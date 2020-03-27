export default function nullable () {
  return async (value = null) => {
    return value === '' || value === null
      ? null
      : value
  }
}
