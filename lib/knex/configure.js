import knex from 'knex'
import prepare from '../express/utils/prepare.js'
import fromSQL from './utils/fromSQL.js'
import identify from './utils/identify.js'
import query from './utils/query.js'

const proto = {
  keys: [],
  sources: {},
  getMigrations () {
    return this.keys
  },
  getMigrationName (migration) {
    return migration
  },
  getMigration (migration) {
    return this.sources[migration]
  }
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

function keys (sources, names) {
  return (names.length ? names : Object.keys(sources))
    .sort()
}

function row (row) {
  return Number.isSafeInteger(row)
    ? row
    : Object.fromEntries(Object.entries(row).map(column, this))
}

export default function configure (config, entities) {
  return Object.freeze({
    entities,
    async down (sources, ...names) {
      const [, logs] = await this.qb.migrate.down({
        migrationSource: {
          ...proto,
          keys: keys(sources, names),
          sources
        }
      })

      if (logs.length) {
        console.log(`migrated: ${logs.join(', ')}`)
      } else {
        console.log('schema already up to date')
      }

      return this.seed(sources, ...logs)
    },
    prepare (columns, data) {
      return prepare(columns, data)
    },
    qb: knex({
      ...config,
      postProcessResponse: (result, context = null) => {
        return context === null
          ? result
          : Array.isArray(result)
            ? result.map(row, context)
            : row.call(context, result)
      }
    }),
    query (table, constraints = []) {
      return query(this, table, constraints)
    },
    async seed (sources, ...names) {
      const logs = await keys(sources, names)
        .reduce(async (names, name) => {
          const seeded = await names

          if (sources[name].seed) {
            await sources[name].seed(this.query(sources[name].table))

            seeded.push(name)
          }

          return seeded
        }, [])

      if (logs.length) {
        console.log(`seeded: ${logs.join(', ')}`)
      } else {
        console.log('seeds already up to date')
      }
    },
    async up (sources, ...names) {
      const [, logs] = await this.qb.migrate.latest({
        migrationSource: {
          ...proto,
          keys: keys(sources, names),
          sources
        }
      })

      if (logs.length) {
        console.log(`migrated: ${logs.join(', ')}`)
      } else {
        console.log('schema already up to date')
      }

      return this.seed(sources, ...logs)
    }
  })
}
