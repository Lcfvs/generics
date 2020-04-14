import identify from '../utils/identify.js'
import isMigrationTable from '../utils/isMigrationTable.js'
import toSQL from '../utils/toSQL.js'

export default function statements ({
  entities
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const entity = entities[table]
    const columns = entity.table.columns

    params.query._statements.forEach(statement => {
      const value = statement.value
      const column = statement.column

      if (column === undefined || value === undefined) {
        return
      }

      const resolved = identify(columns, params, column)

      statement.value = toSQL(columns[resolved].column.type, value)
    })
  }
}
