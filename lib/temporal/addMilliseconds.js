import withMilliseconds from '@lcf.vs/generics/lib/temporal/withMilliseconds.js'

export default function addMilliseconds (date, milliseconds) {
  return withMilliseconds(date, date.getMilliseconds() + milliseconds)
}
