import identify from '../utils/identify.js'
import isMigrationTable from '../utils/isMigrationTable.js'

export default function statements ({
  entities
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const entity = entities[table]
    const columns = entity.table.columns
    const archivedDate = columns.archivedDate

    if (archivedDate && identify(columns, params, archivedDate.column.name)) {
      params.query.andWhere({
        [archivedDate.column.name]: null
      })
    }
  }
}
