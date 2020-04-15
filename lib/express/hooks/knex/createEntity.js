import clean from '../../utils/clean.js'
import findEntity from './findEntity.js'

export default function createEntity (dao, table) {
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
    const { body } = context
    const data = Object.entries(body).reduce(clean, {})
    const [value] = await constraints(qb(table.name).insert(data))
    const params = { [id]: value }
    const options = { context: { ...context, params }, ...rest }
    const { entity } = await find(options, { selector })

    return {
      ...context,
      entity
    }
  }
}
