const nullish = ['', null]

export default function coalesce ({ coalesce }) {
  return async (value = null) => {
    return nullish.includes(value)
      ? coalesce
      : value
  }
}
