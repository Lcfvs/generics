const asPattern = /\s+as\s+/i

export default function identify ({ table: { columns }, query }, name = null) {
  let column

  if (name !== null) {
    column = columns[name].column

    if (!column) {
      query._statements.every(statement => {
        if (statement.grouping === 'columns') {
          return !statement.value.every(value => {
            const [original, alias] = value.split(asPattern)

            if (alias === name) {
              column = columns[original].column

              return false
            }

            return true
          })
        }

        return true
      })
    }
  }

  if (!column) {
    throw new RangeError(`unknown column ${name || ''}`.trim())
  }

  return column.name
}
