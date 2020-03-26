import clone from './clone.js'

export default function withYear (date, value) {
  const copy = clone(date)

  copy.setFullYear(value)

  return copy
}
