import hooks from 'knex-hooks'
import column from '../utils/column.js'
import isDatetimeColumn from '../utils/isDatetimeColumn.js'
import isMigrationTable from '../utils/isMigrationTable.js'
import ucFirst from '../../types/string/ucFirst.js'

export default function createdDate ({
  id = 'id'
}) {
  return async (when, method, table, params) => {
    if (isMigrationTable(table)) {
      return
    }

    const data = hooks.helpers.getInsertData(params.query)

    delete data[id]
  }
}
