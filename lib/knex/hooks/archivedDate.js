import column from '../utils/column.js'
import isMigrationTable from '../utils/isMigrationTable.js'

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
      params.query.andWhere({
        [archivedDate]: null
      })
    }
  }
}
