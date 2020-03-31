export default function getEntity (
  qb,
  table,
  id = 'id'
) {
  return async ({ context, next }) => {
    const { params: { [id]: entity } } = context

    if (!entity) {
      return next()
    }

    return {
      ...context,
      entity
    }
  }
}
