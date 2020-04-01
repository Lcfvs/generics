import fromW3CTime from '../../../../types/date/fromW3CTime.js'
import string from '../../../../types/string/string.js'
import date from '../../native/date/date.js'

const second = 1000

function error () {
  throw new Error('must be a time step multiple')
}

export default function step ({
  min,
  step = '60'
}) {
  const parse = date.step({
    min: fromW3CTime(min),
    step: +string.parse(step) * second
  })

  return value => parse(value)
    .catch(error)
}
