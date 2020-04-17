import column from './column/column.js'

export default {
  ...column.number('id', { min: '0' }),
  ...column.datetimeWithSeconds('archivedDate'),
  ...column.datetimeWithSeconds('createdDate'),
  ...column.datetimeWithSeconds('updatedDate')
}
