import clean from '../../utils/clean.js'
import findEntity from './findEntity.js'

export default function updateEntity (dao, table) {
  const find = findEntity(dao, table)
  const id = table.columns.id.column.name
  const qb = dao.qb

  return async ({ context, ...rest }) => {
    await find({ context, ...rest })

    const { body } = context
    const { params: { [id]: value } } = context
    const data = Object.entries(body).reduce(clean, {})

    await qb(table.name).update(data).where({
      [id]: value
    })

    return find({ context, ...rest })
  }
}
