import withDate from './withDate.js'
import withMonths from './withMonths.js'

export default function lastDayOfDecember (date) {
  return withDate(withMonths(date, 11), 31)
}
