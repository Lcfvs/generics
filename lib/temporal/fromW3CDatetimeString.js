import toW3CDatetimeString from '@lcf.vs/generics/lib/temporal/toW3CDatetimeString.js'

export default function fromW3CDatetimeString (value) {
  try {
    const date = new Date(value)

    if (toW3CDatetimeString(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a W3C datetime')
}
