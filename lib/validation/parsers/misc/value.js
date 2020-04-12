const nullish = ['', null]

export default function value ({ value: defaultValue } = {}) {
  return async (value = null) => {
    return nullish.includes(value)
      ? defaultValue
      : value
  }
}
