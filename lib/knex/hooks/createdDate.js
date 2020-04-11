import hooks from 'knex-hooks'
import identify from '../utils/identify.js'
import isMigrationTable from '../utils/isMigrationTable.js'

export default function createdDate ({
  entities
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const data = hooks.helpers.getInsertData(params.query)
    const entity = entities[table]
    const columns = entity.table.columns
    const createdDate = columns.createdDate
    const updatedDate = columns.updatedDate
    const archivedDate = columns.archivedDate

    if (createdDate && identify(columns, params, createdDate.column.name)) {
      data[createdDate.column.name] = new Date()
    }

    if (updatedDate && identify(columns, params, updatedDate.column.name)) {
      data[updatedDate.column.name] = null
    }

    if (archivedDate && identify(columns, params, archivedDate.column.name)) {
      data[archivedDate.column.name] = null
    }
  }
}
