import fromW3CDate from '../../../../types/date/fromW3CDate.js'
import date from '../../native/date/date.js'

export default function max ({
  max
}) {
  return date.max({
    max: fromW3CDate(max)
  })
}
