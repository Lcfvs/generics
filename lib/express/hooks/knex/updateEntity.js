import findEntity from './findEntity.js'

export default function updateEntity (dao, table) {
  const find = findEntity(dao, table)
  const { archivedDate, createdDate, id, updatedDate, ...columns } = table.columns

  return async (
    {
      context,
      ...rest
    }, {
      constraints = [],
      selector = '*'
    } = {}) => {
    const { body } = context
    const data = dao.prepare({ ...columns, updatedDate }, {
      ...body,
      [updatedDate.name]: new Date()
    })
    let entity = await find({ context, ...rest }, { constraints, selector })

    if (Object.keys(data).length) {
      await dao.query(table, constraints)
        .update(data)
        .where(dao.prepare({ archivedDate, id }, {
          [archivedDate.name]: null,
          [id.name]: entity[id.name]
        }))

      entity = (await find({
        context: {
          ...context,
          params: {
            [id.name]: entity[id.name]
          },
          query: {}
        },
        ...rest
      }, { selector })).entity
    }

    return {
      ...context,
      entity
    }
  }
}
