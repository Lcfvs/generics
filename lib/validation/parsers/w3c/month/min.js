import fromW3CMonth from '../../../../types/date/fromW3CMonth.js'
import month from '../../native/month/month.js'

function error () {
  throw new Error('must be a greater month')
}

export default function min ({
  min
}) {
  const parse = month.min({
    min: fromW3CMonth(min)
  })

  return value => parse(value)
    .catch(error)
}
