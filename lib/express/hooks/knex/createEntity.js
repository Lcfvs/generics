import clean from '../../utils/clean.js'
import findEntity from './findEntity.js'

export default function createEntity (knex, table) {
  const find = findEntity(knex, table)
  const id = table.columns.id.column.name
  const qb = knex.qb

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
