export default function logger ({
  handler = console,
  format = context => context,
  method = 'log'
} = {}) {
  return async ({ context }) => {
    handler[method](format(context))

    return context
  }
}
