import toISO from './toISO.js'
import toW3CDate from './toW3CDate.js'
import withDate from './withDate.js'

export default function fromW3CDate (value) {
  try {
    const [year, month, day] = value.split('-')
    const date = withDate(new Date(), +year, month - 1, +day)

    if (toW3CDate(date) === value) {
      return new Date(toISO(date).split('T')[0].concat('T00:00:00.000Z'))
    }
  } catch (e) {}

  throw new Error('must be a W3C date')
}
