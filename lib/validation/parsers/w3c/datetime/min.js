import toW3CDatetime from '@lcf.vs/generics/lib/types/date/toW3CDatetime.js'
import fromW3CDatetime from '../../../../types/date/fromW3CDatetime.js'
import date from '../../native/date/date.js'

function format (date) {
  return new Date(`${toW3CDatetime(date, true)}.000Z`)
}

export default function min ({
  min
}) {
  const parse = date.min({
    min: format(fromW3CDatetime(min))
  })

  return async value => {
    try {
      await parse(format(value))

      return value
    } catch (e) {
      throw new Error('must be a greater datetime')
    }
  }
}
