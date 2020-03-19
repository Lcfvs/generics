export async function redirector (location) {
  return ({ context, response }) => {
    response.redirect(location)

    return context
  }
}
