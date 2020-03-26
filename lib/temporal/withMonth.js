import clone from './clone.js'

export default function withMonth (date, value) {
  const copy = clone(date)

  copy.setMonth(value)

  return copy
}
