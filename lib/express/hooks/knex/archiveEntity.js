import fromSQLDatetime from '../../../types/date/fromSQLDatetime.js'
import findEntity from './findEntity.js'

export default function archiveEntity (dao, table) {
  const find = findEntity(dao, table)
  const { archivedDate, id } = table.columns

  return async (
    {
      context,
      ...rest
    }, {
      constraints = [],
      selector = '*'
    } = {}) => {
    const fields = {}
    const { query: { confirmation, ...query } } = context
    const options = { context: { ...context, query }, ...rest }
    const { entity } = await find(options, { constraints, selector })

    if (confirmation) {
      const data = dao.prepare({ archivedDate }, {
        [archivedDate.name]: new Date()
      })

      await dao.query(table, constraints)
        .update(data)
        .where(dao.prepare({ archivedDate, id }, {
          [archivedDate.name]: null,
          [id.name]: entity[id.name]
        }))


      fields[archivedDate.name] = fromSQLDatetime(data[archivedDate.name])
    }

    return {
      ...context,
      confirmation,
      entity: {
        ...entity,
        ...fields
      }
    }
  }
}
