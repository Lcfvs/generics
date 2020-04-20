import toW3CDatetime from '@lcf.vs/generics/lib/types/date/toW3CDatetime.js'
import fromW3CDatetime from '../../../../types/date/fromW3CDatetime.js'
import string from '../../../../types/string/string.js'
import date from '../../native/date/date.js'

const second = 1000

function format (date) {
  return new Date(`${toW3CDatetime(date, true)}.000Z`)
}

export default function step ({
  min,
  step = '60'
}) {
  const parse = date.step({
    min: format(fromW3CDatetime(min)),
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
