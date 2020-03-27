import hooks from 'knex-hooks'
import toSQLDateString from '../../temporal/toSQLDateString.js'
import toSQLDatetimeString from '../../temporal/toSQLDatetimeString.js'
import toSQLTimeString from '../../temporal/toSQLTimeString.js'
import column from '../utils/column.js'
import format from '../utils/format.js'
import isDateColumn from '../utils/isDateColumn.js'
import isDatetimeColumn from '../utils/isDatetimeColumn.js'
import isMigrationTable from '../utils/isMigrationTable.js'
import isTimeColumn from '../utils/isTimeColumn.js'
import ucFirst from '../../utils/string/ucFirst.js'

export default function data (qb) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const getter = `get${ucFirst(method)}Data`
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
