export default function archiveEntity ({
  qb,
  table,
  id = 'id',
  archivedDate = 'archivedDate'
}) {
  return async ({ context }) => {
    const { params: { [id]: entity }, query: { confirmation } } = context
    const fields = { [archivedDate]: new Date() }

    if (confirmation) {
      await qb(table)
        .update(fields).where({
          [id]: entity[id]
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
