import withDate from './withDate.js'
import withMonth from './withMonth.js'

export default function lastDayOfDecember (date) {
  return withDate(withMonth(date, 11), 31)
}
