export default function attempt ([...hooks]) {
  return async (request, response, next) => {
    try {
      let context = {}

      for (let i = 0; i < hooks.length && !response.headersSent; i += 1) {
        context = await hooks[i]({ context, next, request, response })
      }
    } catch (error) {
      next(error)
    }
  }
}
