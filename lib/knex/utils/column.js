const asPattern = /\s+as\s+/i

export default function column (columns, params, name = null) {
  let column

  if (name !== null) {
    column = columns[name]

    if (!column) {
      params.query._statements.every(statement => {
        if (statement.grouping === 'columns') {
          return !statement.value.every(value => {
            const [original, alias] = value.split(asPattern)

            if (alias === name) {
              column = columns[original]

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
