import withDate from '@lcf.vs/generics/lib/temporal/withDate.js'

export default function addDays (date, days) {
  return withDate(date, date.getDate() + days)
}
