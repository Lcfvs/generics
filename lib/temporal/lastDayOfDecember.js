import withDate from '@lcf.vs/generics/lib/temporal/withDate.js'
import withMonths from '@lcf.vs/generics/lib/temporal/withMonths.js'

export default function lastDayOfDecember (date) {
  return withDate(withMonths(date, 11), 31)
}
