import clean from '../../utils/clean.js'
import findEntity from './findEntity.js'

export default function updateEntity (dao, table) {
  const find = findEntity(dao, table)
  const id = table.columns.id.column.name
  const qb = dao.qb

  return async ({
    constraints = statement => statement,
    context,
    selector = '*',
    ...rest
  }) => {
    const { body } = context
    const { params: { [id]: value } } = context
    const data = Object.entries(body).reduce(clean, {})
    const options = {
      constraints,
      context,
      selector,
      ...rest
    }
    let entity = await find(options)

    if (Object.keys(data).length) {
      await qb(table.name).update(data).where({
        [id]: value
      })

      entity = (await find(options)).entity
    }

    return {
      ...context,
      entity
    }
  }
}
