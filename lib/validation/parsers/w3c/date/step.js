import fromW3CDate from '../../../../types/date/fromW3CDate.js'
import string from '../../../../types/string/string.js'
import date from '../../native/date/date.js'

const day = 24 * 60 * 60 * 1000

export default function step ({
  min,
  step = '1'
}) {
  return date.step({
    min: fromW3CDate(min),
    step: +string.parse(step) * day
  })
}
