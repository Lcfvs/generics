export default function archiveEntity ({
  qb,
  table,
  id = 'id',
  archivedDate = 'archivedDate'
}) {
  return async ({ context }) => {
    const { params: { [id]: entity }, query: { confirmation } } = context

    if (confirmation) {
      await qb(table)
        .update({
          [archivedDate]: new Date()
        }).where({
          [id]: entity[id]
        })
    }

    return {
      ...context,
      confirmation,
      entity
    }
  }
}
