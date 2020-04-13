export default function redirector () {
  return async ({ context, response }) => {
    const { location } = context

    if (location) {
      response.redirect(location)
    }

    return context
  }
}
