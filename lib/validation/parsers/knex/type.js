export default function type (dao, table) {
  const { id } = table.columns

  return async value => {
    const entity = await dao.query(table)
      .where(dao.prepare({ id }, {
        [id.name]: value
      }))
      .first()

    if (entity) {
      return {
        ...entity
      }
    }

    throw new Error(`must be one of the ${table.name} entities`)
  }
}
