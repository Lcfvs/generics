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
  qb,
  archivedDate = 'archivedDate'
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const columns = await qb(table).columnInfo()

    if (column(columns, params, archivedDate)) {
      params.query.where({
        [archivedDate]: null
      })
    }
  }
}
