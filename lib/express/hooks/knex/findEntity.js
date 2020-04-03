import type from '../../../validation/parsers/knex/type.js'

export default function findEntity ({
  qb,
  table,
  id = 'id',
  ...rest
}) {
  const find = type({ qb, table, id, ...rest })

  return async ({ context, next }) => {
    const { params: { [id]: value } } = context

    try {
      return {
        ...context,
        entity: await find(value)
      }
    } catch (e) {
      return next()
    }
  }
}
