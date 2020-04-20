import toW3CTime from '@lcf.vs/generics/lib/types/date/toW3CTime.js'
import fromW3CTime from '../../../../types/date/fromW3CTime.js'
import date from '../../native/date/date.js'

function format (date) {
  return new Date(`1000-01-01T${toW3CTime(date, true)}.000Z`)
}

export default function min ({
  min
}) {
  const parse = date.min({
    min: format(fromW3CTime(min))
  })

  return async value => {
    try {
      await parse(format(value))

      return value
    } catch (e) {
      throw new Error('must be a greater time')
    }
  }
}
