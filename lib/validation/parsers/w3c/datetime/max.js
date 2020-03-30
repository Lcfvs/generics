import fromW3CDatetime from '../../../../types/date/fromW3CDatetime.js'
import string from '../../../../types/string/string.js'
import date from '../../native/date/date.js'

function error () {
  throw new Error('must be a lower datetime')
}

export default function max ({
  max,
  step = '60'
}) {
  const parse = date.max({
    max: fromW3CDatetime(max, +string.parse(step) < 60)
  })

  return value => parse(value)
    .catch(error)
}
