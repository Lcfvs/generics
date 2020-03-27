import withDate from './withDate.js'

export default function addDays (date, days) {
  return withDate(date, date.getDate() + days)
}
