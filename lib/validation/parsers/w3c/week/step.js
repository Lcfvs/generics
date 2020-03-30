import fromW3CWeek from '../../../../types/date/fromW3CWeek.js'
import string from '../../../../types/string/string.js'
import week from '../../native/week/week.js'

function error () {
  throw new Error('must be a week step multiple')
}

export default function step ({
  min,
  step = '1'
}) {
  const parse = week.step({
    min: fromW3CWeek(min),
    step: +string.parse(step)
  })

  return value => parse(value)
    .catch(error)
}
