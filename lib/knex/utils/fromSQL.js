import fromSQLDate from '../../types/date/fromSQLDate.js'
import fromSQLDatetime from '../../types/date/fromSQLDatetime.js'
import fromSQLTime from '../../types/date/fromSQLTime.js'
import fromUTC from '../../types/date/fromUTC.js'
import fromW3CMonth from '../../types/date/fromW3CMonth.js'
import fromW3CWeek from '../../types/date/fromW3CWeek.js'
import isDate from '../../types/date/isDate.js'
import format from '../../types/string/format.js'

const formatters = {
  datetime (value) {
    return isDate(value)
      ? fromUTC(value)
      : format(fromSQLDatetime, value)
  },
  date (value) {
    return format(fromSQLDate, value)
  },
  month (value) {
    return format(fromW3CMonth, value)
  },
  time (value) {
    return format(fromSQLTime, value)
  },
  week (value) {
    return format(fromW3CWeek, value)
  }
}

export default function (type, value) {
  return formatters[type]
    ? formatters[type](value)
    : value
}
