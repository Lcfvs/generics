export default function viewer (format = body => ({ body })) {
  return async ({ context }) => {
    const { xhr, ...rest } = context
    const { body = {}, headers = {}, meta = {} } = await format(rest)

    return {
      body,
      headers,
      meta: {
        ...meta,
        xhr
      }
    }
  }
}
