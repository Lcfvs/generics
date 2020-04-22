import knex from 'knex'
import prepare from '../express/utils/prepare.js'
import fromSQL from './utils/fromSQL.js'
import identify from './utils/identify.js'
import query from './utils/query.js'

function row (row) {
  return Number.isSafeInteger(row)
    ? row
    : Object.fromEntries(Object.entries(row).map(column, this))
}

function column ([name, value]) {
  const { table: { columns } } = this
  const resolved = identify(this, name)

  try {
    return [
      name,
      fromSQL(columns[resolved].column.type, value)
    ]
  } catch (error) {
    throw new Error(`Invalid database data: '${name}' ${error.message}`)
  }
}

export default function configure (config, entities) {
  return Object.freeze({
    entities,
    prepare (columns, data) {
      return prepare(columns, data)
    },
    qb: knex({
      ...config,
      postProcessResponse: (result, { dao, query, table }) => {
        return Array.isArray(result)
          ? result.map(row, { dao, query, table })
          : row.call({ dao, query, table }, result)
      }
    }),
    query (table, constraints = []) {
      return query(this, table, constraints)
    }
  })
}
