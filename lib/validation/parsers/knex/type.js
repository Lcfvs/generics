export default function type ({
  qb,
  table,
  id = 'id',
  archivedAt = 'archivedAt'
}) {
  return value => qb(table)
    .select('*')
    .where({
      [id]: value,
      [archivedAt]: null
    })
    .first()
}
