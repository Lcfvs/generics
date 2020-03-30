import fromW3CDate from '../../../../types/date/fromW3CDate.js'
import date from '../../native/date/date.js'

export default function min ({
  min
}) {
  return date.min({
    min: fromW3CDate(min)
  })
}
