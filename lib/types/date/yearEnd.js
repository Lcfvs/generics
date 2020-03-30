import withDate from './withDate.js'
import withTime from './withTime.js'

export default function yearEnd (year) {
  return withTime(withDate(new Date(), year, 11, 31), 23, 59, 59, 999)
}
