import searchEntities from './searchEntities.js'

export default function findEntity (dao, table) {
  const search = searchEntities(dao, table)
  const id = table.columns.id.column.name

  return async (
    {
      context,
      next,
      ...rest
    }, {
      constraints = statement => statement,
      selector = '*'
    } = {}) => {
    const { params: { [id]: value } } = context
    const query = { [id]: value }
    const options = { context: { ...context, params: {}, query }, next, ...rest }
    const { entities: [entity] } = await search(options, {
      constraints (statement) {
        return constraints(statement)
          .first()
      },
      selector
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
