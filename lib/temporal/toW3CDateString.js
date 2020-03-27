import toDateString from './toDateString.js'
import toW3CMonthString from './toW3CMonthString.js'

export default function toW3CDateString (date) {
  const month = toW3CMonthString(date)
  const day = toDateString(date)

  return `${month}-${day}`
}
