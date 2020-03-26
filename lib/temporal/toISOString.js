import clone from '@lcf.vs/generics/lib/temporal/clone.js'

export default function toISOString (date) {
  return clone(date).toISOString()
}
