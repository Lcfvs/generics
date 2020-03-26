import withMinutes from './withMinutes.js'

export default function addMinutes (date, minutes) {
  return withMinutes(date, date.getMinutes() + minutes)
}
