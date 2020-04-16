export default function type (name, properties, parsers) {
  const column = Object.freeze({
    ...properties,
    name
  })

  return Object.freeze({
    column,
    parsers: Object.freeze(parsers(column))
  })
}
