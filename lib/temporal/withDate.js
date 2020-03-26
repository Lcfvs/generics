import clone from './clone.js'

export default function withDate (date, value) {
  const copy = clone(date)

  copy.setDate(value)

  return copy
}
