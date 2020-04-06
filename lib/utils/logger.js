export default function logger ({
  format = async context => context,
  handler = console,
  method = 'log'
} = {}) {
  return async value => {
    const parsed = await format(value)

    await handler[method](parsed)

    return value
  }
}
