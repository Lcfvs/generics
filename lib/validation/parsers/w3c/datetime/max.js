import fromW3CDatetime from '../../../../types/date/fromW3CDatetime.js'
import date from '../../native/date/date.js'

function error () {
  throw new Error('must be a lower datetime')
}

export default function max ({
  max
}) {
  const parse = date.max({
    max: fromW3CDatetime(max)
  })

  return value => parse(value)
    .catch(error)
}
