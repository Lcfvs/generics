export default function isTimeColumn (column = {}) {
  return column.type === 'time'
}
