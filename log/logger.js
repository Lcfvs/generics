export default function logger ({ handler = console, method = 'log' } = {}) {
  return async function ({ context }) {
    handler[method](context)

    return context
  }
}
