import fromW3CDate from './fromW3CDate.js'
import toW3CMonth from './toW3CMonth.js'

export default function fromW3CMonth (value) {
  try {
    const date = fromW3CDate(`${value}-01`)

    if (toW3CMonth(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a W3C month')
}
