import hooks from 'knex-hooks'
import column from '../utils/column.js'
import isDatetimeColumn from '../utils/isDatetimeColumn.js'
import isMigrationTable from '../utils/isMigrationTable.js'

export default function createdDate ({
  qb,
  createdDate = 'createdDate',
  updatedDate = 'updatedDate',
  archivedDate = 'archivedDate'
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const data = hooks.helpers.getInsertData(params.query)
    const columns = await qb(table).columnInfo()

    if (isDatetimeColumn(column(columns, params, createdDate))) {
      data[createdDate] = new Date()
    }

    if (isDatetimeColumn(column(columns, params, updatedDate))) {
      data[updatedDate] = null
    }

    if (isDatetimeColumn(column(columns, params, archivedDate))) {
      data[archivedDate] = null
    }
  }
}
