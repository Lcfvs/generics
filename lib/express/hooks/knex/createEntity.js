import clean from '../../utils/clean.js'
import findEntity from './findEntity.js'

export default function createEntity ({
  qb,
  table,
  id = 'id',
  ...rest
}) {
  const find = findEntity({ qb, table, id, ...rest })

  return async ({ context, params = {}, ...rest }) => {
    const { body } = context
    const data = Object.entries(body).reduce(clean, {})
    const [value] = await qb(table).insert(data)

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
