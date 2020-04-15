import findEntity from './findEntity.js'

export default function deleteEntity (dao, table) {
  const find = findEntity(dao, table)
  const id = table.columns.id.column.name
  const qb = dao.qb

  return async ({
    constraints = statement => statement,
    context,
    selector = '*',
    ...rest
  }) => {
    const { params: { [id]: value }, query: { confirmation } } = context
    const { entity } = await find({
      constraints,
      context,
      selector,
      ...rest
    })

    if (confirmation) {
      await qb(table.name)
        .delete()
        .where({
          [id]: value
        })
    }

    return {
      ...context,
      confirmation,
      entity
    }
  }
}
