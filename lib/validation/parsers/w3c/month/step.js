import fromW3CMonth from '../../../../types/date/fromW3CMonth.js'
import string from '../../../../types/string/string.js'
import month from '../../native/month/month.js'

function error () {
  throw new Error('must be a month step multiple')
}

export default function step ({
  min,
  step = '1'
}) {
  const parse = month.step({
    min: fromW3CMonth(min),
    step: +string.parse(step)
  })

  return value => parse(value)
    .catch(error)
}
