import clean from '../../utils/clean.js'
import findEntity from './findEntity.js'

export default function updateEntity ({
  qb,
  table,
  id = 'id',
  ...rest
}) {
  const find = findEntity({ qb, table, id, ...rest })

  return async ({ context, ...rest }) => {
    await find({ context, ...rest })

    const { body } = context
    const data = Object.entries(body).reduce(clean, {})

    await qb(table).update(data)

    return find({ context, ...rest })
  }
}
