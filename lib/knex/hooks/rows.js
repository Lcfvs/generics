import fromSQLDateString from '@lcf.vs/generics/lib/temporal/fromSQLDateString.js'
import fromSQLDatetimeString from '@lcf.vs/generics/lib/temporal/fromSQLDatetimeString.js'
import fromSQLTimeString from '@lcf.vs/generics/lib/temporal/fromSQLTimeString.js'
import column from '@lcf.vs/generics/lib/knex/utils/column.js'
import format from '@lcf.vs/generics/lib/knex/utils/format.js'
import isDateColumn from '@lcf.vs/generics/lib/knex/utils/isDateColumn.js'
import isDatetimeColumn from '@lcf.vs/generics/lib/knex/utils/isDatetimeColumn.js'
import isMigrationTable from '@lcf.vs/generics/lib/knex/utils/isMigrationTable.js'
import isTimeColumn from '@lcf.vs/generics/lib/knex/utils/isTimeColumn.js'

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
