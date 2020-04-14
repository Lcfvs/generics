import clean from '../../utils/clean.js'

export default function searchEntities (dao, table) {
  const qb = dao.qb

  return async ({ context }) => {
    const {
      constraints = statement => statement,
      query = {},
      selector = '*'
    } = context

    const data = Object.entries(query)
      .filter(([name]) => !table.virtuals[name])
      .reduce(clean, {})

    const statement = await qb(table.name)
      .select(selector)
      .where(data)

    return {
      ...context,
      entities: await constraints(statement)
        .map(entity => ({ ...entity }))
    }
  }
}
