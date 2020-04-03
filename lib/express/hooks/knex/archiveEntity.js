import findEntity from './findEntity.js'

export default function archiveEntity ({
  qb,
  table,
  id = 'id',
  archivedDate = 'archivedDate',
  ...rest
}) {
  const find = findEntity({ qb, table, id, ...rest })

  return async ({ context, ...rest }) => {
    const { entity } = await find({ context, ...rest })
    const { params: { [id]: value }, query: { confirmation } } = context
    const fields = { [archivedDate]: new Date() }

    if (confirmation) {
      await qb(table)
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
