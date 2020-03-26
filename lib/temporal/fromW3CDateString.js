import midnight from '@lcf.vs/generics/lib/temporal/midnight.js'
import toW3CDateString from '@lcf.vs/generics/lib/temporal/toW3CDateString.js'

export default function fromW3CDateString (value) {
  try {
    const date = midnight(new Date(value))

    if (toW3CDateString(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a W3C date')
}
