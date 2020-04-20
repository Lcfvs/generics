import addMinutes from '@lcf.vs/generics/lib/types/date/addMinutes.js'
import midnight from '@lcf.vs/generics/lib/types/date/midnight.js'
import toW3CDate from '@lcf.vs/generics/lib/types/date/toW3CDate.js'
import fromW3CDate from '../../../../types/date/fromW3CDate.js'
import withMilliseconds from '../../../../types/date/withMilliseconds.js'
import date from '../../native/date/date.js'

function format (date) {
  return new Date(toW3CDate(date))
}

export default function min ({
  min
}) {
  const parse = date.min({
    min: format(fromW3CDate(min))
  })

  return async value => {
    try {
      await parse(format(value))

      return value
    } catch (e) {
      throw new Error('must be a greater date')
    }
  }
}
