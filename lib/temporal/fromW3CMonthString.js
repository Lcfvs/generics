import fromW3CDateString from './fromW3CMonthString.js'
import toW3CMonthString from './toW3CMonthString.js'

export default function fromW3CMonthString (value) {
  try {
    const date = fromW3CDateString(`${value}-01`)

    if (toW3CMonthString(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a W3C month')
}
