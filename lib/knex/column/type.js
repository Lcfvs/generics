export default function type (name, properties, parsers) {
  const column = Object.freeze({
    ...properties,
    name
  })

  return Object.freeze({
    [name]: Object.freeze({
      column,
      parsers (extraParsers = []) {
        return Object.freeze({
          [name]: Object.freeze([
            ...extraParsers,
            ...parsers(column)
          ])
        })
      }
    })
  })
}
