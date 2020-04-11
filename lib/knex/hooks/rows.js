import isDate from '../../types/date/isDate.js'
import fromSQL from '../utils/fromSQL.js'
import identify from '../utils/identify.js'
import isMigrationTable from '../utils/isMigrationTable.js'

export default function rows ({
  entities
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const results = [params.result].flat().filter(Boolean)
    const entity = entities[table]
    const columns = entity.table.columns

    results.forEach(row => {
      Object.entries(row).forEach(([name, value]) => {
        if (isDate(value)) {
          return
        }

        const resolved = identify(columns, params, name)

        try {
          row[name] = fromSQL(columns[resolved].column.type, value)
        } catch (error) {
          throw new Error(`Invalid database data: '${name}' ${error.message}`)
        }
      })
    })
  }
}
