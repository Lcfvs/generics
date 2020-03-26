export default function format (formatter, value) {
  return value && formatter(value)
}
