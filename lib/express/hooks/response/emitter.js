export default function emitter (emitter) {
  return async ({ context }) => {
    emitter.emit('context', context)

    return context
  }
}
