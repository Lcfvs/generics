import hooks from 'knex-hooks'
import column from '../utils/column.js'
import isDatetimeColumn from '../utils/isDatetimeColumn.js'
import isMigrationTable from '../utils/isMigrationTable.js'

export default function updatedDate ({
  qb,
  createdDate = 'createdDate',
  updatedDate = 'updatedDate'
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const data = hooks.helpers.getUpdateData(params.query)
    const columns = await qb(table).columnInfo()

    if (isDatetimeColumn(column(columns, params, createdDate))) {
      delete data[createdDate]
    }

    if (isDatetimeColumn(column(columns, params, updatedDate))) {
      data[updatedDate] = new Date()
    }
  }
}
