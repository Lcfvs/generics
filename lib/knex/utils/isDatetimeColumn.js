export default function isDatetimeColumn (column = {}) {
  return column.type === 'datetime'
}
