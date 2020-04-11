import clean from '../../utils/clean.js'

export default function searchEntity (knex, table) {
  const qb = knex.qb

  return async ({ context }) => {
    const { query = {} } = context
    const data = Object.entries(query).reduce(clean, {})

    return {
      ...context,
      entities: (await qb(table.name).select('*').where(data))
        .map(entity => ({ ...entity }))
    }
  }
}
