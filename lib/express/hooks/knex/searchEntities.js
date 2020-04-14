import clean from '../../utils/clean.js'

export default function searchEntity (dao, table) {
  const qb = dao.qb

  return async ({ context }) => {
    const { query = {} } = context
    const data = Object.entries(query)
      .filter(([name]) => table.columns[name])
      .reduce(clean, {})

    return {
      ...context,
      entities: (await qb(table.name).select('*').where(data))
        .map(entity => ({ ...entity }))
    }
  }
}
