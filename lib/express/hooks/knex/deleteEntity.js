import findEntity from './findEntity.js'

export default function deleteEntity ({
  qb,
  table,
  id = 'id',
  ...rest
}) {
  const find = findEntity({ qb, table, id, ...rest })

  return async ({ context, ...rest }) => {
    const { entity } = await find({ context, ...rest })
    const { params: { [id]: value }, query: { confirmation } } = context

    if (confirmation) {
      await qb(table)
        .delete()
        .where({
          [id]: value
        })
    }

    return {
      ...context,
      confirmation,
      entity
    }
  }
}
