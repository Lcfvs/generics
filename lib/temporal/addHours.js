import withHours from './withHours.js'

export default function addHours (date, hours) {
  return withHours(date, date.getHours() + hours)
}
