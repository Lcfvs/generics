import toTimestamp from '@lcf.vs/generics/lib/temporal/toTimestamp.js'

export default function clone (date) {
  return new Date(+toTimestamp(date))
}
