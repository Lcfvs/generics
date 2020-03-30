import parsers from '../../../validation/parsers/parsers.js'

function clean (result, [name, value]) {
  return {
    ...result,
    ...value === undefined
      ? {}
      : {
        [name]: value
      }
  }
}

export default function saveEntity ({
  qb,
  table,
  id = 'id'
}) {
  const type = parsers.knex.type({ qb, table, id})

  return async ({ context }) => {
    let { body, params: { id: entity } = {} } = context
    const data = Object.entries(body).reduce(clean, {})

    if (entity) {
      await qb(table).update(data)
      entity = await type(entity[id])
    } else {
      const [id] =await qb(table).insert(data)
      entity = await type(id)
    }

    return {
      ...context,
      entity
    }
  }
}
