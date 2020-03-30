import fromW3CWeek from '../../../../types/date/fromW3CWeek.js'
import week from '../../native/week/week.js'

function error () {
  throw new Error('must be a greater week')
}

export default function min ({
  min
}) {
  const parse = week.min({
    min: fromW3CWeek(min)
  })

  return value => parse(value)
    .catch(error)
}
