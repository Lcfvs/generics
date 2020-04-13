import clean from '../../utils/clean.js'
import findEntity from './findEntity.js'

export default function createEntity (dao, table) {
  const find = findEntity(dao, table)
  const id = table.columns.id.column.name
  const qb = dao.qb

  return async ({ context, params = {}, ...rest }) => {
    const { body } = context
    const data = Object.entries(body).reduce(clean, {})
    const [value] = await qb(table.name).insert(data)

    return find({
      context: {
        ...context,
        params: {
          ...params,
          [id]: value
        }
      },
      params,
      ...rest
    })
  }
}
