import toSQLDateString from '@lcf.vs/generics/lib/temporal/toSQLDateString.js'
import toSQLDatetimeString from '@lcf.vs/generics/lib/temporal/toSQLDatetimeString.js'
import toSQLTimeString from '@lcf.vs/generics/lib/temporal/toSQLTimeString.js'
import column from '@lcf.vs/generics/lib/knex/utils/column.js'
import format from '@lcf.vs/generics/lib/knex/utils/format.js'
import isDateColumn from '@lcf.vs/generics/lib/knex/utils/isDateColumn.js'
import isDatetimeColumn from '@lcf.vs/generics/lib/knex/utils/isDatetimeColumn.js'
import isMigrationTable from '@lcf.vs/generics/lib/knex/utils/isMigrationTable.js'
import isTimeColumn from '@lcf.vs/generics/lib/knex/utils/isTimeColumn.js'

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
