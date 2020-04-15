import findEntity from './findEntity.js'

export default function deleteEntity (dao, table) {
  const find = findEntity(dao, table)
  const id = table.columns.id.column.name
  const qb = dao.qb

  return async (
    {
      context,
      ...rest
    }, {
      constraints = statement => statement,
      selector = '*'
    } = {}) => {
    const { params: { [id]: value }, query: { confirmation } } = context
    const { entity } = await find({ context, ...rest }, { constraints, selector })

    if (confirmation) {
      await constraints(qb(table.name).delete().where({ [id]: value }))
    }

    return {
      ...context,
      confirmation,
      entity
    }
  }
}
