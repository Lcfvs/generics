import fromW3CTime from '../../../../types/date/fromW3CTime.js'
import string from '../../../../types/string/string.js'
import date from '../../native/date/date.js'

function error () {
  throw new Error('must be a greater time')
}

export default function min ({
  min,
  step = '60'
}) {
  const parse = date.min({
    min: fromW3CTime(min, +string.parse(step) < 60)
  })

  return value => parse(value)
    .catch(error)
}
