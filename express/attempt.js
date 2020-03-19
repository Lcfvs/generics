export default function attempt ([...hooks]) {
  return async (req, res, next) => {
    try {
      let context = {}

      for (let i = 0; i < hooks.length && !res.headersSent; i += 1) {
        context = await hooks[i]({ context, next, req, res })
      }
    } catch (error) {
      next(error)
    }
  }
}
