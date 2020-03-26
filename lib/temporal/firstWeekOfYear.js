import clone from '@lcf.vs/generics/lib/temporal/clone.js'

export default function firstWeekOfYear (date) {
  return [clone(date).getFullYear(), 1]
}
