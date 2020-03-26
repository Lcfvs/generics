import clone from '@lcf.vs/generics/lib/temporal/clone.js'

export default function fromTimestamp (value) {
  try {
    const date = clone(new Date(value))

    if (+date === value) {
      return date
    }
  } catch (e) {}

  throw new TypeError('must be a timestamp')
}
