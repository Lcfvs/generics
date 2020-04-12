export default function xhr () {
  return async ({ context, request: { xhr } }) => {
    return {
      ...context,
      xhr
    }
  }
}
