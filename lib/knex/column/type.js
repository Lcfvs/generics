import toSQL from '../utils/toSQL.js'

export default function type (name, properties, parsers) {
  const column = Object.freeze({
    ...properties,
    name
  })

  return Object.freeze({
    [name]: Object.freeze({
      column,
      name,
      parsers (extraParsers = []) {
        return Object.freeze({
          [name]: Object.freeze([
            ...extraParsers,
            ...parsers(column)
          ])
        })
      },
      toSQL (value, alias = name) {
        return toSQL(column, value, alias)
      }
    })
  })
}
