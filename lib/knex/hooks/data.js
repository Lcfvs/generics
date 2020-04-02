import hooks from 'knex-hooks'
import toSQLDate from '../../types/date/toSQLDate.js'
import toSQLDatetime from '../../types/date/toSQLDatetime.js'
import toSQLTime from '../../types/date/toSQLTime.js'
import format from '../../types/string/format.js'
import ucFirst from '../../types/string/ucFirst.js'
import column from '../utils/column.js'
import isDateColumn from '../utils/isDateColumn.js'
import isDatetimeColumn from '../utils/isDatetimeColumn.js'
import isMigrationTable from '../utils/isMigrationTable.js'
import isTimeColumn from '../utils/isTimeColumn.js'

export default function data ({
  qb
}) {
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
        data[name] = format(toSQLDatetime, value)
      } else if (isDateColumn(resolved)) {
        data[name] = format(toSQLDate, value)
      } else if (isTimeColumn(resolved)) {
        data[name] = format(toSQLTime, value)
      }
    })
  }
}
