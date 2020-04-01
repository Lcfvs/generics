import fromW3CTime from '../../../../types/date/fromW3CTime.js'
import date from '../../native/date/date.js'

function error () {
  throw new Error('must be a greater time')
}

export default function min ({
  min
}) {
  const parse = date.min({
    min: fromW3CTime(min)
  })

  return value => parse(value)
    .catch(error)
}
