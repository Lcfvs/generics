import toSQLDate from '../../types/date/toSQLDate.js'
import toSQLDatetime from '../../types/date/toSQLDatetime.js'
import toSQLTime from '../../types/date/toSQLTime.js'
import column from '../utils/column.js'
import format from '../../types/string/format.js'
import isDateColumn from '../utils/isDateColumn.js'
import isDatetimeColumn from '../utils/isDatetimeColumn.js'
import isMigrationTable from '../utils/isMigrationTable.js'
import isTimeColumn from '../utils/isTimeColumn.js'

export default function statements ({
  qb
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const columns = await qb(table).columnInfo()

    params.query._statements.forEach(statement => {
      const value = statement.value

      if (value === undefined) {
        return
      }

      const resolved = column(columns, params, statement.column)

      if (isDatetimeColumn(resolved)) {
        statement.value = Array.isArray(value)
          ? value.map(current => format(toSQLDatetime, current))
          : format(toSQLDatetime, value)
      } else if (isDateColumn(resolved)) {
        statement.value = Array.isArray(value)
          ? value.map(current => format(toSQLDate, current))
          : format(toSQLDate, value)
      } else if (isTimeColumn(resolved)) {
        statement.value = Array.isArray(value)
          ? value.map(current => format(toSQLTime, current))
          : format(toSQLTime, value)
      }
    })
  }
}
