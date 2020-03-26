import fromSQLDateString from '@lcf.vs/generics/lib/tempor@lcf.vs/generics/lib/fromSQLDateString.js'
import fromSQLDatetimeString from '@lcf.vs/generics/lib/tempor@lcf.vs/generics/lib/fromSQLDatetimeString.js'
import fromSQLTimeString from '@lcf.vs/generics/lib/tempor@lcf.vs/generics/lib/fromSQLTimeString.js'
import column from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/column.js'
import format from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/format.js'
import isDateColumn from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/isDateColumn.js'
import isDatetimeColumn from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/isDatetimeColumn.js'
import isMigrationTable from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/isMigrationTable.js'
import isTimeColumn from '@lcf.vs/generics/lib/uti@lcf.vs/generics/lib/isTimeColumn.js'

export default function rows (qb) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const columns = await qb(table).columnInfo()
    const results = [params.result].flat().filter(Boolean)

    results.forEach(row => {
      Object.entries(row).forEach(([name, value]) => {
        const resolved = column(columns, params, name)

        if (isDatetimeColumn(resolved)) {
          row[name] = format(fromSQLDatetimeString, value)
        } else if (isDateColumn(resolved)) {
          row[name] = format(fromSQLDateString, value)
        } else if (isTimeColumn(resolved)) {
          row[name] = format(fromSQLTimeString, value)
        }
      })
    })
  }
}
