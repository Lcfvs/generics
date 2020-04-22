import findEntity from './findEntity.js'

export default function createEntity (dao, table) {
  const find = findEntity(dao, table)
  const { archivedDate, id, updatedDate, ...columns } = table.columns
  const { createdDate } = columns

  return async (
    {
      context,
      ...rest
    }, {
      constraints = [],
      selector = '*'
    } = {}) => {
    const { body } = context
    const data = dao.prepare(columns, { ...body, [createdDate.name]: new Date() })
    const [value] = await dao.query(table).insert(data)
    const params = { [id.name]: value }
    const options = { context: { ...context, params }, ...rest }
    const { entity } = await find(options, { selector })

    return {
      ...context,
      entity
    }
  }
}
