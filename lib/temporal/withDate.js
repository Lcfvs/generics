import clone from '@lcf.vs/generics/lib/temporal/clone.js'

export default function withDate (date, value) {
  const copy = clone(date)

  copy.setDate(value)

  return copy
}
