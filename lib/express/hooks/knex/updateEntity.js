import clean from '../../utils/clean.js'
import findEntity from './findEntity.js'

export default function updateEntity (dao, table) {
  const find = findEntity(dao, table)
  const id = table.columns.id.column.name
  const qb = dao.qb

  return async (
    {
      context,
      ...rest
    }, {
      constraints = statement => statement,
      selector = '*'
    } = {}) => {
    const { body } = context
    const { params: { [id]: value } } = context
    const data = Object.entries(body).reduce(clean, {})
    let entity = await find({ context, ...rest }, { constraints, selector })

    if (Object.keys(data).length) {
      await constraints(qb(table.name).update(data).where({ [id]: value }))
      entity = (await find({ context, ...rest }, { selector })).entity
    }

    return {
      ...context,
      entity
    }
  }
}
