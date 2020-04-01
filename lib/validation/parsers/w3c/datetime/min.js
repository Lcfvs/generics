import fromW3CDatetime from '../../../../types/date/fromW3CDatetime.js'
import date from '../../native/date/date.js'

function error () {
  throw new Error('must be a greater datetime')
}

export default function min ({
  min
}) {
  const parse = date.min({
    min: fromW3CDatetime(min)
  })

  return value => parse(value)
    .catch(error)
}
