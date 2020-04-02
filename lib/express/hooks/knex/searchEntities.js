import clean from '../../utils/clean.js'

export default function saveEntity ({
  qb,
  table
}) {
  return async ({ context }) => {
    const { query = {} } = context
    const data = Object.entries(query).reduce(clean, {})

    return {
      ...context,
      entities: await qb(table).select('*').where(data)
    }
  }
}
