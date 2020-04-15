import searchEntities from './searchEntities.js'

export default function findEntity (dao, table) {
  const search = searchEntities(dao, table)
  const id = table.columns.id.column.name

  return async ({
    constraints = statement => statement,
    context,
    next,
    selector = '*',
    ...rest
  }) => {
    const { params: { [id]: value } } = context
    const { entities: [entity] } = await search({
      constraints,
      context: {
        ...context,
        params: { [id]: value }
      },
      next,
      selector,
      ...rest
    })

    if (!entity) {
      next()
    }

    return {
      ...context,
      entity: {
        ...entity
      }
    }
  }
}
