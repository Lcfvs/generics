import configure from '@lcf.vs/generics/lib/knex/qb.js'
import data from '../../lib/knex/hooks/data.js'
import rows from '../../lib/knex/hooks/rows.js'
import statements from '../../lib/knex/hooks/statements.js'

const config = {
  client: 'sqlite3',
  connection: {
    filename: './tests/knex/db.sqlite3'
  },
  migrations: {
    directory: './tests/knex/migrations'
  },
  seeds: {
    directory: './tests/knex/seeds'
  },
  useNullAsDefault: true
}

const qb = configure(config)

qb.addHook('before', 'select', '*', statements(qb))
qb.addHook('after', 'select', '*', rows(qb))
qb.addHook('before', 'insert', '*', data(qb))
qb.addHook('before', 'insert', '*', statements(qb))
qb.addHook('before', 'update', '*', data(qb))
qb.addHook('before', 'update', '*', statements(qb))
qb.addHook('before', 'delete', '*', statements(qb))

export default qb
