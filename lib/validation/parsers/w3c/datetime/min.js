import fromW3CDatetime from '../../../../types/date/fromW3CDatetime.js'
import string from '../../../../types/string/string.js'
import date from '../../native/date/date.js'

function error () {
  throw new Error('must be a greater datetime')
}

export default function min ({
  min,
  step = '60'
}) {
  const parse = date.min({
    min: fromW3CDatetime(min, +string.parse(step) < 60)
  })

  return value => parse(value)
    .catch(error)
}
