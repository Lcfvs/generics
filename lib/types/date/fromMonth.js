import array from '../array/array.js'
import newYear from './newYear.js'
import withDate from './withDate.js'

export default function fromMonth (month) {
  try {
    const [years, months] = array.parse(month)

    return withDate(newYear(years), years, months, 1)
  } catch (e) {
    throw new Error('must be a month')
  }
}
