import clone from '@lcf.vs/generics/lib/temporal/clone.js'

export default function withTime (date, hours, minutes, seconds, millis) {
  const copy = clone(date)

  copy.setHours(hours, minutes, seconds, millis)

  return copy
}
