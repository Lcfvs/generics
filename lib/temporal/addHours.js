import withHours from '@lcf.vs/generics/lib/temporal/withHours.js'

export default function addHours (date, hours) {
  return withHours(date, date.getHours() + hours)
}
