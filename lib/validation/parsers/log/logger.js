export default function logger ({
  handler = console,
  format = context => context,
  method = 'log'
} = {}) {
  return async value => {
    handler[method](format(value))

    return value
  }
}
