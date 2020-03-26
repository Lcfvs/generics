import clone from '@lcf.vs/generics/lib/temporal/clone.js'

export default function withMonths (date, value) {
  const copy = clone(date)

  copy.setMonth(value)

  return copy
}
