export default function type ({
  qb,
  table,
  id = 'id'
}) {
  return async value => {
    const entity = await qb(table)
      .select('*')
      .where({
        [id]: value
      })
      .first()

    if (entity) {
      return entity
    }

    throw new Error(`must be one of the ${table} entities`)
  }
}
