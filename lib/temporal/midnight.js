import withTime from '@lcf.vs/generics/lib/temporal/withHours.js'

export default function midnight (date) {
  return withTime(date, 0, 0, 0, 0)
}
