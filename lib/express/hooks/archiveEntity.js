export default function archiveEntity ({ qb, table, id = 'id', archivedAt = 'archivedAt' }) {
  return async ({ context }) => {
    const { params: { id: entity }, query: { confirmation } } = context

    if (confirmation) {
      await qb(table)
        .update({
          [archivedAt]: new Date()
        }).where({
          [id]: entity[id]
        })
    }

    return context
  }
}
