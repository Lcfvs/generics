import toSQLDateString from '@lcf.vs/generics/lib/tempor@lcf.vs/generics/lib/toSQLDateString.js'
import toSQLDatetimeString from '@lcf.vs/generics/lib/tempor@lcf.vs/generics/lib/toSQLDatetimeString.js'
import toSQLTimeString from '@lcf.vs/generics/lib/tempor@lcf.vs/generics/lib/toSQLTimeString.js'
import column from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/column.js'
import format from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/format.js'
import isDateColumn from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/isDateColumn.js'
import isDatetimeColumn from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/isDatetimeColumn.js'
import isMigrationTable from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/isMigrationTable.js'
import isTimeColumn from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/isTimeColumn.js'

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
