import toW3CTime from '@lcf.vs/generics/lib/types/date/toW3CTime.js'
import fromW3CTime from '../../../../types/date/fromW3CTime.js'
import string from '../../../../types/string/string.js'
import date from '../../native/date/date.js'

function format (date) {
  return new Date(`1000-01-01T${toW3CTime(date, true)}.000Z`)
}

const second = 1000

export default function step ({
  min,
  step = '60'
}) {
  const parse = date.step({
    min: format(fromW3CTime(min)),
    step: +string.parse(step) * second
  })

  return async value => {
    try {
      await parse(format(value))

      return value
    } catch (e) {
      throw new Error('must be a datetime step multiple')
    }
  }
}
