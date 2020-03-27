import clone from './clone.js'

export default function withMonths (date, value) {
  const copy = clone(date)

  copy.setMonth(value)

  return copy
}
