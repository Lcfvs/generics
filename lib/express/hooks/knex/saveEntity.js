import parsers from '../../../validation/parsers/parsers.js'
import clean from '../../utils/clean.js'

export default function saveEntity ({
  qb,
  table,
  id = 'id'
}) {
  const type = parsers.knex.type({ qb, table, id })

  return async ({ context }) => {
    const { body, params: { [id]: entity = {} } = {} } = context
    const data = Object.entries(body).reduce(clean, {})

    if (entity[id]) {
      await qb(table).update(data)
    } else {
      entity[id] = (await qb(table).insert(data))[0]
    }

    return {
      ...context,
      entity: await type(entity[id])
    }
  }
}
