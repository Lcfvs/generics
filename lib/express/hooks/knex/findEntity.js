import searchEntities from './searchEntities.js'

export default function findEntity (dao, table) {
  const search = searchEntities(dao, table)
  const { id } = table.columns

  return async (
    {
      context,
      next,
      ...rest
    }, {
      constraints = [],
      selector = '*'
    } = {}) => {
    const { params: { [id.name]: value } } = context
    const query = { ...context.query, [id.name]: value }
    const options = { context: { ...context, params: {}, query }, next, ...rest }
    const { entities: [entity] } = await search(options, {
      constraints: [
        ...constraints,
        qb => qb.limit(1)
      ],
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
