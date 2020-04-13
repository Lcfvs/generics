import findEntity from './findEntity.js'

export default function archiveEntity (dao, table) {
  const find = findEntity(dao, table)
  const archivedDate = table.columns.archivedDate.column.name
  const id = table.columns.id.column.name
  const qb = dao.qb

  return async ({ context, ...rest }) => {
    const { entity } = await find({ context, ...rest })
    const { params: { [id]: value }, query: { confirmation } } = context
    const fields = {}

    if (confirmation) {
      fields[archivedDate] = new Date()

      await qb(table.name)
        .update(fields).where({
          [id]: value
        })
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
