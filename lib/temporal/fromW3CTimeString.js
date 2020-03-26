import toW3CTimeString from '@lcf.vs/generics/lib/temporal/toW3CTimeString.js'

export default function fromW3CTimeString (value) {
  try {
    const date = new Date(`1970-01-01T${value}`)

    if (toW3CTimeString(date) === value) {
      return date
    }
  } catch (e) {}

  throw new Error('must be a W3C time')
}
