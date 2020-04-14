import toSQLDate from '../../types/date/toSQLDate.js'
import toSQLDatetime from '../../types/date/toSQLDatetime.js'
import toSQLTime from '../../types/date/toSQLTime.js'
import toW3CMonth from '../../types/date/toW3CMonth.js'
import toW3CWeek from '../../types/date/toW3CWeek.js'
import format from '../../types/string/format.js'

function any (formatter, value) {
  return Array.isArray(value)
    ? value.map(current => format(formatter, current))
    : format(formatter, value)
}

function toSQLFile (value) {
  return (value || {}).buffer || value
}

const formatters = {
  datetime (value) {
    return any(toSQLDatetime, value)
  },
  date (value) {
    return any(toSQLDate, value)
  },
  file (value) {
    return any(toSQLFile, value)
  },
  month (value) {
    return any(toW3CMonth, value)
  },
  time (value) {
    return any(toSQLTime, value)
  },
  week (value) {
    return any(toW3CWeek, value)
  }
}

export default function (type, value) {
  return formatters[type]
    ? formatters[type](value)
    : value
}
