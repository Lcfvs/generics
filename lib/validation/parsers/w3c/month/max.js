import fromW3CMonth from '../../../../types/date/fromW3CMonth.js'
import month from '../../native/month/month.js'

function error () {
  throw new Error('must be a lower month')
}

export default function max ({
  max
}) {
  const parse = month.max({
    max: fromW3CMonth(max)
  })

  return value => parse(value)
    .catch(error)
}
