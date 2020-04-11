import hooks from 'knex-hooks'
import ucFirst from '../../types/string/ucFirst.js'
import isMigrationTable from '../utils/isMigrationTable.js'

export default function id ({
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
    const id = columns.id

    if (id) {
      delete data[id.column.name]
    }
  }
}
