export default function type (knex, table) {
  const id = table.columns.id.column.name
  const qb = knex.qb

  return async value => {
    const entity = await qb(table.name)
      .select()
      .where({
        [id]: value
      })
      .first()

    if (entity) {
      return entity
    }

    throw new Error(`must be one of the ${table.name} entities`)
  }
}
