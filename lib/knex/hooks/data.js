import hooks from 'knex-hooks'
import toSQLDateString from '@lcf.vs/generics/lib/temporal/toSQLDateString.js'
import toSQLDatetimeString from '@lcf.vs/generics/lib/temporal/toSQLDatetimeString.js'
import toSQLTimeString from '@lcf.vs/generics/lib/temporal/toSQLTimeString.js'
import column from '@lcf.vs/generics/lib/utils/column.js'
import format from '@lcf.vs/generics/lib/utils/format.js'
import isDateColumn from '@lcf.vs/generics/lib/utils/isDateColumn.js'
import isDatetimeColumn from '@lcf.vs/generics/lib/utils/isDatetimeColumn.js'
import isMigrationTable from '@lcf.vs/generics/lib/utils/isMigrationTable.js'
import isTimeColumn from '@lcf.vs/generics/lib/utils/isTimeColumn.js'
import ucfirst from '@lcf.vs/generics/lib/utils/string/ucfirst.js'

export default function data (qb) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const getter = `get${ucfirst(method)}Data`
    const data = hooks.helpers[getter](params.query)
    const columns = await qb(table).columnInfo()

    Object.entries(data).forEach(([name, value]) => {
      const resolved = column(columns, params, name)

      if (isDatetimeColumn(resolved)) {
        data[name] = format(toSQLDatetimeString, value)
      } else if (isDateColumn(resolved)) {
        data[name] = format(toSQLDateString, value)
      } else if (isTimeColumn(resolved)) {
        data[name] = format(toSQLTimeString, value)
      }
    })
  }
}
