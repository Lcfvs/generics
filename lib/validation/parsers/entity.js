export default function entity ({ qb, table, id = 'id', archivedAt = 'archivedAt' }) {
  const query = qb(table).select('*')

  return async value => {
    return query.where({
      [id]: value,
      [archivedAt]: null
    }).first()
  }
}
