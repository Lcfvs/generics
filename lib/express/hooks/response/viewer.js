export default function viewer (format = body => ({ body })) {
  return async ({ context }) => {
    const { xhr = false, ...rest } = context
    const { body = {}, headers = {}, meta = {} } = await format(rest, xhr)

    return {
      body,
      headers,
      meta: {
        xhr,
        ...meta
      }
    }
  }
}
