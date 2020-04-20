import addMinutes from '@lcf.vs/generics/lib/types/date/addMinutes.js'
import fromW3CDate from '@lcf.vs/generics/lib/types/date/fromW3CDate.js'
import fromW3CTime from '@lcf.vs/generics/lib/types/date/fromW3CTime.js'
import midnight from '@lcf.vs/generics/lib/types/date/midnight.js'
import toISO from '@lcf.vs/generics/lib/types/date/toISO.js'
import toUTC from '@lcf.vs/generics/lib/types/date/toUTC.js'
import toW3CDate from '@lcf.vs/generics/lib/types/date/toW3CDate.js'
import toW3CDatetime from '@lcf.vs/generics/lib/types/date/toW3CDatetime.js'
import toW3CTime from '@lcf.vs/generics/lib/types/date/toW3CTime.js'
import fromW3CDatetime from '../../../../types/date/fromW3CDatetime.js'
import withMilliseconds from '../../../../types/date/withMilliseconds.js'
import string from '../../../../types/string/string.js'
import date from '../../native/date/date.js'

const day = 24 * 60 * 60 * 1000

function format (date) {
  return new Date(toW3CDate(date))
}

export default function step ({
  min,
  step = '1'
}) {
  const parse = date.step({
    min: format(fromW3CDate(min)),
    step: +string.parse(step) * day
  })

  return async value => {
    try {
      await parse(format(value))

      return value
    } catch (e) {
      throw new Error('must be a date step multiple')
    }
  }
}
