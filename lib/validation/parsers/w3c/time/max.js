import fromW3CTime from '../../../../types/date/fromW3CTime.js'
import date from '../../native/date/date.js'

function error () {
  throw new Error('must be a lower time')
}

export default function max ({
  max
}) {
  const parse = date.max({
    max: fromW3CTime(max)
  })

  return value => parse(value)
    .catch(error)
}
