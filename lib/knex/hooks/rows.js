import fromSQLDateString from '../../temporal/fromSQLDateString.js'
import fromSQLDatetimeString from '../../temporal/fromSQLDatetimeString.js'
import fromSQLTimeString from '../../temporal/fromSQLTimeString.js'
import column from '../utils/column.js'
import format from '../utils/format.js'
import isDateColumn from '../utils/isDateColumn.js'
import isDatetimeColumn from '../utils/isDatetimeColumn.js'
import isMigrationTable from '../utils/isMigrationTable.js'
import isTimeColumn from '../utils/isTimeColumn.js'

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
