import column from './column/column.js'

export default {
  id: column.number('id', { min: '0' }),
  archivedDate: column.datetimeWithSeconds('archivedDate'),
  createdDate: column.datetimeWithSeconds('createdDate'),
  updatedDate: column.datetimeWithSeconds('updatedDate')
}
