import midnight from './midnight.js'
import toW3CDate from './toW3CDate.js'

export default function fromW3CDate (value) {
  try {
    const date = midnight(new Date(value))

    if (toW3CDate(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a W3C date')
}
