import hooks from 'knex-hooks'
import identify from '../utils/identify.js'
import isMigrationTable from '../utils/isMigrationTable.js'

export default function updatedDate ({
  entities
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const data = hooks.helpers.getUpdateData(params.query)
    const entity = entities[table]
    const columns = entity.table.columns
    const createdDate = columns.createdDate
    const updatedDate = columns.updatedDate

    if (createdDate && identify(columns, params, createdDate.column.name)) {
      delete data[createdDate.column.name]
    }

    if (updatedDate && identify(columns, params, updatedDate.column.name)) {
      data[updatedDate.column.name] = new Date()
    }
  }
}
