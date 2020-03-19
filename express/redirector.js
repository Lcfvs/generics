export function redirector (location) {
  return async ({ context, response }) => {
    response.redirect(location)

    return context
  }
}
