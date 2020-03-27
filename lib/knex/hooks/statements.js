import toSQLDateString from '../../temporal/toSQLDateString.js'
import toSQLDatetimeString from '../../temporal/toSQLDatetimeString.js'
import toSQLTimeString from '../../temporal/toSQLTimeString.js'
import column from '../utils/column.js'
import format from '../utils/format.js'
import isDateColumn from '../utils/isDateColumn.js'
import isDatetimeColumn from '../utils/isDatetimeColumn.js'
import isMigrationTable from '../utils/isMigrationTable.js'
import isTimeColumn from '../utils/isTimeColumn.js'

export default function statements (qb) {
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
          ? value.map(current => format(toSQLDatetimeString, current))
          : format(toSQLDatetimeString, value)
      } else if (isDateColumn(resolved)) {
        statement.value = Array.isArray(value)
          ? value.map(current => format(toSQLDateString, current))
          : format(toSQLDateString, value)
      } else if (isTimeColumn(resolved)) {
        statement.value = Array.isArray(value)
          ? value.map(current => format(toSQLTimeString, current))
          : format(toSQLTimeString, value)
      }
    })
  }
}
