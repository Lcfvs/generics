export default function searchEntities (dao, table) {
  return async (
    {
      context
    }, {
      constraints = [],
      selector = '*'
    } = {}) => {
    const { query = {} } = context
    const { archivedDate, ...columns } = table.columns

    const entities = await dao.query(table, constraints)
      .select(selector)
      .andWhere(qb => qb.where(dao.prepare(columns, query)))
      .andWhere(qb => qb.where(dao.prepare({ archivedDate }, {
        [archivedDate.name]: null
      })))

    return {
      ...context,
      entities: entities.map(entity => ({ ...entity }))
    }
  }
}
