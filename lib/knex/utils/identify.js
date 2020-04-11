const asPattern = /\s+as\s+/i

export default function identify (columns, params, name = null) {
  let column

  if (name !== null) {
    column = columns[name].column.name

    if (!column) {
      params.query._statements.every(statement => {
        if (statement.grouping === 'columns') {
          return !statement.value.every(value => {
            const [original, alias] = value.split(asPattern)

            if (alias === name) {
              column = columns[original].column.name

              return false
            }

            return true
          })
        }

        return true
      })
    }
  }

  return column
}
