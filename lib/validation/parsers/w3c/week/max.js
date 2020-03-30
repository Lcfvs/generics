import fromW3CWeek from '../../../../types/date/fromW3CWeek.js'
import week from '../../native/week/week.js'

function error () {
  throw new Error('must be a lower week')
}

export default function max ({
  max
}) {
  const parse = week.max({
    max: fromW3CWeek(max)
  })

  return value => parse(value)
    .catch(error)
}
