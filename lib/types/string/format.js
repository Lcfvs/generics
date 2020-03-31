export default function format (formatter, value = null) {
  return value !== null
    ? formatter(value)
    : value
}
