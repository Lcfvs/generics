export default function logger ({
  handler = console,
  method = 'log'
} = {}) {
  return async ({ context }) => {
    handler[method](context)

    return context
  }
}
