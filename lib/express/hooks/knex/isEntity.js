export default function isEntity () {
  return async ({ context, next }) => {
    const { params: { id: entity } } = context

    if (!entity) {
      return next()
    }

    return context
  }
}
