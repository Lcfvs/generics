import configure from '../../lib/knex/qb.js'
import hooks from '../../lib/knex/hooks/hooks.js'

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

qb.addHook('before', 'select', '*', hooks.statements(qb))
qb.addHook('after', 'select', '*', hooks.rows(qb))
qb.addHook('before', 'insert', '*', hooks.data(qb))
qb.addHook('before', 'insert', '*', hooks.statements(qb))
qb.addHook('before', 'update', '*', hooks.data(qb))
qb.addHook('before', 'update', '*', hooks.statements(qb))
qb.addHook('before', 'delete', '*', hooks.statements(qb))

export default qb
