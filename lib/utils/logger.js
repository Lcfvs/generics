export default function logger ({
  format = context => context,
  handler = console,
  method = 'log'
} = {}) {
  return async value => {
    const parsed = format(value)

    handler[method](parsed)

    return parsed
  }
}
