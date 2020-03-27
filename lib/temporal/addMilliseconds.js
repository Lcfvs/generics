import withMilliseconds from './withMilliseconds.js'

export default function addMilliseconds (date, milliseconds) {
  return withMilliseconds(date, date.getMilliseconds() + milliseconds)
}
