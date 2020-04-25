import findEntity from './findEntity.js'

export default function deleteEntity (dao, table) {
  const find = findEntity(dao, table)
  const { archivedDate, id } = table.columns

  return async (
    {
      context,
      ...rest
    }, {
      constraints = [],
      selector = '*'
    } = {}) => {
    const { query: { confirmation } } = context
    const { entity } = await find({ context, ...rest }, { constraints, selector })

    if (confirmation) {
      await dao.query(table, constraints)
        .delete()
        .where(dao.prepare({ archivedDate, id }, {
          [archivedDate.name]: null,
          [id.name]: entity[id.name]
        }))
    }

    return {
      ...context,
      confirmation,
      entity
    }
  }
}
