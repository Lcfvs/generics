export function redirector () {
  return async ({ context, response }) => {
    response.redirect(context.location)

    return context
  }
}
