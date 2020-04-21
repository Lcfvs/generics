export default function redirector ({
  code = 301,
  location
} = {}) {
  const defaults = {
    code,
    location
  }

  return async ({ context, response }) => {
    const { code = defaults.code, location = defaults.location } = context

    if (location) {
      response.redirect(code, location)
    }

    return context
  }
}
