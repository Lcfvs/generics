import hooks from 'knex-hooks'
import ucFirst from '../../types/string/ucFirst.js'
import identify from '../utils/identify.js'
import isMigrationTable from '../utils/isMigrationTable.js'
import toSQL from '../utils/toSQL.js'

export default function data ({
  entities
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const getter = `get${ucFirst(method)}Data`
    const data = hooks.helpers[getter](params.query)
    const entity = entities[table]
    const columns = entity.table.columns

    Object.entries(data).forEach(([name, value]) => {
      const resolved = identify(columns, params, name)

      data[name] = toSQL(columns[resolved].column.type, value)
    })
  }
}
