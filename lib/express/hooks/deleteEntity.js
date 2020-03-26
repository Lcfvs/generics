export default function deleteEntity ({ qb, table, id = 'id' }) {
  return async ({ context }) => {
    const { params: { id: entity }, query: { confirmation } } = context

    if (confirmation) {
      await qb(table)
        .delete()
        .where({
          [id]: entity[id]
        })
    }

    return context
  }
}
